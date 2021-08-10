// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jigsaw from 'jigsaw-captcha-js';
import React, { useEffect, useRef } from 'react';
import { View } from 'remax/one';
import { useId, useInit } from 'parsec-hooks';
import rpxToPx from '../rpx-to-px';

export interface Props {
  /**
   * 宽度
   * @default 620
   */
  width?: number;
  /**
   * 高度
   * @default 310
   */
  height?: number;
  /**
   * 图库
   */
  imgs: string[];
  /**
   * 成功回调
   */
  onSuccess?: () => void;
  /**
   * 失败回调
   */
  onFail?: () => void;
  /**
   * 刷新回调
   */
  onRefresh?: () => void;
}

export default ({
  imgs,
  width = 620,
  height = 310,
  onFail,
  onRefresh,
  onSuccess,
}: Props) => {
  const id = useId();
  const preImg = useRef('');
  useEffect(() => {
    if (JSON.stringify(imgs) === preImg.current) return;
    preImg.current = JSON.stringify(imgs);
    jigsaw.init({
      el: document.getElementById(id),
      imgs, // 可选，默认为一张内置图片
      width: rpxToPx(width), // 可选, 默认310
      height: rpxToPx(height), // 可选, 默认155
      onFail,
      onRefresh,
      onSuccess,
    });
  }, [height, id, imgs, onFail, onRefresh, onSuccess, width]);
  return <View id={id} />;
};
