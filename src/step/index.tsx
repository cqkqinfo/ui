import React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import classNames from 'classnames';

export interface Props {
  /**
   * 当前的index
   */
  current: number;
  className?: string;
  /**
   * 子项节点
   */
  items: React.ReactNode[];
  style?: React.CSSProperties;
}

export default ({ current, className, items, style }: Props) => {
  return (
    <View className={classNames(styles.step, className)} style={style}>
      {items.map((item, i) => (
        <View key={i} className={styles.item}>
          <View
            className={styles.line}
            style={{
              left: i === 0 ? '50%' : i === items.length - 1 ? '-50%' : 0,
            }}
          />
          <View
            className={styles.number}
            style={{
              backgroundColor: i === current - 1 ? '#FCFFC7' : undefined,
            }}
          >
            {i + 1}
          </View>
          <View
            className={styles.text}
            style={{
              color: i === current - 1 ? '#FCFFC7' : undefined,
            }}
          >
            {item}
          </View>
        </View>
      ))}
    </View>
  );
};
