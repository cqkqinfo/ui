import React, { useEffect, useRef, useState } from 'react';
import { View, ViewProps } from 'remax/one';
import useViewSize from '../use-view-size';
import { useForceUpdate, usePrevious, useRefState } from 'parsec-hooks';

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
  const [maxHeight, setMaxHeight, maxHeightRef] = useRefState<
    number | undefined
  >(undefined);
  useEffect(() => {
    setMaxHeight(undefined);
  }, [props.children, setMaxHeight]);
  useEffect(() => {
    if (maxHeightRef.current === undefined) {
      setMaxHeight(height);
    }
  }, [height, maxHeightRef, setMaxHeight]);
  return (
    <View
      id={id}
      style={{
        transition: 'all .3s',
        overflow: 'hidden',
        ...(folded ? { maxHeight: 0 } : { maxHeight: maxHeight }),
        ...style,
      }}
      {...props}
    />
  );
};
