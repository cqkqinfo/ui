import React from 'react';

export interface Props {
  /**
   * 标签项
   */
  tabs: { content: React.ReactNode; index: number }[];
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 子项类名
   */
  itemCls?: string;
  /**
   * 当前tab的索引
   */
  current?: number | string;
  /**
   * current改变的事件回调
   */
  onChange?: (current: number | string) => void;
  style?: React.CSSProperties;
  /**
   * 是否是受控模式
   */
  control?: boolean;
  /**
   * 类型
   */
  type?: 'card';
}
