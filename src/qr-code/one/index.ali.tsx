/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useMemo } from 'react';
import { Image } from 'remax/ali';
import QrCodeProps from './common';
// @ts-ignore
import QR from 'qrcode-base64';

export default ({
  content,
  lightColor: _,
  darkColor: __,
  className,
  onSetSrc,
  longTapSave,
  ...restProps
}: QrCodeProps) => {
  const src = useMemo(
    () =>
      QR.drawImg(content, {
        typeNumber: 4,
        errorCorrectLevel: 'L',
        size: 500,
      }),
    [content],
  );
  useEffect(() => {
    onSetSrc?.(src);
  }, [onSetSrc, src]);
  return <Image className={className} src={src} {...(restProps as any)} />;
};
