import React from 'react';
import { Image, ImageProps } from 'remax/one';
import previewImage from '../preview-image';
import commonImg from '../common-img';
import { useEffectState } from 'parsec-hooks';

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
  onError,
  ...props
}: Props) => {
  const [src1, setSrc1] = useEffectState(src);
  return (
    <Image
      src={src1}
      mode={'aspectFill'}
      {...props}
      onTap={e => {
        if (preview) {
          previewImage({ urls: [src] });
        }
        onTap?.(e);
      }}
      onError={e => {
        if (placeholder) {
          setSrc1(placeholder);
        }
        onError?.(e);
      }}
    />
  );
};
