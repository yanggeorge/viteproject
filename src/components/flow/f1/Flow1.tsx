import { MagicWandIcon } from '@radix-ui/react-icons';
import {
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';
import CustomEdge from './components/CustomEdge';
import { SnapLineRenderer } from './components/SnapLineRenderer';
import { TextUpdaterNode } from './components/TextUpdaterNode';
import { TriangleNode } from './components/TriangleNode';
import { FLOW_CONTAINER_STYLE } from './constants';
import useFlowStore from './stores/flowStore';
import { useCopyPaste } from './hooks/useCopyPaste';
import { useSnapLines } from './hooks/useSnapLines';
import type { FlowState } from './types';
import { useHistory } from './hooks/useHistory';
import { useCallback } from 'react';

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  triangle: TriangleNode,
};

const edgeTypes = {
  'custom-edge': CustomEdge,
};

const selector = (state: FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  multiNodesSelected: state.multiNodesSelected,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow1() {
  const { nodes, edges, multiNodesSelected, onNodesChange, onEdgesChange, onConnect } = useFlowStore(
    useShallow(selector),
  );
  const { snapLines, onNodeDrag, onNodeDragStop } = useSnapLines(nodes, multiNodesSelected);

  const { cut, copy, paste, copyNodes, setReactFlowWrapper } = useCopyPaste();
  // 是否有选中的节点
  const hasSelectedNodes = nodes.some((node) => node.selected);
  // 是否有缓冲区内容
  const hasBufferedContent = copyNodes.length > 0;

  const { undo, redo, canUndo, canRedo, takeSnapshot } = useHistory();

  const onNodeDragStart = useCallback(() => takeSnapshot(), [takeSnapshot]);
  const onSelectionDragStart = useCallback(() => takeSnapshot(), [takeSnapshot]);
  const onNodesDelete = useCallback(() => takeSnapshot(), [takeSnapshot]);
  const onEdgesDelete = useCallback(() => takeSnapshot(), [takeSnapshot]);

  return (
    <div style={FLOW_CONTAINER_STYLE}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        onNodeDragStart={onNodeDragStart}
        onSelectionDragStart={onSelectionDragStart}
        onNodesDelete={onNodesDelete}
        onEdgesDelete={onEdgesDelete}
        fitView
        elevateEdgesOnSelect
        elevateNodesOnSelect
        ref={setReactFlowWrapper}
      >
        <ControlsContainer />
        <SnapLineRenderer horizontal={snapLines.horizontal} vertical={snapLines.vertical} />
        <MiniMap zoomable pannable />
        <Background gap={12} size={1} color="#ddd" variant={BackgroundVariant.Dots} />
        <Panel position="top-right" className="bg-white border p-1 shadow-md rounded">
          Nodes: {nodes.length} Edges: {edges.length}
        </Panel>
        <Panel position="top-left" className="flex">
          <button className="button" onClick={cut} disabled={!hasSelectedNodes}>
            Cut
          </button>
          <button className="button" onClick={copy} disabled={!hasSelectedNodes}>
            Copy
          </button>
          <button className="button" onClick={() => paste({ x: 0, y: 0 })} disabled={!hasBufferedContent}>
            Paste
          </button>
        </Panel>
        <Panel position="bottom-center" className="flex">
          <button disabled={canUndo} className="button" onClick={undo}>
            <span>⤴️</span> undo
          </button>
          <button disabled={canRedo} className="button" onClick={redo}>
            redo <span>⤵️</span>
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

function ControlsContainer() {
  return (
    <Controls className="bg-white shadow-md rounded">
      <ControlButton title="magic wand" onClick={() => alert('Something magical just happened. ✨')}>
        <MagicWandIcon />
      </ControlButton>
    </Controls>
  );
}

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Flow1 />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
