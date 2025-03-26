import { Background, BackgroundVariant, Controls, MiniMap, Panel, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import useFlowStore from './flowStore';
import type { FlowState } from './types';
import { TextUpdaterNode } from './TextUpdaterNode';
import CustomEdge from './CustomEdge';

const selector = (state: FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes = {
  textUpdater: TextUpdaterNode,
};

const edgeTypes = {
  'custom-edge': CustomEdge,
};

function Flow1() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowStore(useShallow(selector));

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        selectionOnDrag
        panOnDrag={[1, 2]}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap zoomable pannable />
        <Background gap={12} size={1} color="#000" variant={BackgroundVariant.Cross} />
        <Panel position="top-left" className="bg-white border p-1 sh">
          top-left
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default Flow1;
