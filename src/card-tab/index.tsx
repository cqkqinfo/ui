import React, { useEffect, useRef, useState } from 'react';
import { Props } from '../tab/types';
import Space from '../space';
import styles from './index.module.less';
import classNames from 'classnames';
import ScrollView from '../scroll-view';
import { getLayout } from '../use-view-layout';
import { useViewLayout } from '@kqinfo/ui';

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
  const scrollYRef = useRef(0);
  const [{ width: aWidth = 0, x: aX = 0 }, setActiveLayout] = useState<{
    width?: number;
    x?: number;
  }>({ width: 0, x: 0 });
  const initRef = useRef(true);
  useEffect(() => {
    const active = tabs.find(({ index }) => index === current);
    const timer = setTimeout(
      () => {
        if (active) {
          getLayout(`tab${active.index}`).then(setActiveLayout);
          initRef.current = false;
        }
      },
      initRef.current ? 500 : 0,
    );
    return () => clearTimeout(timer);
  }, [current, tabs]);
  const { width: wrapWidth = 0, ...arg } = useViewLayout();
  const scrollLeft = scrollYRef.current + aX - wrapWidth / 2 + aWidth / 2;
  return (
    <ScrollView
      scrollX
      showScrollbar={false}
      scrollLeft={tabs.length ? scrollLeft : undefined}
      className={classNames(styles.tab, className)}
      style={style}
      onScroll={e => (scrollYRef.current = e.detail.scrollLeft)}
      scrollWithAnimation
      {...arg}
    >
      <Space
        flex={1}
        justify={'space-between'}
        style={{ width: wrapWidth || '100%' }}
        flexWrap={'nowrap'}
        className={containerCls}
      >
        {tabs.map(({ content, index }, i) => {
          const active = current === index;
          const id = `tab${index}`;
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
              id={id}
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
