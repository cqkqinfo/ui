import React, { useEffect, useState } from 'react';
import { Canvas, createSelectorQuery } from 'remax/ali';
import Space from '../space';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { barcode } from './_utils';
import BarCodeProps from './common';
import styles from './index.module.less';
import classNames from 'classnames';
export default ({
  content,
  width = 680,
  height = 200,
  className,
  ...props
}: BarCodeProps) => {
  const [canvasId] = useState('canvasId' + Math.floor(Math.random() * 100));
  useEffect(() => {
    const query = createSelectorQuery();
    const result = query.select(`#${canvasId}`).boundingClientRect();
    if (result) {
      barcode(canvasId, content, width, height);
    }
  }, [content, canvasId, width, height]);
  return (
    <Space
      vertical
      alignItems={'center'}
      size={'10px'}
      {...props}
      className={classNames(styles.wrap, className)}
    >
      <Canvas id={canvasId} style={{ width, height }} />
      {content}
    </Space>
  );
};
