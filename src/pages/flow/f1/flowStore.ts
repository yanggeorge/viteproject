import type { Edge } from '@xyflow/react';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { create } from 'zustand';

import { initialEdges } from './edges';
import { initialNodes } from './nodes';
import { type FlowState } from './types';

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useFlowStore = create<FlowState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    console.log(connection);
    const edge: Edge = {
      id: [
        `e${connection.source}`,
        connection.sourceHandle ? `_${connection.sourceHandle}` : '',
        `-${connection.target}`,
        connection.targetHandle ? `_${connection.targetHandle}` : '',
      ].join(''),
      source: connection.source,
      sourceHandle: connection.sourceHandle,
      target: connection.target,
      targetHandle: connection.targetHandle,
      type: 'custom-edge',
    };
    set({
      edges: addEdge(edge, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set((state) => ({
      edges: typeof edges === 'function' ? edges(state.edges) : edges,
    }));
  },
}));

export default useFlowStore;
