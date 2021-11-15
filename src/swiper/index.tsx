import React from 'react';
import { SwiperProps, SwiperItemProps } from 'remax/wechat';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.less';
import 'swiper/modules/pagination/pagination.less';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import styles from './index.module.less';
import classNames from 'classnames';

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
  onChange,
  ...props
}: Props) => {
  return (
    <Swiper
      className={className}
      style={style}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onSlideChange={e => onChange?.({ detail: { current: e.activeIndex } })}
      pagination={
        indicatorDots
          ? {
              bulletActiveClass: classNames(
                'swiper-pagination-bullet-active',
                styles.active,
              ),
            }
          : false
      }
      autoplay={
        autoplay ? { delay: interval, disableOnInteraction: false } : undefined
      }
    >
      {items.map(({ node, className, style }, index) => (
        <SwiperSlide key={index} className={className} style={style}>
          {node}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
