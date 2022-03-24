import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import preventScroll from 'prevent-scroll';

export default ({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) => {
  useEffect(() => {
    if (visible) {
      preventScroll.on();
    } else {
      preventScroll.off();
    }
    return () => {
      preventScroll.off();
    };
  }, [visible]);
  return <div>{children}</div>;
};
