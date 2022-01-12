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

export default ({ run = true }: { run?: boolean } = {}) => {
  const { forceUpdate } = useForceUpdate();
  const ref = useRef<HTMLElement>(null);
  const { width, height } = useSize(run ? ref.current : null) || {};
  const { y, x } = ref.current?.getBoundingClientRect() || {};
  useEffect(() => {
    if (height === undefined && run) {
      forceUpdate();
    }
  }, [width, height, forceUpdate, run]);
  return { width, height, ref, y, x };
};
