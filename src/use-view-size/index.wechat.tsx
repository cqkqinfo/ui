import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/wechat';

export const getWH = (id: string) =>
  new Promise(resolve => {
    const query = createSelectorQuery();
    query.select(`#${id}`).boundingClientRect(data => {
      resolve(data);
    });
    query.exec();
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
    query.select(`#${id}`).boundingClientRect(data => {
      if (data && (data.width !== wh.width || data.height !== wh.height)) {
        if (count === countRef.current) {
          setWH(data);
        }
      }
    });
    query.exec();
  });
  return wh;
};
