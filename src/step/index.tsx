import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import Icon from '../icon';
import classNames from 'classnames';
import { useConfig } from '../config-provider';

export interface Props {
  /**
   * 当前的index
   */
  current: number;
  className?: string;

  /**
   * 预置的样式
   */
  type?: 'dashed' | 'normal';
  /**
   * 子项类名
   */
  itemCls?: string;
  /**
   * 圆点类名
   */
  dotCls?: string;
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
   * 横线类名
   */
  lineCls?: string;
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
  /**
   * 进度条选择事件，保持跟current一致从1开始
   */
  onChoose?: (i: number) => void;
}

export default ({
  current,
  className,
  onChoose,
  items,
  style,
  type = 'normal',
  activeLineCls,
  activeItemCls,
  itemCls,
  activeColor = '#FCFFC7',
  defaultColor,
  dotCls,
  lineCls,
}: Props) => {
  const { brandPrimary } = useConfig();
  if (type === 'dashed') {
    return (
      <View
        className={classNames(styles.step, styles.dashed, className)}
        style={style}
      >
        {items.map((item: any, i) => {
          const active = i === current - 1;
          const { text } = typeof item === 'function' ? item(active) : item;
          const width = `${100 / (items.length || 1)}%`;
          const color = active ? activeColor : defaultColor;
          return (
            <View
              key={i}
              onTap={() => {
                onChoose?.(i + 1);
              }}
              className={classNames(
                itemCls,
                styles.dashedItem,
                active && activeItemCls,
              )}
              style={{ width }}
            >
              <View className={classNames(styles.circleWrap)}>
                <View
                  className={classNames(
                    styles.circle,
                    dotCls,
                    active && styles.activeCircle,
                  )}
                  style={{
                    backgroundColor: color,
                  }}
                >
                  {active && (
                    <View className={styles.iconWrap}>
                      <Icon name="kq-yes" size={22} color={brandPrimary} />
                    </View>
                  )}
                </View>
              </View>
              <View className={classNames(active && styles.activeText)}>
                {text || item}
              </View>
              {i < items.length - 1 && (
                <View
                  className={classNames(
                    styles.dashedLine,
                    lineCls,
                    active && activeLineCls,
                    active && styles.activeLine,
                  )}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  }
  return (
    <View className={classNames(styles.step, className)} style={style}>
      {items.map((item: any, i) => {
        const active = i <= current - 1;
        const { icon, text } = typeof item === 'function' ? item(active) : item;
        const color = active ? activeColor : defaultColor;
        return (
          <View
            key={i}
            onTap={() => {
              onChoose?.(i + 1);
            }}
            className={classNames(
              styles.item,
              itemCls,
              active && activeItemCls,
            )}
          >
            <View className={styles.numberWrap}>
              <View
                className={classNames(
                  styles.line,
                  lineCls,
                  active && activeLineCls,
                )}
                style={{
                  left: i === 0 ? '50%' : i === items.length - 1 ? '-50%' : 0,
                  background: current - 1 ? color : defaultColor,
                }}
              />
              <View style={{ position: 'relative', zIndex: 1 }}>
                {icon || (
                  <View
                    className={classNames(styles.number, dotCls)}
                    style={{
                      backgroundColor: color,
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
                color,
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
