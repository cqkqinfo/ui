import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { View } from 'remax/one';
import { useEffectState } from 'parsec-hooks';

export interface Props {
  /**
   * 标签项
   */
  tabs: { content: React.ReactNode; index: number }[];
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 子项类名
   */
  itemCls?: string;
  /**
   * 当前tab的索引
   */
  current?: number | string;
  /**
   * current改变的事件回调
   */
  onChange?: (current: number | string) => void;
  style?: React.CSSProperties;
}

export default ({
  tabs,
  className,
  itemCls,
  current,
  onChange,
  style,
}: Props) => {
  const firstTabIndex = tabs?.[0].index;
  const [active, setActive] = useEffectState(current || firstTabIndex);
  return (
    <View className={classNames(className, styles.tab)} style={style}>
      {tabs.map(({ content, index }, i) => (
        <>
          <View
            key={index}
            className={classNames(itemCls, styles.item, {
              [styles.active]: active === index,
            })}
            onTap={() => {
              setActive(index);
              onChange?.(index);
            }}
          >
            {content}
          </View>
          {i !== tabs.length - 1 && tabs.length === 2 && (
            <View
              className={styles.slice}
              style={{
                background: `linear-gradient(${
                  active === firstTabIndex ? 248 : -248
                }deg, #fff 50%, #2780D9 50%)`,
              }}
            />
          )}
        </>
      ))}
    </View>
  );
};
