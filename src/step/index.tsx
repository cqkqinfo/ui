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
    | ((
        active: boolean,
      ) => {
        icon: React.ReactNode;
        text: React.ReactNode;
      })
  )[];
  /**
   * active状态下的横线类名
   */
  activeLineCls?: string;
  /**
   * active状态下的item类名
   */
  activeItemCls?: string;
  /**
   * active颜色
   */
  activeColor?: string;
  /**
   * 默认文字或者icon的颜色
   */
  defaultColor?: string;
  style?: React.CSSProperties;
}

export default ({
  current,
  className,
  items,
  style,
  activeLineCls,
  activeItemCls,
  activeColor = '#FCFFC7',
  defaultColor,
}: Props) => {
  return (
    <View className={classNames(styles.step, className)} style={style}>
      {items.map((item: any, i) => {
        const active = i <= current - 1;
        const { icon, text } = typeof item === 'function' ? item(active) : item;
        return (
          <View
            key={i}
            className={classNames(styles.item, active && activeItemCls)}
          >
            <View className={styles.numberWrap}>
              <View
                className={classNames(styles.line, active && activeLineCls)}
                style={{
                  left: i === 0 ? '50%' : i === items.length - 1 ? '-50%' : 0,
                }}
              />
              <View style={{ position: 'relative', zIndex: 1 }}>
                {icon || (
                  <View
                    className={styles.number}
                    style={{
                      backgroundColor: active ? activeColor : defaultColor,
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
                color: active ? activeColor : defaultColor,
              }}
            >
              {text || item}
            </View>
          </View>
        );
      })}
    </View>
  );
};
