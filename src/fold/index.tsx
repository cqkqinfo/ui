import React, { useEffect, useRef, useState } from 'react';
import { View, ViewProps } from 'remax/one';
import { getLayout } from '../use-view-layout';
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
  animation?: boolean;
}

let count = 0;

export default ({
  folded,
  style,
  id = useRef(`fold${count++}`).current,
  maxHeight: outMaxHeight,
  animation = true,
  ...props
}: Props) => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const rerenderCallback = useRerenderCallback();
  useEffect(() => {
    setMaxHeight(undefined);
    rerenderCallback(() => {
      getLayout(id).then(({ height }) => {
        setMaxHeight(height);
      });
    });
  }, [setMaxHeight, props.children, rerenderCallback, id]);
  return (
    <View
      id={id}
      style={{
        transition: 'all .3s',
        overflow: folded ? 'hidden' : 'initial',
        ...(folded
          ? { maxHeight: 0 }
          : {
              maxHeight: animation
                ? outMaxHeight || (maxHeight ? `${maxHeight}PX` : 'inherit')
                : undefined,
            }),
        ...style,
      }}
      {...props}
    />
  );
};
