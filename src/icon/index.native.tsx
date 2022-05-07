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
  const isNumber = typeof size === 'number';
  const [width2, setWidth2] = useState(rpxToPx(isNumber ? size : 0));
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLayout={e => {
        if (!width2) {
          setWidth2(e.nativeEvent.layout.width);
        }
      }}
      style={{
        width: isNumber ? rpxToPx(+(size as any)) : size,
        height: isNumber ? rpxToPx(+(size as any)) : size,
        ...style,
      }}
    >
      <NeedWrap
        wrap={Rotate}
        need={['kq-loading', 'kq-loading2'].includes(name)}
        wrapProps={{ run: true, width: width2, height: width2 }}
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
