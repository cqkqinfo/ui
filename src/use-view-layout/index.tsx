import { useSize } from 'ahooks';
import { useForceUpdate } from 'parsec-hooks';
import { useEffect, useRef } from 'react';

export const getWH = (id: string) =>
  new Promise<{ width: number; height: number }>(resolve => {
    const { offsetWidth, offsetHeight } = document.getElementById(id) || {};
    resolve({
      width: offsetWidth || 0,
      height: offsetHeight || 0,
    });
  });

export default () => {
  const { forceUpdate } = useForceUpdate();
  const ref = useRef<HTMLElement>(null);
  const { width, height } = useSize(ref.current);
  const { offsetTop: y, offsetLeft: x } = ref.current || {};
  useEffect(() => {
    if (height === undefined) {
      forceUpdate();
    }
  }, [width, height, forceUpdate]);
  return { width, height, ref, y, x };
};
