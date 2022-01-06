import React from 'react';

export interface Props<T> {
  /**
   * 标签项
   */
  tabs: { content: React.ReactNode; index: T }[];
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 子项类名
   */
  itemCls?: string;
  /**
   * 外部容器类名
   */
  containerCls?: string;
  /**
   * 当前子项类名
   */
  activeItemCls?: string;
  /**
   * 当前tab的索引
   */
  current?: T;
  /**
   * current改变的事件回调
   */
  onChange?: (current: T) => void;
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
