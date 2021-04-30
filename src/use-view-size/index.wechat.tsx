import { useEffect, useState } from 'react';
import { createSelectorQuery } from 'remax/wechat';

export default (id: string) => {
  const [wh, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  useEffect(() => {
    const query = createSelectorQuery();
    query.select(`#${id}`).boundingClientRect(data => {
      if (data) {
        setWH(data);
      }
    });
    query.exec();
  }, [id]);
  return wh;
};
