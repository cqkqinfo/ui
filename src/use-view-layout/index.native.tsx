import { useCallback, useState } from 'react';

// export const getWH = (id: string) =>
//   new Promise<{ width: number; height: number }>(resolve => {
//     const { offsetWidth, offsetHeight } = document.getElementById(id) || {};
//     resolve({
//       width: offsetWidth || 0,
//       height: offsetHeight || 0,
//     });
//   });

export default ({ run = true }: { run?: boolean } = {}) => {
  const [wh, setWh] = useState({});
  return {
    ...wh,
    /**
     * 暂不支持根据run自动获取
     */
    onLayout: useCallback(e => setWh(e.nativeEvent.layout), []),
  };
};
