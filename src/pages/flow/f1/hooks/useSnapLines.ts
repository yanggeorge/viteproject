import { useState, useCallback } from 'react';
import { calculateSnapping } from '../snappingUtils';
import type { FlowNode } from '../types';

const SNAP_THRESHOLD = 5;

export const useSnapLines = (nodes: FlowNode[], multiNodesSelected: boolean) => {
  const [snapLines, setSnapLines] = useState<{ horizontal?: number; vertical?: number }>({});

  const onNodeDrag = useCallback(
    (_event: React.MouseEvent, draggedNode: FlowNode) => {
      if (multiNodesSelected) return;
      setSnapLines({});
      const snapResult = calculateSnapping(draggedNode, nodes, SNAP_THRESHOLD);
      setSnapLines(snapResult);
      draggedNode.position.x = snapResult.snapPosition.x ?? draggedNode.position.x;
      draggedNode.position.y = snapResult.snapPosition.y ?? draggedNode.position.y;
    },
    [nodes, multiNodesSelected],
  );

  const onNodeDragStop = useCallback(() => setSnapLines({}), []);

  return { snapLines, onNodeDrag, onNodeDragStop };
};
