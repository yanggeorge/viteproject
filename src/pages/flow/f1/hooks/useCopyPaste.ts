import type { Edge, Node } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react'; // Assuming Node/Edge types are exported
import { useCallback, useEffect, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useShallow } from 'zustand/react/shallow';
import useCopyStore from '../stores/copyStore';
import useFlowStore from '../stores/flowStore';
import type { CopyState, FlowState } from '../types'; // Import CopyState if needed for selectors

// 假设的辅助函数：筛选与选中节点相关的边
const filterRelatedEdges = (nodes: Node[], edges: Edge[]): Edge[] => {
  return edges.filter((edge) => {
    const isSourceSelected = nodes.some((node) => node.id === edge.source);
    const isTargetSelected = nodes.some((node) => node.id === edge.target);
    return isSourceSelected && isTargetSelected;
  });
};

// Selector for flow store state needed by the hook
const flowSelector = (state: FlowState) => ({
  getNodes: state.getNodes,
  getEdges: state.getEdges,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
  takeSnapshot: state.takeSnapshot,
});

// Selector for copy store state needed by the hook
const copySelector = (state: CopyState) => ({
  copyNodes: state.copyNodes,
  copyEdges: state.copyEdges,
  setCopyNodes: state.setCopyNodes,
  setCopyEdges: state.setCopyEdges,
});

export function useCopyPaste() {
  // Get state and setters from stores
  const { getNodes, getEdges, setNodes, setEdges, takeSnapshot } = useFlowStore(useShallow(flowSelector));
  const { copyNodes, copyEdges, setCopyNodes, setCopyEdges } = useCopyStore(useShallow(copySelector));
  const { screenToFlowPosition } = useReactFlow<Node, Edge>();
  // 鼠标位置引用
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // 获取 DOM 节点（假设为 React Flow 的画布）
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

  // 监听鼠标移动和剪贴板事件
  useEffect(() => {
    const wrapper = reactFlowWrapper.current;
    if (!wrapper) return;

    const preventDefault = (event: Event) => event.preventDefault();
    const updateMousePosition = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    // 阻止默认剪贴板行为
    ['cut', 'copy', 'paste'].forEach((event) => wrapper.addEventListener(event, preventDefault));
    wrapper.addEventListener('mousemove', updateMousePosition);

    // 清理事件监听
    return () => {
      ['cut', 'copy', 'paste'].forEach((event) => wrapper.removeEventListener(event, preventDefault));
      wrapper.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // 复制选中的节点和相关边
  const copy = useCallback(() => {
    const selectedNodes = getNodes().filter((node) => node.selected);
    const relatedEdges = filterRelatedEdges(selectedNodes, getEdges());

    if (selectedNodes.length === 0) return;
    setCopyNodes(selectedNodes);

    if (relatedEdges.length !== 0) {
      setCopyEdges(relatedEdges);
    }
  }, [getNodes, getEdges, setCopyNodes, setCopyEdges]);

  // 剪切选中的节点和相关边
  const cut = useCallback(() => {
    const selectedNodes = getNodes().filter((node) => node.selected);
    const relatedEdges = filterRelatedEdges(selectedNodes, getEdges());

    if (selectedNodes.length === 0) return;
    setCopyNodes(selectedNodes);

    if (relatedEdges.length !== 0) {
      setCopyEdges(relatedEdges);
    }

    takeSnapshot(); // 在剪切之前保存快照
    // 删除选中的节点和边
    setNodes((nodes) => nodes.filter((node) => !node.selected));

    if (relatedEdges.length !== 0) {
      setEdges((edges) => edges.filter((edge) => !relatedEdges.includes(edge)));
    }
  }, [getNodes, getEdges, setCopyNodes, setCopyEdges, takeSnapshot, setNodes, setEdges]);

  // 粘贴缓冲区中的节点和边
  const paste = useCallback(
    (position: { x: number; y: number } = screenToFlowPosition(mousePositionRef.current)) => {
      if (copyNodes.length === 0) return;

      // 计算新节点的位置，保持相对布局
      const minX = Math.min(...copyNodes.map((node) => node.position.x));
      const minY = Math.min(...copyNodes.map((node) => node.position.y));
      const timestamp = Date.now();

      // 生成新节点
      const newNodes = copyNodes.map((node) => {
        const newId = `${node.id}-${timestamp}`;
        const newX = position.x + (node.position.x - minX);
        const newY = position.y + (node.position.y - minY);
        return {
          ...node,
          id: newId,
          position: { x: newX, y: newY },
        };
      });

      // 生成新边
      const newEdges = copyEdges.map((edge) => {
        const newId = `${edge.id}-${timestamp}`;
        const newSource = `${edge.source}-${timestamp}`;
        const newTarget = `${edge.target}-${timestamp}`;
        return {
          ...edge,
          id: newId,
          source: newSource,
          target: newTarget,
        };
      });

      takeSnapshot(); // 在粘贴之前保存快照
      // 添加新节点和边，并取消所有选中状态
      setNodes((nodes) => [...nodes.map((node) => ({ ...node, selected: false })), ...newNodes]);
      if (newEdges.length !== 0) {
        setEdges((edges) => [...edges.map((edge) => ({ ...edge, selected: false })), ...newEdges]);
      }
    },
    [screenToFlowPosition, copyNodes, copyEdges, takeSnapshot, setNodes, setEdges],
  );

  // 绑定快捷键
  useHotkeys('meta+c, ctrl+c', copy, { preventDefault: true });
  useHotkeys('meta+x, ctrl+x', cut, { preventDefault: true });
  useHotkeys('meta+v, ctrl+v', () => paste(), { preventDefault: true });

  return {
    cut,
    copy,
    paste,
    copyNodes,
    setReactFlowWrapper: (wrapper: HTMLDivElement | null) => {
      reactFlowWrapper.current = wrapper;
    },
  };
}
