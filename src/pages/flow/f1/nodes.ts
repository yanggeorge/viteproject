import { type FlowNode } from './types';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    type: 'textUpdater',
    data: { label: 'Default' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output' },
    position: { x: 250, y: 250 },
  },
  {
    id: '4',
    type: 'triangle',
    position: { x: 250, y: 5 },
    data: {
      label: '三角形节点',
      width: 180,
      height: 150,
      fill: '#9CBBFF',
    },
  },
] as FlowNode[];
