import type { HistoryConfig } from './types';

export const SNAP_THRESHOLD = 5;
export const FLOW_CONTAINER_STYLE = { width: '800px', height: '600px' };

// 默认配置
export const defaultConfig: HistoryConfig = {
  maxHistorySize: 50,
  enableShortcuts: true,
};
