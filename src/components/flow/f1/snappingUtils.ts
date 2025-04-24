import type { FlowNode, SnappingResult } from './types';

/**
 * Calculate snapping positions between dragged node and other nodes, including center alignment.
 * @param {FlowNode} draggedNode - The node being dragged (must have position).
 * @param {FlowNode[]} allNodes - All nodes in the flow (used to find dimensions).
 * @param {number} snapThreshold - Distance threshold to trigger snapping.
 * @returns {SnappingResult} Snapping guidelines and the calculated snap position.
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

  // Find the full node data for the dragged node to get its dimensions
  const targetNode = allNodes.find((node) => node.id === draggedNode.id);

  // If the dragged node isn't found in allNodes, or has no position/dimensions, return empty result
  if (!targetNode || !draggedNode.position || !targetNode.measured?.width || !targetNode.measured?.height) {
    console.warn('Dragged node data incomplete for snapping.');
    return result;
  }

  // Calculate dragged node boundaries and center
  const draggedNodeBounds = {
    left: draggedNode.position.x,
    right: draggedNode.position.x + targetNode.measured.width,
    top: draggedNode.position.y,
    bottom: draggedNode.position.y + targetNode.measured.height,
    width: targetNode.measured.width,
    height: targetNode.measured.height,
    centerX: draggedNode.position.x + targetNode.measured.width / 2,
    centerY: draggedNode.position.y + targetNode.measured.height / 2,
  };

  // Initialize minimum distances to the threshold
  let minHorizontalDistance = snapThreshold; // Tracks smallest distance for Y snapping
  let minVerticalDistance = snapThreshold; // Tracks smallest distance for X snapping

  // Iterate through all *other* nodes to check for potential snaps
  return allNodes
    .filter((node) => node.id !== targetNode.id && node.position && node.measured && node.measured) // Ensure other nodes are valid for snapping
    .reduce((acc, otherNode) => {
      // Calculate other node boundaries and center
      // Added non-null assertions (!) because we filter for these properties above
      const otherNodeBounds = {
        left: otherNode.position!.x,
        right: otherNode.position!.x + (otherNode.measured!.width ?? 0),
        top: otherNode.position!.y,
        bottom: otherNode.position!.y + (otherNode.measured!.height ?? 0),
        width: otherNode.measured!.width ?? 0,
        height: otherNode.measured!.height ?? 0,
        centerX: otherNode.position!.x + (otherNode.measured!.width ?? 0) / 2,
        centerY: otherNode.position!.y + (otherNode.measured!.height ?? 0) / 2,
      };

      // --- Vertical Snapping Checks (affecting X position) ---
      // Center X <-> Center X  [NEW]
      const centerDistX = Math.abs(draggedNodeBounds.centerX - otherNodeBounds.centerX);
      if (centerDistX < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.centerX - draggedNodeBounds.width / 2; // Snap dragged center to other center
        acc.vertical = otherNodeBounds.centerX; // Guideline at other center X
        minVerticalDistance = centerDistX;
      }

      // Left Edge <-> Left Edge
      const leftEdgesDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.left);
      if (leftEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left; // Snap dragged left to other left
        acc.vertical = otherNodeBounds.left; // Guideline at other left
        minVerticalDistance = leftEdgesDist;
      }

      // Right Edge <-> Right Edge
      const rightEdgesDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.right);
      if (rightEdgesDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right - draggedNodeBounds.width; // Snap dragged right to other right
        acc.vertical = otherNodeBounds.right; // Guideline at other right
        minVerticalDistance = rightEdgesDist;
      }

      // Left Edge <-> Right Edge
      const leftToRightDist = Math.abs(draggedNodeBounds.left - otherNodeBounds.right);
      if (leftToRightDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.right; // Snap dragged left to other right
        acc.vertical = otherNodeBounds.right; // Guideline at other right
        minVerticalDistance = leftToRightDist;
      }

      // Right Edge <-> Left Edge
      const rightToLeftDist = Math.abs(draggedNodeBounds.right - otherNodeBounds.left);
      if (rightToLeftDist < minVerticalDistance) {
        acc.snapPosition.x = otherNodeBounds.left - draggedNodeBounds.width; // Snap dragged right to other left
        acc.vertical = otherNodeBounds.left; // Guideline at other left
        minVerticalDistance = rightToLeftDist;
      }

      // --- Horizontal Snapping Checks (affecting Y position) ---

      // Center Y <-> Center Y [NEW]
      const centerDistY = Math.abs(draggedNodeBounds.centerY - otherNodeBounds.centerY);
      if (centerDistY < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.centerY - draggedNodeBounds.height / 2; // Snap dragged center to other center
        acc.horizontal = otherNodeBounds.centerY; // Guideline at other center Y
        minHorizontalDistance = centerDistY;
      }

      // Top Edge <-> Top Edge
      const topEdgesDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.top);
      if (topEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top; // Snap dragged top to other top
        acc.horizontal = otherNodeBounds.top; // Guideline at other top
        minHorizontalDistance = topEdgesDist;
      }

      // Bottom Edge <-> Top Edge
      const bottomToTopDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.top);
      if (bottomToTopDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.top - draggedNodeBounds.height; // Snap dragged bottom to other top
        acc.horizontal = otherNodeBounds.top; // Guideline at other top
        minHorizontalDistance = bottomToTopDist;
      }

      // Bottom Edge <-> Bottom Edge
      const bottomEdgesDist = Math.abs(draggedNodeBounds.bottom - otherNodeBounds.bottom);
      if (bottomEdgesDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom - draggedNodeBounds.height; // Snap dragged bottom to other bottom
        acc.horizontal = otherNodeBounds.bottom; // Guideline at other bottom
        minHorizontalDistance = bottomEdgesDist;
      }

      // Top Edge <-> Bottom Edge
      const topToBottomDist = Math.abs(draggedNodeBounds.top - otherNodeBounds.bottom);
      if (topToBottomDist < minHorizontalDistance) {
        acc.snapPosition.y = otherNodeBounds.bottom; // Snap dragged top to other bottom
        acc.horizontal = otherNodeBounds.bottom; // Guideline at other bottom
        minHorizontalDistance = topToBottomDist;
      }

      // Return the accumulated result for the next iteration
      return acc;
    }, result); // Start the reduction with the initial result object
};
