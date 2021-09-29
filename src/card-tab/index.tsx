import React from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import { useConfig } from '../config-provider';
import classNames from 'classnames';
import ScrollView from '../scroll-view';

export default <T extends unknown>({
  tabs,
  current,
  className,
  itemCls,
  onChange,
  style,
  activeItemCls,
}: Props<T>) => {
  const { brandPrimary } = useConfig();
  return (
    <ScrollView
      scrollX
      className={classNames(styles.tab, className)}
      style={style}
      scrollIntoView={`tab${current}`}
      scrollWithAnimation
    >
      <Space flex={1} justify={'space-between'}>
        {tabs.map(({ content, index }, i) => {
          const active = current === index;
          return (
            <Space
              flex={1}
              key={i}
              className={classNames(
                styles.item,
                itemCls,
                active && activeItemCls,
              )}
              alignItems={'center'}
              justify={'center'}
              id={`tab${index}`}
              onTap={() => {
                onChange?.(index);
              }}
              style={
                active
                  ? {
                      color: brandPrimary,
                      borderColor: brandPrimary,
                    }
                  : {}
              }
            >
              {content}
            </Space>
          );
        })}
      </Space>
    </ScrollView>
  );
};
