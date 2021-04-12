import { useEffect } from 'react';
import { createSelectorQuery } from 'remax/wechat';

export default (
  id: string,
  effect: (data: { width?: number; height?: number }) => void,
  deps: any[] = [],
) => {
  useEffect(() => {
    const query = createSelectorQuery();
    query.select(`#${id}`).boundingClientRect(data => {
      if (data) {
        effect(data);
      }
    });
    query.exec();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ...deps]);
};
