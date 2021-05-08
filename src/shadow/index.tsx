import React from 'react';
import provider from '../config-provider';
import rpxToPx from '../rpx-to-px';
import hexRgb from 'hex-rgb';

export interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
  /**
   * 卡片模式，会带有圆角和背景样式
   */
  card?: boolean;
  /**
   * 阴影颜色
   */
  shadowColor?: string;
}

export default ({
  children,
  card,
  shadowColor: outShadowColor,
  ...props
}: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = provider.useContainer();
  const rpx20 = rpxToPx(20) + 'px';
  return React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      ...(card
        ? {
            boxSizing: 'border-box',
            width: rpxToPx(710),
            backgroundColor: '#fff',
            borderRadius: rpx20,
            padding: `0 ${rpx20}`,
          }
        : {}),
      ...children.props.style,
      ...props.style,
      boxShadow: `0 0 ${rpx20} rgba(${hexRgb(
        outShadowColor || (shadowColor as string),
        { format: 'array', alpha: 0.15 },
      ).join(',')})`,
    },
  });
};
