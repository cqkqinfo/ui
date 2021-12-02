import { ScrollViewProps } from 'remax/wechat';
import React, { PropsWithChildren, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.less';
import Visible from '../visible';
import Space from '../space';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  (
    {
      scrollIntoView,
      onTap,
      onScrollToLower,
      onScrollToUpper,
      children,
      className,
      scrollWithAnimation,
      showScrollbar = true,
      scrollY,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      const target =
        scrollIntoView && document.querySelector(`#${scrollIntoView}`);
      if (target) {
        target.scrollIntoView(
          scrollWithAnimation ? { behavior: 'smooth', block: 'center' } : false,
        );
      }
    }, [scrollIntoView, scrollWithAnimation]);
    return (
      <div
        className={classNames(
          className,
          styles.scroll,
          !showScrollbar && styles.hideBar,
        )}
        children={children}
        {...(props as any)}
        onClick={onTap}
        ref={ref}
      >
        <Space flex={1} justify={'space-between'} vertical={scrollY}>
          <Visible onVisible={() => onScrollToUpper?.({} as any)} />
          {children}
          <Visible onVisible={() => onScrollToLower?.({} as any)} />
        </Space>
      </div>
    );
  },
);
