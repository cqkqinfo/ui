import React from 'react';
import Space, { Props as SpaceProps } from '../space';
import rpxToPx from '../rpx-to-px';
import { useConfig } from '../config-provider';
import styles from './index.module.less';
import classnames from 'classnames';

export default ({
  children,
  color,
  style,
  lineCls,
  hideLine,
  ...props
}: SpaceProps & {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 分割线类名
   */
  lineCls?: string;
  /**
   * 隐藏线
   */
  hideLine?: boolean;
}) => {
  const { brandPrimary } = useConfig();
  const showColor = color || brandPrimary;
  const line = (
    <Space
      style={{ height: 1, backgroundColor: showColor }}
      className={classnames(styles.line, lineCls)}
    />
  );
  return (
    <Space
      size={11}
      justify={'center'}
      alignItems={'center'}
      {...props}
      style={{
        color: showColor,
        fontSize: rpxToPx(30),
        fontWeight: 'bold',
        ...style,
      }}
    >
      {!hideLine && line}
      {children}
      {!hideLine && line}
    </Space>
  );
};
