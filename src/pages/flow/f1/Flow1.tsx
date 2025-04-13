import {
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  useStore,
} from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import { MagicWandIcon } from '@radix-ui/react-icons';
import type { JSX } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import CustomEdge from './CustomEdge';
import useFlowStore from './flowStore';
import KeyListener from './keyPress';
import { TextUpdaterNode } from './TextUpdaterNode';
import { TriangleNode } from './TriangleNode';
import type { FlowNode, FlowState, SnappingResult } from './types';

const selector = (state: FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  multiNodesSelected: state.multiNodesSelected,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  triangle: TriangleNode,
};

const edgeTypes = {
  'custom-edge': CustomEdge,
};

/**
 * Calculate snapping positions between dragged node and other nodes
 * @param {Object} draggedNode - The node being dragged
 * @param {Array} allNodes - All nodes in the flow
 * @param {number} snapThreshold - Distance threshold to trigger snapping
 * @returns {Object} Snapping guidelines and position
 */
const calculateSnapping = (draggedNode: FlowNode, allNodes: FlowNode[], snapThreshold: number): SnappingResult => {
  // Initialize result object
  const result: SnappingResult = {
    horizontal: undefined,
    vertical: undefined,
    snapPosition: { x: undefined, y: undefined },
  };

  // Find the dragged node in all nodes
  const targetNode = allNodes.find((node) => node.id === draggedNode.id);

  // If node not found or has no position, return empty result
  if (!targetNode || !draggedNode.position) return result;

  // Calculate dragged node boundaries
  const draggedNodeBounds = {
    left: draggedNode.position.x,
    right: draggedNode.position.x + (targetNode.measured?.width ?? 0),
    top: draggedNode.position.y,
    bottom: draggedNode.position.y + (targetNode.measured?.height ?? 0),
    width: targetNode.measured?.width ?? 0,
    height: targetNode.measured?.height ?? 0,
  };

  // Initialize minimum distances
  let minHorizontalDistance = snapThreshold;
  let minVerticalDistance = snapThreshold;

  // Check against all other nodes
  return allNodes
    .filter((node) => node.id !== targetNode.id)
    .reduce((acc, otherNode) => {
      console.log('🚀 ~ .reduce ~ otherNode:', otherNode);
      // Calculate other node boundaries
      const otherNodeBounds = {
        left: otherNode.position.x,
        right: otherNode.position.x + (otherNode.measured?.width ?? 0),
        top: otherNode.position.y,
        bottom: otherNode.position.y + (otherNode.measured?.height ?? 0),
        width: otherNode.measured?.width ?? 0,
        height: otherNode.measured?.height ?? 0,
      };

      // --- Vertical alignments (X-axis) ---

      // Left edges alignment
      const leftEdgesDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.left);
      if (leftEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left;
        acc.vertical = otherNodeBounds.left;
        minVerticalDistance = leftEdgesDist;
      }

      // Right edges alignment
      const rightEdgesDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.right);
      if (rightEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right - draggedNodeBounds.width;
        acc.vertical = otherNodeBounds.right;
        minVerticalDistance = rightEdgesDist;
      }

      // Left to right alignment
      const leftToRightDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.right);
      if (leftToRightDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right;
        acc.vertical = otherNodeBounds.right;
        minVerticalDistance = leftToRightDist;
      }

      // Right to left alignment
      const rightToLeftDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.left);
      if (rightToLeftDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left - draggedNodeBounds.width;
        acc.vertical = otherNodeBounds.left;
        minVerticalDistance = rightToLeftDist;
      }

      // --- Horizontal alignments (Y-axis) ---

      // Top edges alignment
      const topEdgesDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.top);
      if (topEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top;
        acc.horizontal = otherNodeBounds.top;
        minHorizontalDistance = topEdgesDist;
      }

      // Bottom to top alignment
      const bottomToTopDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.top);
      if (bottomToTopDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top - draggedNodeBounds.height;
        acc.horizontal = otherNodeBounds.top;
        minHorizontalDistance = bottomToTopDist;
      }

      // Bottom edges alignment
      const bottomEdgesDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.bottom);
      if (bottomEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom - draggedNodeBounds.height;
        acc.horizontal = otherNodeBounds.bottom;
        minHorizontalDistance = bottomEdgesDist;
      }

      // Top to bottom alignment
      const topToBottomDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.bottom);
      if (topToBottomDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom;
        acc.horizontal = otherNodeBounds.bottom;
        minHorizontalDistance = topToBottomDist;
      }

      return acc;
    }, result);
};

