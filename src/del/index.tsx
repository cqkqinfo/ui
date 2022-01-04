import React from 'react';
import { Space } from '@kqinfo/ui';
import styles from './index.module.less';
import classnames from 'classnames';

export interface Props {
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 删除内容
   */
  children: React.ReactNode;
  /**
   * 删除线类名
   */
  lineCls?: string;
  /**
   * 颜色
   * @default #999999
   */
  color?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export default ({
  className,
  lineCls,
  children,
  color = '#999999',
  style,
}: Props) => {
  return (
    <Space
      className={classnames(styles.del, className)}
      style={{ ...style, color }}
    >
      {children}
      <Space
        className={classnames(styles.line, lineCls)}
        style={{ background: color }}
      />
    </Space>
  );
};
