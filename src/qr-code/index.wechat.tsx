/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useMemo } from 'react';
import { Image } from 'remax/one';
import QrCodeProps from './common';
// @ts-ignore
import QR from 'qrcode-base64';

export default ({ content, className, ...restProps }: QrCodeProps) => {
  const src = useMemo(
    () =>
      QR.drawImg(content, {
        typeNumber: 4,
        errorCorrectLevel: 'L',
        size: 500,
      }),
    [content],
  );
  return (
    <Image className={className} src={src} mode="aspectFill" {...restProps} />
  );
};
