import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { CopyState } from '../types';

const useCopyStore = create<CopyState>()(
  devtools(
    (set, get) => ({
      copyNodes: [],
      copyEdges: [],
      setCopyNodes: (nodes) => {
        set((state) => ({
          copyNodes: typeof nodes === 'function' ? nodes(state.copyNodes) : nodes,
        }));
      },
      setCopyEdges: (edges) => {
        set((state) => ({
          copyEdges: typeof edges === 'function' ? edges(state.copyEdges) : edges,
        }));
      },
      getCopyNodes: () => get().copyNodes,
      getCopyEdges: () => get().copyEdges,
    }),
    {
      name: 'copyStore',
    },
  ),
);

export default useCopyStore;
