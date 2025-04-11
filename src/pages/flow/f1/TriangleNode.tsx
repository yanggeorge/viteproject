import React, { memo } from 'react';
import type { Node, NodeProps } from '@xyflow/react';
import { Handle, Position } from '@xyflow/react';

export type TriangleNodeData = {
  label: string;
};
export type TriangleNode = Node<TriangleNodeData>;
export type TriangleNodeProps = NodeProps<TriangleNode>;

export const TriangleNode = memo(({ data, isConnectable, selected }: TriangleNodeProps) => {
  // 设置三角形的尺寸
  const width = 150;
  const height = 130;

  // 计算三角形的顶点坐标，改变三角形的方向
  const points = `${width / 2},0 0,${height} ${width},${height}`;

  // 高亮边框的样式
  const highlightStyle = selected
    ? {
        stroke: '#FFD700', // 高亮的边框颜色
        strokeWidth: 1, // 边框宽度
        fill: 'none', // 仅显示边框，不填充
      }
    : {};

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
      }}
    >
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* 三角形 */}
        <polygon
          points={points}
          fill="#FF6347" // 三角形的填充颜色
          stroke="#555"
          strokeWidth="1"
        />

        {/* 高亮边框 (仅在选中时显示) */}
        {selected && <polygon points={points} {...highlightStyle} />}
      </svg>

      {/* 标签文本 */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {data.label}
      </div>

      {/* 左侧斜边中点handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          left: width / 4 - 8,
          top: height / 2,
          background: '#555',
          transform: 'none', // 清除默认的transform
          position: 'absolute', // 确保绝对定位
        }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      {/* 右侧斜边中点handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{
          left: (width * 3) / 4,
          top: height / 2,
          background: '#555',
          transform: 'none', // 清除默认的transform
          position: 'absolute', // 确保绝对定位
        }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
