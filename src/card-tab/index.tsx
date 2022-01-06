import React from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import classNames from 'classnames';
import ScrollView from '../scroll-view';

export default <T extends unknown>({
  tabs,
  current,
  className,
  itemCls,
  onChange,
  style,
  containerCls,
  activeItemCls,
}: Props<T>) => {
  return (
    <ScrollView
      scrollX
      className={classNames(styles.tab, className)}
      style={style}
      scrollIntoView={`tab${current}`}
      scrollWithAnimation
    >
      <Space
        flex={1}
        justify={'space-between'}
        style={{ width: '100%' }}
        className={containerCls}
      >
        {tabs.map(({ content, index }, i) => {
          const active = current === index;
          return (
            <Space
              flex={1}
              key={i}
              className={classNames(
                styles.item,
                itemCls,
                active && classNames(activeItemCls, styles.active),
              )}
              alignItems={'center'}
              justify={'center'}
              id={`tab${index}`}
              onTap={() => {
                onChange?.(index);
              }}
            >
              {content}
            </Space>
          );
        })}
      </Space>
    </ScrollView>
  );
};
