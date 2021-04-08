import { View, ViewProps } from 'remax/one';
import React from 'react';
import Icon from './one';
import { IconFontProps } from './wechat';
import styles from './index.less';
import classNames from 'classnames';

export interface Props
  extends ViewProps,
    Pick<IconFontProps, 'name' | 'color'> {
  /**
   * 图标大小，默认是fontSize的值
   */
  size?: number | string;
}

export default ({
  name,
  color,
  size = '1em',
  className,
  style,
  ...props
}: Props) => {
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      style={{ width: size, height: size, ...style }}
    >
      <Icon name={name} color={color} className={styles.icon} />
    </View>
  );
};
