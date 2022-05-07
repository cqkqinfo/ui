import React, { useEffect, useState } from 'react';
import { SwiperProps, SwiperItemProps } from 'remax/wechat';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.less';
import 'swiper/modules/pagination/pagination.less';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import styles from './index.module.less';
import classNames from 'classnames';
import { Swiper as SwiperClass } from 'swiper/types';
import LineDots from './LineDots';
import { useControllableValue } from 'ahooks';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export interface Props extends Omit<SwiperProps, 'indicatorDots'> {
  items: (SwiperItemProps & { node: React.ReactNode })[];
  /**
   * 显示指示器，默认是点状，可以设置为线状
   */
  indicatorDots?: boolean | 'line';
  /**
   * 线状指示器类名
   */
  lineDotsCls?: string;
}

export default ({
  items,
  className,
  style,
  autoplay,
  interval = 3000,
  indicatorDots,
  onChange,
  displayMultipleItems = 1,
  current,
  lineDotsCls,
  circular,
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
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  useEffect(() => {
    if (!swiperRef || !myCurrent) return;
    swiperRef.slideTo(myCurrent?.detail?.current);
  }, [myCurrent, swiperRef]);
  return (
    <Swiper
      onSwiper={setSwiperRef}
      className={className}
      style={style}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onSlideChange={e => {
        myOnChange({ detail: { current: e.activeIndex } });
      }}
      // centeredSlides
      loop={circular}
      slidesPerView={displayMultipleItems}
      slideToClickedSlide
      resistanceRatio={0}
      pagination={
        indicatorDots === true
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
      {indicatorDots === 'line' && (
        <LineDots
          length={items.length}
          displayMultipleItems={displayMultipleItems}
          current={myCurrent?.detail?.current || 0}
          className={lineDotsCls}
        />
      )}
    </Swiper>
  );
};
