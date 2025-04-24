import { useHotkeys } from 'react-hotkeys-hook';
import { useShallow } from 'zustand/react/shallow';
import { defaultConfig } from '../constants';
import useFlowStore from '../stores/flowStore';
import type { FlowState, HistoryConfig, HistoryHookResult } from '../types';

const selector = (state: FlowState) => ({
  undoStack: state.undoStack,
  redoStack: state.redoStack,
  takeSnapshot: state.takeSnapshot,
  undo: state.undo,
  redo: state.redo,
});
// Undo/Redo Hook
export const useHistory = ({
  enableShortcuts = defaultConfig.enableShortcuts,
}: Partial<HistoryConfig> = defaultConfig): HistoryHookResult => {
  const { undoStack, redoStack, takeSnapshot, undo, redo } = useFlowStore(useShallow(selector));

  useHotkeys('meta+z, ctrl+z', undo, { enabled: enableShortcuts, preventDefault: true });
  useHotkeys('shift+meta+z, shift+ctrl+z', redo, { enabled: enableShortcuts, preventDefault: true });

  return {
    undo,
    redo,
    takeSnapshot,
    canUndo: undoStack.length === 0,
    canRedo: redoStack.length === 0,
  };
};
