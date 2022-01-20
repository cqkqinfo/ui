import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { WaterMarkProps } from './index';

// 小程序端暂时还没有时间实现
export default (props: WaterMarkProps) => {
  const { children, style, className, prefixCls = 'kq-watermark' } = props;

  const wrapperCls = classNames(`${prefixCls}-wrapper`, className);

  return (
    <View
      style={{
        position: 'relative',
        ...style,
      }}
      className={wrapperCls}
    >
      {children}
    </View>
  );
};
