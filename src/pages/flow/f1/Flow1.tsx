import { Background, BackgroundVariant, ControlButton, Controls, MiniMap, Panel, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import useFlowStore from './flowStore';
import type { FlowNode, FlowState, SnappingResult } from './types';
import { TextUpdaterNode } from './TextUpdaterNode';
import CustomEdge from './CustomEdge';
import KeyListener from './keyPress';
import { MagicWandIcon } from '@radix-ui/react-icons';
import { TriangleNode } from './TriangleNode';

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
    right: draggedNode.position.x + (targetNode.width ?? 0),
    top: draggedNode.position.y,
    bottom: draggedNode.position.y + (targetNode.height ?? 0),
    width: targetNode.width ?? 0,
    height: targetNode.height ?? 0,
  };

  // Initialize minimum distances
  let minHorizontalDistance = snapThreshold;
  let minVerticalDistance = snapThreshold;

  // Check against all other nodes
  return allNodes
    .filter((node) => node.id !== targetNode.id)
    .reduce((acc, otherNode) => {
      // Calculate other node boundaries
      const otherNodeBounds = {
        left: otherNode.position.x,
        right: otherNode.position.x + (otherNode.width ?? 0),
        top: otherNode.position.y,
        bottom: otherNode.position.y + (otherNode.height ?? 0),
        width: otherNode.width ?? 0,
        height: otherNode.height ?? 0,
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

  const onNodeDrag = (_event: React.MouseEvent, node: FlowNode) => {
    if (multiNodesSelected) {
      return;
    }
    const snapThreshold = 5;
    const snappingResult = calculateSnapping(node, nodes, snapThreshold);
    if (snappingResult.horizontal !== undefined || snappingResult.vertical !== undefined) {
      console.log('Snapping Result:', snappingResult);
    }
  };

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
      </ReactFlow>
      <KeyListener />
    </div>
  );
}

export default Flow1;
