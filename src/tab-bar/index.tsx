import React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import { useEffectState } from 'parsec-hooks';
import provider from '@/config-provider';

export interface TabBarItemProps {
  /**
   * tab名称
   */
  title?: React.ReactNode;
  /**
   * 设置图标,传null就是不显示
   */
  icon: React.ReactNode | ((active: boolean) => React.ReactNode);
  /**
   * 路由索引
   */
  index: number | string;
}

export interface TabBarProps {
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: React.CSSProperties;
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 选中后文字颜色
   */
  activeColor?: string;
  /**
   * 当前位置索引
   */
  current?: number | string;
  /**
   * tabBar数据
   */
  items: TabBarItemProps[];
  onChange?: (current: number | string) => void;
}

const TabBar = (props: TabBarProps) => {
  const { brandPrimary } = provider.useContainer();
  const {
    className,
    style,
    color = '#bebebe',
    activeColor = brandPrimary,
    current,
    items,
    onChange,
  } = props;
  const [index, setIndex] = useEffectState(current || items?.[0].index);
  return (
    <View
      className={classNames(styles.tabBarWrap, className)}
      style={{ color, ...style }}
    >
      {items.map(item => {
        const active = index === item.index;
        return (
          <View
            className={styles.tabBarItem}
            key={item.index}
            onTap={() => {
              setIndex?.(item.index);
              onChange?.(item.index);
            }}
          >
            <View className={styles.tabBarItem}>
              {typeof item.icon === 'function'
                ? item.icon(active)
                : React.isValidElement(item.icon) &&
                  React.cloneElement(item.icon, {
                    color: active ? activeColor : color,
                  })}
            </View>
            <Text
              style={{ color: index === item.index ? activeColor : color }}
              className={classNames(styles.tabBarText, {
                active: index === item.index,
              })}
            >
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
