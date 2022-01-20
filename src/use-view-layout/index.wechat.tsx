import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/wechat';
import { useId } from 'parsec-hooks';

export const getLayout = (id: string) =>
  new Promise(resolve => {
    const query = createSelectorQuery();
    query
      .select(`#${id}`)
      .boundingClientRect(({ left: x, top: y, ...data }) => {
        resolve({ ...data, x, y });
      });
    query.exec();
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
      query.select(`#${id}`).boundingClientRect(data => {
        if (data && (data.width !== wh.width || data.height !== wh.height)) {
          if (count === countRef.current) {
            const { width, height, left, top } = data;
            setWH({ width, height, x: left, y: top });
          }
        }
      });
      query.exec();
    }
  });
  return { ...wh, id };
};
