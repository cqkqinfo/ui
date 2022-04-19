import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import { rpxToPx } from '@kqinfo/ui';

export default ({
  current,
  length,
  className,
  displayMultipleItems = 1,
}: {
  length: number;
  current: number;
  displayMultipleItems?: number;
  className?: string;
}) => {
  return length - 1 ? (
    <View className={classNames(styles.lineWrap, className)}>
      <View
        className={styles.line}
        style={{
          marginLeft:
            ((33 * (current / (length - 1 - (displayMultipleItems - 1)))) /
              100) *
            rpxToPx(75),
        }}
      />
    </View>
  ) : null;
};
