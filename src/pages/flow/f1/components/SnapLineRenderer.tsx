import { useStore } from '@xyflow/react';
import { useEffect, useRef } from 'react';

/**
 * SnapLineRendererProps - 定义辅助线渲染器的属性
 * @property {number} [horizontal] - 水平辅助线位置
 * @property {number} [vertical] - 垂直辅助线位置
 */
export interface SnapLineRendererProps {
  horizontal?: number;
  vertical?: number;
}

/**
 * SnapLineRenderer 组件 - 使用 Canvas 绘制节点对齐辅助线
 */
export const SnapLineRenderer: React.FC<SnapLineRendererProps> = ({ horizontal, vertical }) => {
  // 从 React Flow store 获取视口尺寸和变换信息
  const { width, height, transform } = useStore((store) => ({
    width: store.width,
    height: store.height,
    transform: store.transform,
  }));
  // Canvas 引用
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 当辅助线位置、视口尺寸或变换变化时，重新绘制
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!ctx || !canvas) return;

    // 适配高分辨率屏幕
    const pixelRatio = window.devicePixelRatio;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    // 缩放 canvas 以适应设备像素比
    ctx.scale(pixelRatio, pixelRatio);

    // 清除之前的绘制内容
    ctx.clearRect(0, 0, width, height);

    // 设置辅助线样式
    ctx.strokeStyle = '#0041d0';

    // 绘制垂直辅助线 (如果存在)
    if (typeof vertical === 'number') {
      // 应用视口变换 [x, y, scale]
      const transformedX = vertical * transform[2] + transform[0];
      ctx.beginPath();
      ctx.moveTo(transformedX, 0);
      ctx.lineTo(transformedX, height);
      ctx.stroke();
    }

    // 绘制水平辅助线 (如果存在)
    if (typeof horizontal === 'number') {
      // 应用视口变换 [x, y, scale]
      const transformedY = horizontal * transform[2] + transform[1];
      ctx.beginPath();
      ctx.moveTo(0, transformedY);
      ctx.lineTo(width, transformedY);
      ctx.stroke();
    }
  }, [width, height, transform, horizontal, vertical]);

  return (
    <canvas
      ref={canvasRef}
      className="react-flow__snap-lines-canvas"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  );
};
