import React, { useEffect } from 'react';
import Space from '../space';
import Barcode from 'react-native-barcode-builder';
import BarCodeProps from './common';
import useViewLayout from '../use-view-layout';
export default ({ content, style, ...props }: BarCodeProps) => {
  const [run, setRun] = React.useState(false);
  const { width = 0, ...arg } = useViewLayout({ run });
  useEffect(() => {
    setRun(!width);
  }, [width]);
  return (
    <Space
      vertical
      alignItems={'center'}
      style={{ background: '#fff' }}
      {...props}
      {...arg}
    >
      <Barcode
        width={(width / content.length) * 1.9}
        height={style?.height as any}
        value={content}
        text={content}
        format="CODE128"
      />
    </Space>
  );
};
