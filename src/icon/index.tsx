import { View, ViewProps } from 'remax/one';
import React from 'react';
import Icon from './one';
import { IconFontProps } from './wechat';
import styles from './index.less';
import classNames from 'classnames';

export interface Props
  extends ViewProps,
    Pick<IconFontProps, 'name' | 'color' | 'size'> {}

export default ({ name, color, size, className, ...props }: Props) => {
  return (
    <View className={classNames(styles.wrap, className)} {...props}>
      <Icon name={name} color={color} size={size} className={styles.icon} />
    </View>
  );
};
