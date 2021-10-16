import { View } from 'remax/one';
import React, { useState } from 'react';
import Icon from './one/index';
import { Props } from './index';
import styles from './index.module.less';
import classNames from 'classnames';
import NeedWrap from '../need-wrap';
import Rotate from '../rotate';
import rpxToPx from '../rpx-to-px';

export default ({
  name,
  color,
  style,
  className,
  size = { ...(className as any), ...style }.fontSize,
  ...props
}: Props) => {
  const [width2, setWidth2] = useState(0);
  const isNumber = typeof size === 'number';
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLayout={e => setWidth2(e.nativeEvent.layout.width)}
      style={{
        width: isNumber ? rpxToPx(+(size as any)) : size,
        height: isNumber ? rpxToPx(+(size as any)) : size,
        ...style,
      }}
    >
      <NeedWrap
        wrap={Rotate}
        need={['kq-loading', 'kq-loading2'].includes(name)}
      >
        {width2 && (
          <Icon
            name={name}
            size={width2}
            color={color}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            className={styles.icon}
          />
        )}
      </NeedWrap>
    </View>
  );
};
