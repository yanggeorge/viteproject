import React, { memo } from 'react';
import type { Node, ReactFlowState } from '@xyflow/react';
import { Handle, useStore, Position } from '@xyflow/react';

// Define the props type for the component.
// Although 'id' is implicitly passed by React Flow,
// explicitly defining it can be good practice if you pass other props.
// If no other props are expected, an empty interface or type could be used,
// or simply rely on React Flow's internal typing for 'id'.
interface CustomNodeProps {
  id: string;
  // Add any other props your node might receive here
  // data: any; // Example if you pass data
}

// Use React.FC (Functional Component) type and provide the props type.
// memo expects a component type, so we type the component first.
const CustomNode: React.FC<CustomNodeProps> = memo(({ id }) => {
  // Use the generic version of useStore to type the state slice.
  // ReactFlowState provides the type for the entire store state.
  const label = useStore<string | null>((s: ReactFlowState) => {
    // Get the node from the nodeLookup map.
    // The result can be Node<any> | undefined.
    const node: Node | undefined = s.nodeLookup.get(id);

    // If the node doesn't exist, return null.
    if (!node) {
      return null;
    }

    // Construct the label string using the node's position.
    // Use Math.round or parseInt to ensure integer display if desired.
    return `Position x:${Math.round(node.position.x)} y:${Math.round(node.position.y)}`;
  });

  return (
    // Basic div structure for the node content.
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff' }}>
      {/* Display the calculated label or a fallback message. */}
      <div>{label || 'Node not found'}</div>
      {/* Target handle on the left side. */}
      <Handle
        type="target"
        position={Position.Left}
        className="custom-handle" // Add styles for this class if needed
        style={{ background: '#555' }} // Example inline style
      />
      {/* You might want to add a source handle as well */}
      {/* <Handle type="source" position={Position.Right} style={{ background: '#555' }} /> */}
    </div>
  );
});

// Set a display name for debugging purposes.
CustomNode.displayName = 'CustomNode';

export default CustomNode;
