import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';

export default ({
  current,
  length,
  className,
}: {
  length: number;
  current: number;
  className?: string;
}) => {
  return length - 1 ? (
    <View className={classNames(styles.lineWrap, className)}>
      <View
        className={styles.line}
        style={{ marginLeft: `${33 * (current / (length - 1))}%` }}
      />
    </View>
  ) : null;
};
