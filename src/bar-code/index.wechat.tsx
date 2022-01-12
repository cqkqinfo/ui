import React, { useEffect, useState } from 'react';
import { Canvas, createSelectorQuery } from 'remax/wechat';
import Space from '../space';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wxbarcode from 'wxbarcode';
import BarCodeProps from './common';
import classNames from 'classnames';
import styles from './index.module.less';
import { useViewLayout } from '@kqinfo/ui';
export default ({ content, className, ...props }: BarCodeProps) => {
  const [canvasId] = useState('canvasId' + Math.floor(Math.random() * 100));
  const { width = 0, height = 0, ...arg } = useViewLayout();
  useEffect(() => {
    wxbarcode.barcode(canvasId, content, width * 2, height * 2);
  }, [content, canvasId, width, height]);
  return (
    <Space
      vertical
      alignItems={'center'}
      id={canvasId}
      size={'10px'}
      {...props}
      className={classNames(styles.wrap, className)}
    >
      <Canvas
        {...arg}
        canvasId={canvasId}
        style={{ width: '100%', height: '100%' }}
      />
      {content}
    </Space>
  );
};
