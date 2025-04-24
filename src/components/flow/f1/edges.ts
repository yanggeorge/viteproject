import { MarkerType, type Edge } from '@xyflow/react';

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
  },
  { id: 'e2_a-3', source: '2', sourceHandle: 'a', target: '3', type: 'smoothstep' },
] as Edge[];
