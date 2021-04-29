import { useEffect } from 'react';
import { useForceUpdate } from 'parsec-hooks';

export default (
  id: string,
  effect: (data: { width?: number; height?: number }) => void,
  deps: any[] = [],
) => {
  const { offsetWidth: width, offsetHeight: height } =
    document.getElementById(id) || {};
  const { forceUpdate } = useForceUpdate();
  useEffect(() => {
    if (height === undefined) {
      forceUpdate();
    } else {
      effect({ width, height });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, ...deps]);
};
