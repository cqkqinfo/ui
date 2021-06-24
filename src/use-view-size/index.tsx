import { useSize } from 'ahooks';
import { useForceUpdate } from 'parsec-hooks';
import { useEffect } from 'react';

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
