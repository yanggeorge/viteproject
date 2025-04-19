import type { Edge } from '@xyflow/react';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { initialEdges } from '../edges';
import { initialNodes } from '../nodes';
import { type FlowState } from '../types';

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useFlowStore = create<FlowState>()(
  devtools(
    (set, get) => ({
      nodes: initialNodes,
      edges: initialEdges,
      multiNodesSelected: false,

      onNodesChange: (changes) => {
        const updatedNodes = applyNodeChanges(changes, get().nodes); // 更新后的节点
        const selectedNodes = updatedNodes.filter((node) => node.selected);

        set({
          nodes: updatedNodes,
          multiNodesSelected: selectedNodes.length > 1, // 基于更新后的节点判断
        });
      },

      onEdgesChange: (changes) => {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },

      onConnect: (connection) => {
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
        set((state) => ({
          nodes: typeof nodes === 'function' ? nodes(state.nodes) : nodes,
        }));
      },
      setEdges: (edges) => {
        set((state) => ({
          edges: typeof edges === 'function' ? edges(state.edges) : edges,
        }));
      },
      getNodes: () => get().nodes,
      getEdges: () => get().edges,
      getMultiNodesSelected: () => get().multiNodesSelected,
    }),
    {
      name: 'flowStore',
    },
  ),
);

export default useFlowStore;
