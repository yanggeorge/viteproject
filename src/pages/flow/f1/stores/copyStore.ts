import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { CopyState } from '../types';

const createCopyStoreSlice: StateCreator<CopyState, [['zustand/immer', never], ['zustand/devtools', unknown]]> = (
  set,
  get,
) => ({
  copyNodes: [],
  copyEdges: [],
  setCopyNodes: (nodes) => {
    set(
      (state) => ({
        copyNodes: typeof nodes === 'function' ? nodes(state.copyNodes) : nodes,
      }),
      undefined,
      'setCopyNodes',
    );
  },
  setCopyEdges: (edges) => {
    set(
      (state) => ({
        copyEdges: typeof edges === 'function' ? edges(state.copyEdges) : edges,
      }),
      undefined,
      'setCopyEdges',
    );
  },
  getCopyNodes: () => get().copyNodes,
  getCopyEdges: () => get().copyEdges,
});

const useCopyStore = create<CopyState>()(
  immer(
    devtools(createCopyStoreSlice, {
      name: 'copy store',
    }),
  ),
);

export default useCopyStore;
