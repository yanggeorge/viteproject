import { type Edge, type Node, type OnNodesChange, type OnEdgesChange, type OnConnect } from '@xyflow/react';

export type FlowNode = Node;
export type FlowState = {
  nodes: FlowNode[];
  edges: Edge[];
  multiNodesSelected: boolean;
  onNodesChange: OnNodesChange<FlowNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: FlowNode[] | ((nodes: FlowNode[]) => FlowNode[])) => void;
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
};

export interface SnappingResult {
  horizontal: number | undefined;
  vertical: number | undefined;
  snapPosition: {
    x: number | undefined;
    y: number | undefined;
  };
}
