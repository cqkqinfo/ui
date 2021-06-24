import { ScrollViewProps } from 'remax/wechat';
import React, { PropsWithChildren, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.less';

export default forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  ({ scrollIntoView, onTap, children, className, scrollY, ...props }, ref) => {
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
      />
    );
  },
);
