import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'remax/one';
import styles from './index.module.less';
import { Props } from './index';
import LineDots from './LineDots';
import { useConfig } from '../config-provider';
import { useEffectState } from 'parsec-hooks';

const Comp = ({
  items,
  className,
  current = 0,
  onChange,
  style,
  indicatorDots,
  displayMultipleItems,
  lineDotsCls,
  autoplay,
  interval = 3000,
  indicatorColor = useConfig().brandPrimary,
}: Props) => {
  const [myCurrent, setMyCurrent] = useEffectState(current);
  return (
    <View className={classNames(styles.swiper, className)} style={style}>
      {useMemo(
        () => (
          <Swiper
            showsPagination={indicatorDots === true}
            index={myCurrent}
            dotColor={indicatorColor}
            // style={{ width: '100%', height: '100%' }}
            onIndexChanged={i => {
              setMyCurrent(i);
              onChange?.({ detail: { current: i } } as any);
            }}
            autoplayTimeout={interval / 1000}
            autoplay={autoplay}
            removeClippedSubviews={false}
            loop={true}
          >
            {items.map(({ node, ...item }, index) => (
              <View key={index} {...(item as any)}>
                {node}
              </View>
            ))}
          </Swiper>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          indicatorDots,
          interval,
          autoplay,
          indicatorColor,
          items.length,
          setMyCurrent,
        ],
      )}
      {indicatorDots === 'line' && (
        <LineDots
          current={myCurrent}
          length={items.length}
          displayMultipleItems={displayMultipleItems}
          className={lineDotsCls}
        />
      )}
    </View>
  );
};
export default Comp;
