import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import useViewSize from '../use-view-size';
import { useId } from 'parsec-hooks';

interface Props extends PropsWithChildren<ViewProps> {
  placeholder?: boolean;
}

export default ({
  children,
  placeholder = true,
  className,
  ...props
}: Props) => {
  const id = useId();
  const { width } = useViewSize(id);
  return (
    <>
      {placeholder && (
        <View className={styles.index} id={id}>
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
