import React, { useState } from 'react';
import { View } from 'remax/one';
import { Props } from './index';

export default ({
  folded,
  style,
  maxHeight: outMaxHeight,
  ...props
}: Props) => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  return (
    <View
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLayout={e => {
        const height = e.nativeEvent.layout.height;
        if (height) {
          setMaxHeight(height);
        }
      }}
      style={{
        transition: 'all .3s',
        overflow: 'hidden',
        ...(folded
          ? { maxHeight: 0 }
          : {
              maxHeight:
                outMaxHeight ||
                (maxHeight && process.env.REMAX_PLATFORM === 'wechat'
                  ? `${maxHeight}PX`
                  : maxHeight),
            }),
        ...style,
      }}
      {...props}
    />
  );
};
