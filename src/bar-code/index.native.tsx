import React from 'react';
import Space from '../space';
import Barcode from 'react-native-barcode-builder';
import BarCodeProps from './common';
export default ({ content, style, ...props }: BarCodeProps) => {
  return (
    <Space
      vertical
      alignItems={'center'}
      style={{ background: '#fff' }}
      {...props}
    >
      <Barcode
        width={1}
        height={style?.height as any}
        value={content}
        background={'#fff'}
        text={content}
        format="CODE128"
      />
    </Space>
  );
};
