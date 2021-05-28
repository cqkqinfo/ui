import { ScrollViewProps } from 'remax/wechat';
import React, { PropsWithChildren, useEffect } from 'react';

export default ({
  scrollIntoView,
  children,
  className,
  ...props
}: PropsWithChildren<ScrollViewProps>) => {
  useEffect(() => {
    const target = scrollIntoView && document.querySelector(scrollIntoView);
    if (target) {
      target.scrollIntoView();
    }
  }, [scrollIntoView]);
  return <div className={className} children={children} />;
};
