/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from 'react';
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
  longTapSave,
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
  const timerRef = useRef<any>(null);
  return (
    <Image
      src={src as string}
      mode="aspectFill"
      onTouchStart={() => {
        timerRef.current = setTimeout(() => {
          console.log(longTapSave);
          if (longTapSave) {
            // 生成一个a元素
            const a = document.createElement('a');
            // 创建一个单击事件
            const event = new MouseEvent('click');
            // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
            a.download = '二维码';
            // 将生成的URL设置为a.href属性
            a.href = src;
            // 触发a的单击事件
            a.dispatchEvent(event);
          }
        }, 500);
      }}
      onTouchEnd={() => {
        clearTimeout(timerRef.current);
      }}
      {...(restProps as any)}
    />
  );
};
