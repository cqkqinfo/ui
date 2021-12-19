import React from 'react';
import { View, Image, ImageProps, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import previewImage from '../preview-image';

interface Props extends React.PropsWithChildren<ViewProps> {
  /**
   * 图片的props
   */
  imgProps?: ImageProps;
  /**
   * 背景图
   */
  img?: string;
  /**
   * 里层view的props
   */
  innerProps?: ViewProps;
  isPreviewImage?: boolean;
}

export default ({
  img,
  imgProps,
  className,
  innerProps,
  children,
  isPreviewImage,
  ...props
}: Props) => {
  return (
    <View
      {...props}
      className={classNames(styles.wrap, className)}
      onTap={e => {
        e.stopPropagation();
        if (isPreviewImage && img) {
          previewImage({
            urls: [img],
          });
        }
        props?.onTap?.(e);
      }}
    >
      <Image
        src={img}
        mode={'scaleToFill'}
        {...imgProps}
        className={classNames(styles.img, imgProps?.className)}
      />
      <View
        {...innerProps}
        children={children}
        className={classNames(styles.inner, innerProps?.className)}
      />
    </View>
  );
};
