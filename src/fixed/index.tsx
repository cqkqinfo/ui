import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';

interface Props extends PropsWithChildren<ViewProps> {
  placeholder?: boolean;
}

export default ({
  children,
  placeholder = true,
  className,
  ...props
}: Props) => {
  return (
    <>
      {placeholder && <View className={styles.index}>{children}</View>}
      <View className={classNames(styles.fixed, className)} {...props}>
        <View className={styles.index}>{children}</View>
      </View>
    </>
  );
};
