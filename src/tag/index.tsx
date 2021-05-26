import React from 'react';
import { View, ViewProps } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import provider from '../config-provider';
const convert = require('color-convert');

export interface Props extends ViewProps {
  /**
   * 状态颜色
   * @default brand-primary
   */
  color?: string;
  /**
   * 透明底色
   * @default false
   */
  ghost?: boolean;
  /**
   * 非半圆角
   * @default false
   */
  block?: boolean;
}

export default ({ className, color, ghost, block, ...props }: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = provider.useContainer();
  const showColor = color || shadowColor;
  return (
    <View
      className={classNames(className, styles.tag)}
      {...props}
      style={{
        backgroundColor: ghost
          ? undefined
          : `rgba(${convert.hex.rgb(showColor).join(',')}, 0.2)`,
        color: showColor,
        border: ghost ? `1px solid ${showColor}` : undefined,
        borderRadius: `${1.15 * (block ? 0.5 : 1)}em`,
        ...props.style,
      }}
    />
  );
};
