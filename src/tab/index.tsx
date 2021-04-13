import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { View } from 'remax/one';
import { useEffectState } from 'parsec-hooks';
import provider from '@/config-provider';

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
  /**
   * 是否是受控模式
   */
  control?: boolean;
}

export default ({
  tabs,
  className,
  itemCls,
  current,
  onChange,
  control,
  style,
}: Props) => {
  const { brandPrimary } = provider.useContainer();
  const firstTabIndex = tabs?.[0].index;
  let [active, setActive] = useEffectState(
    current || firstTabIndex || undefined,
  );
  if (control) {
    active = current;
    setActive = onChange as any;
  }
  return (
    <View className={classNames(styles.tab, className)} style={style}>
      {tabs.map(({ content, index }, i) => (
        <React.Fragment key={index}>
          <View
            className={classNames(styles.item, itemCls, {
              [styles.active]: active === index,
            })}
            onTap={() => {
              setActive?.(index);
              onChange?.(index);
            }}
          >
            {content}
          </View>
          {i !== tabs.length - 1 && tabs.length === 2 && (
            <View
              className={styles.slice}
              style={{
                background: active
                  ? `linear-gradient(${
                      active === firstTabIndex ? 248 : -248
                    }deg, transparent 50%, ${brandPrimary} 50%)`
                  : 'transparent',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};
