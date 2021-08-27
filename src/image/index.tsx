import React from 'react';
import { Image, ImageProps } from 'remax/one';
import previewImage from '../preview-image';
import commonImg from '../common-img';

interface Props extends ImageProps {
  /**
   * 占位图片
   */
  placeholder?: string | false;
  /**
   * 支持预览
   * @default true
   */
  preview?: boolean;
}

export default ({
  placeholder = commonImg.zwt,
  src = placeholder ? placeholder : '',
  onTap,
  preview = true,
  ...props
}: Props) => {
  return (
    <Image
      src={src}
      mode={'aspectFill'}
      {...props}
      onTap={e => {
        if (preview) {
          previewImage({ urls: [src] });
        }
        onTap?.(e);
      }}
    />
  );
};
