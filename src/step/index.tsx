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
  items: (
    | React.ReactNode
    | {
        icon: (active: boolean) => React.ReactNode;
        text: (active: boolean) => React.ReactNode;
      }
  )[];
  /**
   * active状态下的横线类名
   */
  activeLineCls?: string;
  style?: React.CSSProperties;
}

export default ({ current, className, items, style, activeLineCls }: Props) => {
  return (
    <View className={classNames(styles.step, className)} style={style}>
      {items.map((item: any, i) => {
        const active = i <= current - 1;
        return (
          <View key={i} className={styles.item}>
            <View className={styles.numberWrap}>
              <View
                className={classNames(styles.line, active && activeLineCls)}
                style={{
                  left: i === 0 ? '50%' : i === items.length - 1 ? '-50%' : 0,
                }}
              />
              <View style={{ position: 'relative', zIndex: 1 }}>
                {item?.icon?.(active) || (
                  <View
                    className={styles.number}
                    style={{
                      backgroundColor: active ? '#FCFFC7' : undefined,
                    }}
                  >
                    {i + 1}
                  </View>
                )}
              </View>
            </View>
            <View
              className={styles.text}
              style={{
                color: active ? '#FCFFC7' : undefined,
              }}
            >
              {item?.text?.(active) || item}
            </View>
          </View>
        );
      })}
    </View>
  );
};