/**
 * SnapLineRenderer 组件 - 使用 Canvas 绘制节点对齐辅助线
 *
 * @param {Object} props - 组件属性
 * @param {number|undefined} props.horizontal - 水平辅助线的 y 坐标
 * @param {number|undefined} props.vertical - 垂直辅助线的 x 坐标
 * @returns {JSX.Element} - Canvas 渲染的辅助线
 */
function SnapLineRenderer({ horizontal, vertical }: { horizontal?: number; vertical?: number }): JSX.Element {
  // 从 React Flow store 获取视口尺寸和变换信息
  const { width, height, transform } = useStore((store) => ({
    width: store.width,
    height: store.height,
    transform: store.transform,
  }));
  // Canvas 引用
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 当辅助线位置、视口尺寸或变换变化时，重新绘制
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!ctx || !canvas) return;

    // 适配高分辨率屏幕
    const pixelRatio = window.devicePixelRatio;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    // 缩放 canvas 以适应设备像素比
    ctx.scale(pixelRatio, pixelRatio);

    // 清除之前的绘制内容
    ctx.clearRect(0, 0, width, height);

    // 设置辅助线样式
    ctx.strokeStyle = '#0041d0';

    // 绘制垂直辅助线 (如果存在)
    if (typeof vertical === 'number') {
      // 应用视口变换 [x, y, scale]
      const transformedX = vertical * transform[2] + transform[0];
      ctx.beginPath();
      ctx.moveTo(transformedX, 0);
      ctx.lineTo(transformedX, height);
      ctx.stroke();
    }

    // 绘制水平辅助线 (如果存在)
    if (typeof horizontal === 'number') {
      // 应用视口变换 [x, y, scale]
      const transformedY = horizontal * transform[2] + transform[1];
      ctx.beginPath();
      ctx.moveTo(0, transformedY);
      ctx.lineTo(width, transformedY);
      ctx.stroke();
    }
  }, [width, height, transform, horizontal, vertical]);

  return (
    <canvas
      ref={canvasRef}
      className="react-flow__snap-lines-canvas"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  );
}

function Flow1() {
  const { nodes, edges, multiNodesSelected, onNodesChange, onEdgesChange, onConnect } = useFlowStore(
    useShallow(selector),
  );

  const onNodeDragStart = (event: React.MouseEvent, node: FlowNode, nodes: FlowNode[]) => {
    // if (multiNodesSelected) {
    //   return;
    // }
    console.log('onNodeDragStart', event, node, nodes);
  };

  const [snapLines, setSnapLines] = useState<SnappingResult>({
    horizontal: undefined,
    vertical: undefined,
    snapPosition: { x: undefined, y: undefined },
  });

  const onNodeDrag = useCallback(
    (_event: React.MouseEvent, draggedNode: FlowNode) => {
      if (multiNodesSelected) {
        return;
      }

      const snapThreshold = 5;
      // Make sure `nodes` here refers to the current state from useNodesState
      const allNodes = nodes;
      const snappingResult = calculateSnapping(draggedNode, allNodes, snapThreshold);

      // Update visual snap lines state regardless
      setSnapLines(snappingResult);
      draggedNode.position.x = snappingResult.snapPosition.x ?? draggedNode.position.x;
      draggedNode.position.y = snappingResult.snapPosition.y ?? draggedNode.position.y;
    },
    [nodes, multiNodesSelected, setSnapLines], // Add dependencies
  );

  // You might also want to clear snap lines when dragging stops
  const onNodeDragStop = useCallback(() => {
    setSnapLines({
      horizontal: undefined,
      vertical: undefined,
      snapPosition: { x: undefined, y: undefined },
    });
  }, [setSnapLines]);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneContextMenu={(event) => {
          event.preventDefault();
          console.log('onPaneContextMenu', event);
        }}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeDragStart={onNodeDragStart}
        onNodeDragStop={onNodeDragStop}
        onNodeDrag={onNodeDrag}
        debug={false} // 显示各种事件的信息
        elevateEdgesOnSelect={true}
        elevateNodesOnSelect={true}
      >
        <Controls className="bg-blue-500">
          <ControlButton title="magic wand" onClick={() => alert('Something magical just happened. ✨')}>
            <MagicWandIcon />
          </ControlButton>
        </Controls>
        <MiniMap zoomable pannable />
        <Background gap={12} size={1} color="#000" variant={BackgroundVariant.Cross} />
        <Panel position="top-left" className="bg-white border p-1 sh">
          top-left
        </Panel>
        <SnapLineRenderer horizontal={snapLines.horizontal} vertical={snapLines.vertical} />
      </ReactFlow>
      <KeyListener />
    </div>
  );
}

export default Flow1;
