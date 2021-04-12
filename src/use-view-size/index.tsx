import { useSize } from 'ahooks';
import { useEffect } from 'react';

export default (
  id: string,
  effect: (data: { width?: number; height?: number }) => void,
  deps: any[] = [],
) => {
  const { width, height } = useSize(() => document.getElementById(id));
  useEffect(() => {
    effect({ width, height });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, ...deps]);
};
