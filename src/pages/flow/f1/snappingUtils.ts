import type { FlowNode, SnappingResult } from './types';

/**
 * Calculate snapping positions between dragged node and other nodes
 * @param {Object} draggedNode - The node being dragged
 * @param {Array} allNodes - All nodes in the flow
 * @param {number} snapThreshold - Distance threshold to trigger snapping
 * @returns {Object} Snapping guidelines and position
 */
export const calculateSnapping = (
  draggedNode: FlowNode,
  allNodes: FlowNode[],
  snapThreshold: number,
): SnappingResult => {
  // Initialize result object
  const result: SnappingResult = {
    horizontal: undefined,
    vertical: undefined,
    snapPosition: { x: undefined, y: undefined },
  };

  // Find the dragged node in all nodes
  const targetNode = allNodes.find((node) => node.id === draggedNode.id);

  // If node not found or has no position, return empty result
  if (!targetNode || !draggedNode.position) return result;

  // Calculate dragged node boundaries
  const draggedNodeBounds = {
    left: draggedNode.position.x,
    right: draggedNode.position.x + (targetNode.measured?.width ?? 0),
    top: draggedNode.position.y,
    bottom: draggedNode.position.y + (targetNode.measured?.height ?? 0),
    width: targetNode.measured?.width ?? 0,
    height: targetNode.measured?.height ?? 0,
  };

  // Initialize minimum distances
  let minHorizontalDistance = snapThreshold;
  let minVerticalDistance = snapThreshold;

  // Check against all other nodes
  return allNodes
    .filter((node) => node.id !== targetNode.id)
    .reduce((acc, otherNode) => {
      console.log('🚀 ~ .reduce ~ otherNode:', otherNode);
      // Calculate other node boundaries
      const otherNodeBounds = {
        left: otherNode.position.x,
        right: otherNode.position.x + (otherNode.measured?.width ?? 0),
        top: otherNode.position.y,
        bottom: otherNode.position.y + (otherNode.measured?.height ?? 0),
        width: otherNode.measured?.width ?? 0,
        height: otherNode.measured?.height ?? 0,
      };

      // --- Vertical alignments (X-axis) ---

      // Left edges alignment
      const leftEdgesDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.left);
      if (leftEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left;
        acc.vertical = otherNodeBounds.left;
        minVerticalDistance = leftEdgesDist;
      }

      // Right edges alignment
      const rightEdgesDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.right);
      if (rightEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right - draggedNodeBounds.width;
        acc.vertical = otherNodeBounds.right;
        minVerticalDistance = rightEdgesDist;
      }

      // Left to right alignment
      const leftToRightDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.right);
      if (leftToRightDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right;
        acc.vertical = otherNodeBounds.right;
        minVerticalDistance = leftToRightDist;
      }

      // Right to left alignment
      const rightToLeftDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.left);
      if (rightToLeftDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left - draggedNodeBounds.width;
        acc.vertical = otherNodeBounds.left;
        minVerticalDistance = rightToLeftDist;
      }

      // --- Horizontal alignments (Y-axis) ---

      // Top edges alignment
      const topEdgesDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.top);
      if (topEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top;
        acc.horizontal = otherNodeBounds.top;
        minHorizontalDistance = topEdgesDist;
      }

      // Bottom to top alignment
      const bottomToTopDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.top);
      if (bottomToTopDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top - draggedNodeBounds.height;
        acc.horizontal = otherNodeBounds.top;
        minHorizontalDistance = bottomToTopDist;
      }

      // Bottom edges alignment
      const bottomEdgesDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.bottom);
      if (bottomEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom - draggedNodeBounds.height;
        acc.horizontal = otherNodeBounds.bottom;
        minHorizontalDistance = bottomEdgesDist;
      }

      // Top to bottom alignment
      const topToBottomDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.bottom);
      if (topToBottomDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom;
        acc.horizontal = otherNodeBounds.bottom;
        minHorizontalDistance = topToBottomDist;
      }

      return acc;
    }, result);
};
