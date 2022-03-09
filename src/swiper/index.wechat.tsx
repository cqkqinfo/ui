import React from 'react';
import { Swiper, SwiperItem, View } from 'remax/wechat';
import { useConfig } from '../config-provider';
import LineDots from './LineDots';
import { useControllableValue } from 'ahooks';
import { Props } from './index';

export default ({
  items,
  className,
  style,
  autoplay,
  interval = 3000,
  indicatorDots,
  indicatorColor = useConfig().brandPrimary,
  current,
  onChange,
  lineDotsCls,
  ...props
}: Props) => {
  const [myCurrent, myOnChange] = useControllableValue(
    current === undefined
      ? {
          onChange,
        }
      : {
          onChange,
          value: { detail: { current } },
        },
  );
  const currentNum = myCurrent?.detail?.current;
  return (
    <View style={{ position: 'relative' }}>
      <Swiper
        className={className}
        style={style}
        autoplay={autoplay}
        interval={interval}
        current={currentNum}
        indicatorColor={'rgba(0,0,0,0.2)'}
        onAnimationFinish={myOnChange}
        indicatorDots={indicatorDots === true}
        indicatorActiveColor={indicatorColor}
        {...props}
      >
        {items.map(({ node, className, style, ...prpos }, index) => (
          <SwiperItem
            key={index}
            className={className}
            style={style}
            {...prpos}
          >
            {node}
          </SwiperItem>
        ))}
      </Swiper>
      {indicatorDots === 'line' && (
        <LineDots
          current={currentNum}
          length={items.length}
          className={lineDotsCls}
        />
      )}
    </View>
  );
};
