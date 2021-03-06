import classnames from 'classnames';
import React from 'react';
import { useConfig } from '../config-provider';
import rpxToPx from '../rpx-to-px';
import color from 'color';

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
   * 阴影半径
   * @default 20
   */
  shadowRadius?: number;
  /**
   * 是否选中
   */
  active?: boolean;
  /**
   * 类名
   */
  className?: string;
}

export default ({
  children,
  card,
  shadowColor: outShadowColor,
  active,
  shadowRadius: outShadowRadius,
  className,
  ...props
}: Props) => {
  const {
    brandPrimary,
    shadowColor = brandPrimary,
    shadowRadius = (outShadowRadius = 20),
  } = useConfig();
  const rpx20 = rpxToPx(20) + 'px';
  return children
    ? React.cloneElement(children, {
        ...children.props,
        ...props,
        className: classnames(children.props.className, className),
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
            `0 0 ${rpxToPx(shadowRadius)}px rgba(${color(
              outShadowColor || shadowColor,
            )
              .array()
              .join(',')}, 0.15)`,
          border: active
            ? `1px solid ${outShadowColor || shadowColor}`
            : undefined,
        },
      })
    : null;
};
