import { type Node } from '@xyflow/react';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 100, y: 20 },
  },

  {
    id: '2',
    type: 'textUpdater',
    data: { label: 'Default' },
    position: { x: 100, y: 120 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output' },
    position: { x: 100, y: 240 },
  },
  {
    id: '4',
    type: 'triangle',
    position: { x: 300, y: 5 },
    data: {
      label: '三角形节点',
      width: 180,
      height: 150,
      fill: '#9CBBFF',
    },
  },
] as Node[];
