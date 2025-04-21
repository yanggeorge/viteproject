import type { Edge } from '@xyflow/react';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { initialEdges } from '../edges';
import { initialNodes } from '../nodes';
import { type FlowState } from '../types';
import { defaultConfig } from '../constants';

const maxHistorySize = defaultConfig.maxHistorySize;
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
        get().takeSnapshot(); // 在连接之前保存快照
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

      // Undo/Redo stacks
      undoStack: [],
      redoStack: [],
      takeSnapshot: () => {
        const { undoStack, nodes, edges } = get();
        set({
          undoStack: [...undoStack.slice(undoStack.length - maxHistorySize + 1, undoStack.length), { nodes, edges }],
          redoStack: [],
        });
      },
      undo: () => {
        const { undoStack, redoStack, nodes, edges } = get();
        const snapshot = undoStack[undoStack.length - 1];
        if (snapshot) {
          set({
            undoStack: undoStack.slice(0, undoStack.length - 1),
            redoStack: [...redoStack, { nodes, edges }],
            nodes: snapshot.nodes,
            edges: snapshot.edges,
          });
        }
      },
      redo: () => {
        const { redoStack, undoStack, nodes, edges } = get();
        const snapshot = redoStack[redoStack.length - 1];
        if (snapshot) {
          set({
            redoStack: redoStack.slice(0, redoStack.length - 1),
            undoStack: [...undoStack, { nodes, edges }],
            nodes: snapshot.nodes,
            edges: snapshot.edges,
          });
        }
      },
      getUndoStack: () => get().undoStack,
      getRedoStack: () => get().redoStack,
    }),
    {
      name: 'flowStore',
    },
  ),
);

export default useFlowStore;
