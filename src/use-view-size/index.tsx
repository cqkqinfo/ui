import { useSize } from 'ahooks';
import { useForceUpdate } from 'parsec-hooks';
import { useEffect } from 'react';

export const getWH = (id: string) =>
  new Promise<{ width: number; height: number }>(resolve => {
    const { offsetWidth, offsetHeight } = document.getElementById(id) || {};
    resolve({
      width: offsetWidth || 0,
      height: offsetHeight || 0,
    });
  });

export default (id: string) => {
  const { forceUpdate } = useForceUpdate();
  const { width, height } = useSize(document.getElementById(id));
  useEffect(() => {
    if (height === undefined) {
      forceUpdate();
    }
  }, [width, height, forceUpdate]);
  return { width, height };
};
