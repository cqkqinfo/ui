import { useState } from 'react';

export const getLayout = (id: string) =>
  new Promise<{ width?: number; height?: number; x?: number; y?: number }>(
    resolve => {
      const { width, height, x, y } =
        document.getElementById(id)?.getBoundingClientRect() || {};
      resolve({
        width,
        height,
        x,
        y,
      });
    },
  );

export default ({ run = true }: { run?: boolean } = {}) => {
  const [layout, setLayout] = useState<{
    width?: number;
    height?: number;
    x?: number;
    y?: number;
  }>({});
  return {
    ...layout,
    ref: (ref: any) => {
      if (ref && run) {
        let newLayout = ref.getBoundingClientRect();
        newLayout = {
          width: newLayout.width,
          height: newLayout.height,
          x: newLayout.x,
          y: newLayout.y,
        };
        if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
          setLayout(newLayout);
        }
      }
    },
  };
};
