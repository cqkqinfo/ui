import React from 'react';
import Space, { Props as SpaceProps } from '../space';
import rpxToPx from '../rpx-to-px';
import { useConfig } from '../config-provider';

export default ({
  children,
  color,
  style,
  ...props
}: SpaceProps & {
  /**
   * 颜色
   */
  color?: string;
}) => {
  const { brandPrimary } = useConfig();
  const showColor = color || brandPrimary;
  const line = (
    <Space
      style={{ height: 1, width: rpxToPx(58), backgroundColor: showColor }}
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
      {line}
      {children}
      {line}
    </Space>
  );
};
