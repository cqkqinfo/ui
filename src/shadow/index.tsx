import React from 'react';
import { useConfig } from '../config-provider';
import rpxToPx from '../rpx-to-px';
const convert = require('color-convert');

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
  shadowColor?: string | false;
  /**
   * 是否选中
   */
  active?: boolean;
}

export default ({
  children,
  card,
  shadowColor: outShadowColor,
  active,
  ...props
}: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = useConfig();
  const rpx20 = rpxToPx(20) + 'px';
  return React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      cursor: active !== undefined ? 'pointer' : undefined,
      ...(card
        ? {
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: rpx20,
            paddingLeft: rpx20,
            paddingRight: rpx20,
          }
        : {}),
      ...children.props.style,
      ...props.style,
      boxShadow:
        outShadowColor !== false &&
        `0 0 ${rpx20} rgba(${convert.hex
          .rgb(outShadowColor || shadowColor)
          .join(',')}, 0.15)`,
      border: active ? `1px solid ${outShadowColor || shadowColor}` : undefined,
    },
  });
};
