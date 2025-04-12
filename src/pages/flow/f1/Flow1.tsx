import { Background, BackgroundVariant, ControlButton, Controls, MiniMap, Panel, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import useFlowStore from './flowStore';
import type { FlowState } from './types';
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

function Flow1() {
  const { nodes, edges, multiNodesSelected, onNodesChange, onEdgesChange, onConnect } = useFlowStore(
    useShallow(selector),
  );

  const onNodeDragStart = (event: React.MouseEvent, node: any) => {
    if (multiNodesSelected) {
      return;
    }
    console.log('onNodeDragStart', event, node);
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
        debug={false} // 显示各种事件的信息
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
