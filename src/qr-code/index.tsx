/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import { Image } from 'remax/one';
// @ts-ignore
import QRCode from 'qrcode';
import QrCodeProps from './common';
import { usePromise } from 'parsec-hooks';

export default ({
  content,
  darkColor,
  lightColor,
  onSetSrc,
  ...restProps
}: QrCodeProps) => {
  const { data: src } = usePromise<any, string>(
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
  useEffect(() => {
    onSetSrc?.(src);
  }, [onSetSrc, src]);
  return <Image src={src as string} mode="aspectFill" {...restProps} />;
};
