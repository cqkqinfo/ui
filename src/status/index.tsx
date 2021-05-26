import React from 'react';
import { View, ViewProps } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import provider from '@/config-provider';
const convert = require('color-convert');

export interface Props extends ViewProps {
  /**
   * 状态颜色
   * @default @brand-primary
   */
  color?: string;
}

export default ({ className, color, ...props }: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = provider.useContainer();
  const showColor = color || shadowColor;
  return (
    <View
      className={classNames(className, styles.status)}
      {...props}
      style={{
        backgroundColor: `rgba(${convert.hex.rgb(showColor).join(',')}, 0.2)`,
        color: showColor,
        ...props.style,
      }}
    />
  );
};
