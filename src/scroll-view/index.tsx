import { ScrollViewProps } from 'remax/wechat';
import React, { PropsWithChildren, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.less';
import Visible from '../visible';
import Space from '../space';

export default forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  (
    {
      scrollIntoView,
      onTap,
      onScrollToLower,
      onScrollToUpper,
      children,
      className,
      scrollY,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      const target =
        scrollIntoView && document.querySelector(`#${scrollIntoView}`);
      if (target) {
        target.scrollIntoView(false);
      }
    }, [scrollIntoView]);
    return (
      <div
        className={classNames(className, styles.scroll)}
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
