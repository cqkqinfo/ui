import { useCallback, useState } from 'react';

export const getLayout = (id: string) =>
  new Promise<{ width?: number; height?: number; x?: number; y?: number }>(
    resolve => {
      // const { width, height, x, y } =
      //   document.getElementById(id)?.getBoundingClientRect() || {};
      // resolve({
      //   width,
      //   height,
      //   x,
      //   y,
      // });
    },
  );

export default ({ run = true }: { run?: boolean } = {}) => {
  const [wh, setWh] = useState({});
  return {
    ...wh,
    /**
     * 暂不支持根据run自动获取
     */
    onLayout: useCallback(
      e => {
        if (run) {
          setWh(e.nativeEvent.layout);
        }
      },
      [run],
    ),
  };
};
