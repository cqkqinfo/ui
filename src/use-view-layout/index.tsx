import { useForceUpdate } from 'parsec-hooks';
import { useEffect, useRef } from 'react';

export const getLayout = (id: string) =>
  new Promise<{ width?: number; height?: number; x?: number; y?: number }>(
    resolve => {
      const { width, height, x, y } =
        document.getElementById(id)?.getBoundingClientRect() || {};
      resolve({
        width,
        height,
        x,
        y,
      });
    },
  );

export default ({ run = true }: { run?: boolean } = {}) => {
  const { forceUpdate } = useForceUpdate();
  const ref = useRef<HTMLElement>(null);
  const { y, width, x, height } = ref.current?.getBoundingClientRect() || {};
  useEffect(() => {
    if (height === undefined && run) {
      forceUpdate();
    }
  }, [width, height, forceUpdate, run]);
  return { width, height, ref, y, x };
};
