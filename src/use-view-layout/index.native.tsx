import { useCallback, useState } from 'react';

// export const getWH = (id: string) =>
//   new Promise<{ width: number; height: number }>(resolve => {
//     const { offsetWidth, offsetHeight } = document.getElementById(id) || {};
//     resolve({
//       width: offsetWidth || 0,
//       height: offsetHeight || 0,
//     });
//   });

export default () => {
  const [wh, setWh] = useState({});
  return {
    ...wh,
    onLayout: useCallback(e => setWh(e.nativeEvent.layout), []),
  };
};
