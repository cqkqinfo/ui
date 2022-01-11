import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/ali';
import { useId } from 'parsec-hooks';

export const getWH = (id: string) =>
  new Promise(resolve => {
    const query = createSelectorQuery();
    query
      .select(`#${id}`)
      .boundingClientRect()
      .exec(ret => {
        return ret;
      });
  });

export default () => {
  const [wh, setWH] = useState<{
    width?: number;
    height?: number;
    x?: number;
    y?: number;
  }>({});
  const countRef = useRef(0);
  const id = useId();
  useEffect(() => {
    const query = createSelectorQuery();
    const count = countRef.current + 1;
    countRef.current = count;
    query
      .select(`#${id}`)
      .boundingClientRect()
      .exec((data: any) => {
        const ret = data[0] || {};
        if (ret && (ret?.width !== wh.width || ret?.height !== wh.height)) {
          if (count === countRef.current) {
            const { width, height, left, top } = ret;
            setWH({ width, height, x: left, y: top });
          }
        }
      });
  }, [id, wh]);
  return { ...wh, id };
};
