import React from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import provider from '../config-provider';
import classNames from 'classnames';
import ScrollView from '../scroll-view';

export default <T extends unknown>({
  tabs,
  current,
  className,
  itemCls,
  onChange,
  style,
}: Props<T>) => {
  const { brandPrimary } = provider.useContainer();
  return (
    <ScrollView
      scrollX
      className={classNames(styles.tab, className)}
      style={style}
      scrollIntoView={`tab${current}`}
      scrollWithAnimation
    >
      <Space flex={1} justify={'space-between'}>
        {tabs.map(({ content, index }, i) => (
          <Space
            flex={1}
            key={i}
            className={classNames(styles.item, itemCls)}
            alignItems={'center'}
            justify={'center'}
            id={`tab${index}`}
            onTap={() => {
              onChange?.(index);
            }}
            style={
              current === index
                ? {
                    color: brandPrimary,
                    borderColor: brandPrimary,
                  }
                : {}
            }
          >
            {content}
          </Space>
        ))}
      </Space>
    </ScrollView>
  );
};
