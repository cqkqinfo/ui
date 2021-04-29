import React, { useRef, useState } from 'react';
import { View, ViewProps } from 'remax/one';
import useViewSize from '../use-view-size';

export interface Props extends React.PropsWithChildren<ViewProps> {
  /**
   * 是否折叠
   * @default false
   */
  folded?: boolean;
}

let count = 0;

export default ({
  folded,
  style,
  id = useRef(`fold${count++}`).current,
  ...props
}: Props) => {
  const [height, setHeight] = useState<number>();
  useViewSize(id, ({ height }) => {
    if (height !== 0) {
      setHeight(height);
    }
  });
  return (
    <View
      id={id}
      style={{
        transition: 'all .3s',
        overflow: 'hidden',
        ...(folded ? { maxHeight: 0 } : { maxHeight: height }),
        ...style,
      }}
      {...props}
    />
  );
};
