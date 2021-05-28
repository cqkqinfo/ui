import React from 'react';
import { View, Image, ImageProps, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';

interface Props extends ViewProps {
  imgProps?: ImageProps;
  img?: string;
  wrapProps?: ViewProps;
}

export default ({ img, imgProps, className, wrapProps, ...props }: Props) => {
  return (
    <View
      {...wrapProps}
      className={classNames(styles.wrap, wrapProps?.className)}
    >
      <Image
        src={img}
        mode={'scaleToFill'}
        {...imgProps}
        className={classNames(styles.img, imgProps?.className)}
      />
      <View className={classNames(styles.inner, className)} {...props} />
    </View>
  );
};
