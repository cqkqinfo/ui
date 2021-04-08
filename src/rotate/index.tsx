import classNames from 'classnames';
import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.less';

export default ({
  className,
  ...props
}: React.PropsWithChildren<ViewProps>) => {
  return <View className={classNames(styles.rotate, className)} {...props} />;
};
