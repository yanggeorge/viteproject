import type { ChangeEvent } from 'react';
import React, { Fragment, memo } from 'react';
import type {
  Node,
  Edge,
  ReactFlowState,
  NodeDimensionChange,
  NodeChange} from '@xyflow/react';
import {
  Handle,
  useStore,
  Position,
  useReactFlow,
  applyNodeChanges,
} from '@xyflow/react';

// Define the specific attributes we are interested in.
// Using a const assertion for stricter typing.
const dimensionAttrs = ['width', 'height'] as const;
// Define a type for the dimension attributes.
type DimensionAttribute = (typeof dimensionAttrs)[number]; // 'width' | 'height'

// Define the expected props for the component.
interface DimensionNodeProps {
  id: string;
  // Add other potential props if needed
  // data?: any;
}

// Define the type for the dimensions state.
interface Dimensions {
  width: number;
  height: number;
}

// The main component, typed with React.FC and memoized.
const DimensionNode: React.FC<DimensionNodeProps> = memo(({ id }) => {
  // Get setNodes function from React Flow hook.
  // It's good practice to type the generic Node type if you have custom node data.
  // Using Node<any> for now as data structure isn't specified.
  const { setNodes, getNode } = useReactFlow<any, any>();

  // Use the store to get dimensions of a specific node ('2-3')
  // if it exists and is connected via an edge to the current node.
  const dimensions = useStore<Dimensions | null>((s: ReactFlowState) => {
    // Target node whose dimensions we want to display/control.
    const targetNodeId = '2-3';
    const node = s.nodeLookup.get(targetNodeId);

    // Check if the target node exists, has measured dimensions,
    // and if there's an edge connecting to the *current* node (id).
    const hasConnection = s.edges.some((edge: Edge) => edge.target === id && edge.source === targetNodeId);

    if (!node?.measured?.width || !node?.measured?.height || !hasConnection) {
      return null;
    }

    // Return the measured dimensions.
    return {
      width: node.measured.width,
      height: node.measured.height,
    };
  });

  // Function generator for updating a specific dimension ('width' or 'height').
  const updateDimension = (attr: DimensionAttribute) => (event: ChangeEvent<HTMLInputElement>) => {
    // Ensure the value is parsed as an integer.
    const value = parseInt(event.target.value, 10);
    // Target node whose dimensions we are changing.
    const targetNodeId = '2-3';
    // Parent node ID (used for boundary checks).
    const parentNodeId = '2-1';

    // Validate the parsed value.
    if (isNaN(value)) {
      return;
    }

    setNodes((nds: Node[]) => {
      const parentNode = nds.find((n) => n.id === parentNodeId);
      const targetNode = nds.find((n) => n.id === targetNodeId);

      if (!targetNode) return nds; // Target node must exist

      // Determine parent dimensions for boundary checks.
      // Safely parse style values, providing defaults.
      const parentWidth = parentNode?.style?.width ? parseInt(String(parentNode.style.width), 10) : Infinity;
      const parentHeight = parentNode?.style?.height ? parseInt(String(parentNode.style.height), 10) : Infinity;

      // Check if parsing failed for parent dimensions; default to Infinity.
      const safeParentWidth = isNaN(parentWidth) ? Infinity : parentWidth;
      const safeParentHeight = isNaN(parentHeight) ? Infinity : parentHeight;

      // Current position of the target node.
      const currentPosX = targetNode.position.x;
      const currentPosY = targetNode.position.y;

      // Calculate max allowed dimensions based on parent boundaries and target position.
      const maxWidth = Math.max(safeParentWidth - currentPosX, 0);
      const maxHeight = Math.max(safeParentHeight - currentPosY, 0);

      // Get current dimensions from style, default to 0 if not present or invalid.
      const currentWidth = targetNode.style?.width ? parseInt(String(targetNode.style.width), 10) : 0;
      const currentHeight = targetNode.style?.height ? parseInt(String(targetNode.style.height), 10) : 0;
      const safeCurrentWidth = isNaN(currentWidth) ? 0 : currentWidth;
      const safeCurrentHeight = isNaN(currentHeight) ? 0 : currentHeight;

      // Calculate the new size, ensuring it respects the boundaries.
      const newSize = {
        width: attr === 'width' ? Math.min(value, maxWidth) : safeCurrentWidth,
        height: attr === 'height' ? Math.min(value, maxHeight) : safeCurrentHeight,
      };

      // Create the change object for the target node.
      // Using NodeDimensionChange type for clarity.
      const dimensionChange: NodeDimensionChange = {
        id: targetNodeId,
        type: 'dimensions',
        resizing: true, // Indicate resizing is happening
        dimensions: {
          width: newSize.width,
          height: newSize.height,
        },
      };

      // Create a style change object as well, as the original code modified style directly.
      // Note: Modifying style directly might conflict with React Flow's internal dimension handling.
      // It's generally better to rely on the 'dimensions' change type.
      // Keeping the style update here to match the original logic.
      const styleChange: NodeChange = {
        id: targetNodeId,
        type: 'select', // Using 'select' as a placeholder type, as there's no direct 'style' change type.
        // A custom change type or direct manipulation might be needed if style is the primary goal.
        // However, applyNodeChanges expects specific types.
        // A safer approach might be to map and directly modify the node object.
        selected: targetNode.selected || false, // Preserve selection state
      };

      // Apply the changes using applyNodeChanges for consistency
      // return applyNodeChanges([dimensionChange], nds); // Preferred React Flow way

      // --- OR ---
      // Manually map and update the node to exactly match original logic (direct style manipulation)
      return nds.map((n) => {
        if (n.id === targetNodeId) {
          return {
            ...n,
            style: {
              ...n.style,
              width: newSize.width, // Update style directly
              height: newSize.height, // Update style directly
            },
            // Optionally update width/height properties if needed, though style is often preferred
            // width: newSize.width,
            // height: newSize.height,
          };
        }
        return n;
      });
    });
  };

  return (
    // Node container
    <div
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        background: 'white',
        minWidth: '150px', // Ensure minimum width for inputs
      }}
    >
      {/* Map through dimension attributes to create label and input pairs. */}
      {dimensionAttrs.map((attr: DimensionAttribute) => (
        <Fragment key={attr}>
          <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label htmlFor={`${id}-${attr}`} style={{ marginRight: '5px', textTransform: 'capitalize' }}>
              {attr}
            </label>
            <input
              id={`${id}-${attr}`} // Add id for label association
              type="number"
              // Display the dimension value from state, default to 0.
              value={dimensions ? Math.round(dimensions[attr]) : 0}
              onChange={updateDimension(attr)}
              // Add nodrag class to prevent node dragging when interacting with input.
              className="text-input-node__input nodrag"
              // Disable input if dimensions are not available.
              disabled={!dimensions}
              style={{ width: '60px', padding: '2px' }} // Basic input styling
            />
          </div>
        </Fragment>
      ))}
      {/* Display message if dimensions are not loaded/available */}
      {!dimensions && (
        <div style={{ marginTop: '5px', fontSize: '0.8em', color: '#888' }}>Target node not connected or found</div>
      )}
      {/* Target handle at the top */}
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle" // Add styles if needed
        style={{ background: '#555' }} // Example inline style
      />
      {/* Source handle (example) */}
      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
});

// Set display name for easier debugging.
DimensionNode.displayName = 'DimensionNode';

export default DimensionNode;
