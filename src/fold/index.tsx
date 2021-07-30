import React, { useEffect, useRef, useState } from 'react';
import { View, ViewProps } from 'remax/one';
import { getWH } from '../use-view-size';
import { useRerenderCallback } from 'parsec-hooks';

export interface Props extends ViewProps {
  /**
   * 是否折叠
   * @default false
   */
  folded?: boolean;
  /**
   * 手动设置高度
   */
  maxHeight?: string;
  children?: React.ReactNode;
}

let count = 0;

export default ({
  folded,
  style,
  id = useRef(`fold${count++}`).current,
  maxHeight: outMaxHeight,
  ...props
}: Props) => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const rerenderCallback = useRerenderCallback();
  useEffect(() => {
    setMaxHeight(undefined);
    rerenderCallback(() => {
      getWH(id).then(({ height }) => {
        setMaxHeight(height);
      });
    });
  }, [setMaxHeight, props.children, rerenderCallback, id]);
  return (
    <View
      id={id}
      style={{
        transition: 'all .3s',
        overflow: 'hidden',
        ...(folded
          ? { maxHeight: 0 }
          : {
              maxHeight:
                outMaxHeight || (maxHeight ? `${maxHeight}PX` : maxHeight),
            }),
        ...style,
      }}
      {...props}
    />
  );
};
