import React from 'react';
import provider from '../config-provider';
import rpxToPx from '../rpx-to-px';

const ColorRNA = require('color-rna').default;

export interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
  /**
   * 盒子模式，会带有圆角和背景样式
   */
  box?: boolean;
  /**
   * 阴影颜色
   */
  shadowColor?: string;
}

export default ({
  children,
  box,
  shadowColor: outShadowColor,
  ...props
}: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = provider.useContainer();
  const rpx20 = rpxToPx(20) + 'px';
  return React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      ...(box
        ? {
            width: rpxToPx(710),
            backgroundColor: '#fff',
            borderRadius: rpx20,
            padding: `0 ${rpx20}`,
          }
        : {}),
      ...children.props.style,
      ...props.style,
      boxShadow: `0 0 ${rpx20} rgba(${new ColorRNA(
        outShadowColor || shadowColor,
      )
        .rgb()
        .join(',')}, 0.15)`,
    },
  });
};
