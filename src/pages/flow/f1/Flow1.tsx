import { Background, BackgroundVariant, ControlButton, Controls, MiniMap, Panel, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';
import type { SnapLineRendererProps } from './SnapLineRenderer';
import { SnapLineRenderer } from './SnapLineRenderer';
import { calculateSnapping } from './snappingUtils';

import '@xyflow/react/dist/style.css';

import { MagicWandIcon } from '@radix-ui/react-icons';
import { useCallback, useState } from 'react';
import CustomEdge from './CustomEdge';
import useFlowStore from './flowStore';
import KeyListener from './keyPress';
import { TextUpdaterNode } from './TextUpdaterNode';
import { TriangleNode } from './TriangleNode';
import type { FlowNode, FlowState } from './types';

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

  const [snapLines, setSnapLines] = useState<SnapLineRendererProps>({
    horizontal: undefined,
    vertical: undefined,
  });

  const onNodeDrag = useCallback(
    (_event: React.MouseEvent, draggedNode: FlowNode) => {
      if (multiNodesSelected) {
        return;
      }
      setSnapLines({});
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
    setSnapLines({});
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
        debug={false}
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
