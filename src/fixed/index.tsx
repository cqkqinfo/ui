import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import useViewLayout from '../use-view-layout';

interface Props extends PropsWithChildren<ViewProps> {
  placeholder?: boolean;
}

export default ({
  children,
  placeholder = true,
  className,
  ...props
}: Props) => {
  const { width, ...arg } = useViewLayout();
  return (
    <>
      {placeholder && (
        <View className={styles.index} {...arg}>
          {children}
        </View>
      )}
      {width && (
        <View
          className={classNames(styles.fixed, className)}
          {...props}
          style={{ width, ...props.style }}
        >
          <View className={styles.index}>{children}</View>
        </View>
      )}
    </>
  );
};
