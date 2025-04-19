import { useCallback, useEffect, useState } from 'react';
import { defaultConfig } from '../constants';
import type { HistoryConfig, HistoryHookResult, Snapshot } from '../types';
import { useReactFlow } from '@xyflow/react';

// Undo/Redo Hook
export const useHistory = ({
  maxHistorySize = defaultConfig.maxHistorySize,
  enableShortcuts = defaultConfig.enableShortcuts,
}: Partial<HistoryConfig> = defaultConfig): HistoryHookResult => {
  const [undoStack, setUndoStack] = useState<Snapshot[]>([]);
  const [redoStack, setRedoStack] = useState<Snapshot[]>([]);
  const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

  const takeSnapshot = useCallback(() => {
    setUndoStack((prev) => [
      ...prev.slice(prev.length - maxHistorySize + 1, prev.length),
      { nodes: getNodes(), edges: getEdges() },
    ]);
    setRedoStack([]);
  }, [getNodes, getEdges, maxHistorySize]);

  const undo = useCallback(() => {
    const snapshot = undoStack[undoStack.length - 1];
    if (snapshot) {
      setUndoStack((prev) => prev.slice(0, prev.length - 1));
      setRedoStack((prev) => [...prev, { nodes: getNodes(), edges: getEdges() }]);
      setNodes(snapshot.nodes);
      setEdges(snapshot.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, undoStack]);

  const redo = useCallback(() => {
    const snapshot = redoStack[redoStack.length - 1];
    if (snapshot) {
      setRedoStack((prev) => prev.slice(0, prev.length - 1));
      setUndoStack((prev) => [...prev, { nodes: getNodes(), edges: getEdges() }]);
      setNodes(snapshot.nodes);
      setEdges(snapshot.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, redoStack]);

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
