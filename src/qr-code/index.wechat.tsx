/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useMemo } from 'react';
import { Image } from 'remax/wechat';
import { WechatIndex } from './common';
// @ts-ignore
import QR from 'qrcode-base64';
import { getFileSystemManager, saveImageToPhotosAlbum } from 'remax/wechat';

export default ({
  content,
  className,
  onSetSrc,
  longTapSave,
  ...restProps
}: WechatIndex) => {
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
  return (
    <Image
      className={className}
      src={src}
      mode="aspectFill"
      onLongTap={() => {
        if (longTapSave) {
          // @ts-ignore
          const path = `${wx.env.USER_DATA_PATH}/${+new Date()}.png`;
          return getFileSystemManager().writeFile({
            filePath: path,
            data: src.slice(22),
            encoding: 'base64',
            success: () => saveImageToPhotosAlbum({ filePath: path }),
          });
        }
      }}
      {...restProps}
    />
  );
};
