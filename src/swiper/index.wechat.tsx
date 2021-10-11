import React from 'react';
import { Swiper, SwiperItem, SwiperProps, SwiperItemProps } from 'remax/wechat';
import { useConfig } from '../config-provider';

export interface Props extends SwiperProps {
  items: (SwiperItemProps & { node: React.ReactNode })[];
}

export default ({
  items,
  className,
  style,
  autoplay,
  interval = 3000,
  indicatorDots,
  indicatorColor = useConfig().brandPrimary,
  ...props
}: Props) => {
  return (
    <Swiper
      className={className}
      style={style}
      autoplay={autoplay}
      interval={interval}
      indicatorColor={indicatorColor}
      indicatorDots={indicatorDots}
      indicatorActiveColor={'rgba(0,0,0,0.2)'}
      {...props}
    >
      {items.map(({ node, className, style, ...prpos }, index) => (
        <SwiperItem key={index} className={className} style={style} {...prpos}>
          {node}
        </SwiperItem>
      ))}
    </Swiper>
  );
};
