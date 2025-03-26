import { type Edge, type Node, type OnNodesChange, type OnEdgesChange, type OnConnect } from '@xyflow/react';

export type FlowNode = Node;

export type FlowState = {
  nodes: FlowNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<FlowNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: FlowNode[]) => void;
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
};
