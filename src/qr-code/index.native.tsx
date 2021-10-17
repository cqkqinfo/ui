/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// @ts-ignore
import QrCodeProps from './common';
import QRCode from 'react-native-qrcode-svg';
import { View } from 'remax/one';

export default ({
  content,
  darkColor,
  lightColor,
  onSetSrc,
  longTapSave,
  style,
  ...restProps
}: QrCodeProps) => {
  return (
    <View style={style} {...restProps}>
      <QRCode value={content} size={style?.width as any} {...restProps} />
    </View>
  );
};
