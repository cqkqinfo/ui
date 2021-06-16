import React from 'react';
import { Text, TextProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';

export default ({
  underline,
  ...props
}: React.PropsWithChildren<
  TextProps & {
    /**
     * 显示下划线
     */
    underline?: boolean;
  }
>) => (
  <Text
    {...props}
    className={classNames(
      styles.text,
      props.className,
      underline && styles.underline,
    )}
  />
);
