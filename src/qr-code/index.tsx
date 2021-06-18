/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Image } from 'remax/one';
// @ts-ignore
import QRCode from 'qrcode';
import QrCodeProps from './common';
import { usePromise } from 'parsec-hooks';

export default ({
  content,
  darkColor,
  lightColor,
  ...restProps
}: QrCodeProps) => {
  const { data: src } = usePromise(
    ({
      lightColor,
      darkColor,
      content,
    }: Pick<QrCodeProps, 'lightColor' | 'darkColor' | 'content'>) =>
      QRCode.toDataURL(content, {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        width: 500,
        margin: 1,
        color: {
          dark: darkColor,
          light: lightColor,
        },
      }),
    {
      params: {
        lightColor,
        darkColor,
        content,
      },
    },
  );
  return <Image src={src as string} mode="aspectFill" {...restProps} />;
};
