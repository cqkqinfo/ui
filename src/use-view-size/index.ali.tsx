import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/ali';

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

export default (id: string) => {
  const [wh, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  const countRef = useRef(0);
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
            setWH(ret);
          }
        }
      });
  });
  return wh;
};
