import { useForceUpdate } from 'parsec-hooks';
import { useEffect } from 'react';

// export const getWH = (id: string) =>
//   new Promise<{ width: number; height: number }>(resolve => {
//     const { offsetWidth, offsetHeight } = document.getElementById(id) || {};
//     resolve({
//       width: offsetWidth || 0,
//       height: offsetHeight || 0,
//     });
//   });

export default (id: string) => {
  const { forceUpdate } = useForceUpdate();
  const { width, height } = { width: 0, height: 0 };
  useEffect(() => {
    if (height === undefined) {
      forceUpdate();
    }
  }, [width, height, forceUpdate]);
  return { width, height };
};
