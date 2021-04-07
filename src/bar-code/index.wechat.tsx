import React, { useEffect, useState } from 'react';
import { Canvas, createSelectorQuery, getSystemInfoSync } from 'remax/wechat';
import Space from '../space';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wxbarcode from 'wxbarcode';
import BarCodeProps from './common';
import pxToRpx from '../px-to-rpx';
export default ({ content, style, ...props }: BarCodeProps) => {
  const [canvasId] = useState('canvasId' + Math.floor(Math.random() * 100));
  useEffect(() => {
    const query = createSelectorQuery();
    query.select(`#${canvasId}`).boundingClientRect((data: any) => {
      const a = getSystemInfoSync();
      console.log(a, data);
      wxbarcode.barcode(
        canvasId,
        content,
        pxToRpx(data?.width),
        pxToRpx(data?.height),
      );
    });
    query.exec();
  }, [content, canvasId, style?.width, style?.height]);
  return (
    <Space
      vertical
      alignItems={'center'}
      id={canvasId}
      size={'10px'}
      style={style}
      {...props}
    >
      <Canvas canvasId={canvasId} style={{ width: '100%', height: '100%' }} />
      {content}
    </Space>
  );
};
