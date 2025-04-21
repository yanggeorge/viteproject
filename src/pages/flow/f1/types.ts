import { type Edge, type Node, type OnNodesChange, type OnEdgesChange, type OnConnect } from '@xyflow/react';

export type FlowNode = Node;
export type FlowState = {
  nodes: FlowNode[];
  edges: Edge[];
  multiNodesSelected: boolean;
  onNodesChange: OnNodesChange<FlowNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: FlowNode[] | ((nodes: FlowNode[]) => FlowNode[])) => void;
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  getNodes: () => FlowNode[];
  getEdges: () => Edge[];
  getMultiNodesSelected: () => boolean;

  // Undo/Redo stacks
  undoStack: Snapshot[];
  redoStack: Snapshot[];
  takeSnapshot: () => void;
  undo: () => void;
  redo: () => void;
  getUndoStack: () => Snapshot[];
  getRedoStack: () => Snapshot[];
};

export interface SnappingResult {
  horizontal: number | undefined;
  vertical: number | undefined;
  snapPosition: {
    x: number | undefined;
    y: number | undefined;
  };
}

export type CopyState = {
  copyNodes: FlowNode[];
  copyEdges: Edge[];
  setCopyNodes: (nodes: FlowNode[] | ((nodes: FlowNode[]) => FlowNode[])) => void;
  setCopyEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  getCopyNodes: () => FlowNode[];
  getCopyEdges: () => Edge[];
};

export interface HistoryConfig {
  maxHistorySize: number;
  enableShortcuts: boolean;
}

export interface HistoryHookResult {
  undo: () => void;
  redo: () => void;
  takeSnapshot: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export interface Snapshot {
  nodes: Node[];
  edges: Edge[];
}
