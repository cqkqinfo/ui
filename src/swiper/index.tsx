import React from 'react';
import { SwiperProps, SwiperItemProps } from 'remax/wechat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import styles from './index.module.less';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

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
  ...props
}: Props) => {
  return (
    <Swiper
      className={className}
      style={style}
      pagination={
        indicatorDots
          ? {
              bulletActiveClass: styles.active,
            }
          : false
      }
      autoplay={autoplay ? { delay: interval } : undefined}
    >
      {items.map(({ node, className, style }, index) => (
        <SwiperSlide key={index} className={className} style={style}>
          {node}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
