import { useEffect, useState } from 'react';
import { useForceUpdate } from 'parsec-hooks';

export default (id: string) => {
  const [wh, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  const { offsetWidth: width, offsetHeight: height } =
    document.getElementById(id) || {};
  const { forceUpdate } = useForceUpdate();
  useEffect(() => {
    if (height === undefined) {
      forceUpdate();
    } else {
      setWH({ width, height });
    }
  }, [width, height, forceUpdate]);
  return wh;
};
