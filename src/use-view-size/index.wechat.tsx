import { useEffect, useRef, useState } from 'react';
import { createSelectorQuery } from 'remax/wechat';

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
