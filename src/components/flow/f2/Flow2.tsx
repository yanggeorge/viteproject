import type { GetMiniMapNodeAttribute, Node } from '@xyflow/react';
import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { useCallback } from 'react';

import '@xyflow/react/dist/style.css';
import './index.css';

import AnnotationNode from './AnnotationNode';
import ButtonEdge from './ButtonEdge';
import CircleNode from './CircleNode';
import { edges as initialEdges, nodes as initialNodes } from './initial-elements';
import ResizerNode from './ResizerNode';
import TextInputNode from './TextInputNode';
import ToolbarNode from './ToolbarNode';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextInputNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName: GetMiniMapNodeAttribute<Node> = (node: Node) => node.type as string;

const Flow2 = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        style={{ backgroundColor: '#F7F9FB' }}
      >
        <MiniMap zoomable pannable nodeClassName={nodeClassName} />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flow2;
