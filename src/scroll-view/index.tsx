import { ScrollViewProps } from 'remax/wechat';
import React, { PropsWithChildren, useEffect, forwardRef } from 'react';

export default forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  ({ scrollIntoView, onTap, children, className, scrollY, ...props }, ref) => {
    useEffect(() => {
      const target = scrollIntoView && document.querySelector(scrollIntoView);
      if (target) {
        target.scrollIntoView();
      }
    }, [scrollIntoView]);
    return (
      <div
        className={className}
        children={children}
        {...(props as any)}
        onClick={onTap}
        ref={ref}
      />
    );
  },
);
