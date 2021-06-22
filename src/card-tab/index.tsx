import React from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import provider from '../config-provider';
import classNames from 'classnames';
import ScrollView from '../scroll-view';

export default ({
  tabs,
  current,
  className,
  itemCls,
  onChange,
  style,
}: Props) => {
  const { brandPrimary } = provider.useContainer();
  return (
    <ScrollView
      scrollX
      className={classNames(styles.tab, className)}
      style={style}
      scrollIntoView={`tab${current}`}
      scrollWithAnimation
    >
      <Space flex={1} justify={'space-between'} style={{ height: '100%' }}>
        {tabs.map(({ content, index }) => (
          <Space
            flex={1}
            key={index}
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
