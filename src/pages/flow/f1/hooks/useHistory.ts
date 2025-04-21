import { useEffect } from 'react';
import { defaultConfig } from '../constants';
import useFlowStore from '../stores/flowStore';
import type { FlowState, HistoryConfig, HistoryHookResult } from '../types';
import { useShallow } from 'zustand/react/shallow';

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

  useEffect(() => {
    if (!enableShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
        if (event.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, enableShortcuts]);

  return {
    undo,
    redo,
    takeSnapshot,
    canUndo: undoStack.length === 0,
    canRedo: redoStack.length === 0,
  };
};
