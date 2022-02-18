import React from 'react';
import { Image } from 'remax/ali';
import previewImage from '../preview-image';
import { useEffectState } from 'parsec-hooks';
import { useProps, Props } from './common';

export default (outProps: Props) => {
  const { preview, onError, onTap, placeholder, src, ...props } = useProps(
    outProps,
  );
  const [src1, setSrc1] = useEffectState(src);
  return (
    <Image
      src={src1}
      mode={'aspectFill'}
      {...(props as any)}
      onTap={
        preview || onTap
          ? (e: any) => {
              if (preview) {
                previewImage({ urls: [src] });
              }
              onTap?.(e);
            }
          : undefined
      }
      onError={(e: any) => {
        if (placeholder) {
          setSrc1(placeholder);
        }
        onError?.(e);
      }}
    />
  );
};
