import React, { useRef } from 'react';
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
  const { height } = useViewSize(id);
  const heightRef = useRef(height);
  heightRef.current =
    !heightRef.current && height !== 0 ? height : heightRef.current;
  return (
    <View
      id={id}
      style={{
        transition: 'all .3s',
        overflow: 'hidden',
        ...(folded ? { maxHeight: 0 } : { maxHeight: heightRef.current }),
        ...style,
      }}
      {...props}
    />
  );
};
