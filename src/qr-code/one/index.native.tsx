/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// @ts-ignore
import QrCodeProps from './common';
import QRCode from 'react-native-qrcode-svg';
import { View } from 'remax/one';
import useViewLayout from '../../use-view-layout';

export default ({
  content,
  darkColor,
  lightColor,
  onSetSrc,
  longTapSave,
  style,
  ...restProps
}: QrCodeProps) => {
  const { width, ...arg } = useViewLayout();
  return (
    <View style={style} {...restProps} {...arg}>
      {!!width && <QRCode value={content} size={width} {...restProps} />}
    </View>
  );
};
