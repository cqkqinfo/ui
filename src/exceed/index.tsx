import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';

interface Props extends PropsWithChildren<ViewProps> {
  children: React.ReactNode;
  /**
   * 超过多少行显示省略号
   * @default 2
   */
  clamp: number;
}

export default ({ clamp = 2, className, style, ...props }: Props) => (
  <View
    className={classNames(styles.exceed, className)}
    style={{ ['-webkit-line-clamp' as any]: `calc(${clamp})`, ...style }}
    {...props}
  />
);
