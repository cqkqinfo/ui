/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback } from 'react';
import { Image } from 'remax/one';
// @ts-ignore
import QRCode from 'qrcode';
import QrCodeProps from './common';
import { usePromise } from 'parsec-hooks';

export default ({ content, ...restProps }: QrCodeProps) => {
  const { data: src } = usePromise(
    useCallback(
      () =>
        QRCode.toDataURL(content, {
          errorCorrectionLevel: 'H',
          type: 'image/jpeg',
          width: 500,
          margin: 1,
        }),
      [content],
    ),
  );
  return <Image src={src as string} mode="aspectFill" {...restProps} />;
};
