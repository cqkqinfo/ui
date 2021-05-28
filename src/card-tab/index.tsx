import React from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import provider from '../config-provider';
import classNames from 'classnames';

export default ({ tabs, current, className, itemCls, onChange }: Props) => {
  const { brandPrimary } = provider.useContainer();
  return (
    <Space className={classNames(styles.tab, className)}>
      {tabs.map(({ content, index }) => (
        <Space
          flex={1}
          key={index}
          className={classNames(styles.item, itemCls)}
          alignItems={'center'}
          justify={'center'}
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
  );
};
