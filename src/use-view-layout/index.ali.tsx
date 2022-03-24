import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/ali';
import { useId } from 'parsec-hooks';

export const getLayout = (id: string) =>
  new Promise(resolve => {
    const query = createSelectorQuery();
    query
      .select(`#${id}`)
      .boundingClientRect()
      .exec(({ left: x, top: y, ...ret }: any) => {
        return { x, y, ...ret };
      });
  });

export default ({ run = true }: { run?: boolean } = {}) => {
  const [wh, setWH] = useState<{
    width?: number;
    height?: number;
    x?: number;
    y?: number;
  }>({});
  const countRef = useRef(0);
  const id = useId();
  useEffect(() => {
    if (run) {
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
    }
  });
  return { ...wh, id };
};
