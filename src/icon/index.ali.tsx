import { View, ViewProps } from 'remax/one';
import React from 'react';
import Icon from './one/index';
import { IconFontProps } from './other';
import styles from './index.module.less';
import classNames from 'classnames';
import useViewLayout from '../use-view-layout';
import NeedWrap from '../need-wrap';
import Rotate from '../rotate';
import rpxToPx from '../rpx-to-px';
import pxToRpx from '../px-to-rpx';
import getPlatform from '../get-platform';

export interface Props
  extends ViewProps,
    Pick<IconFontProps, 'name' | 'color'> {
  /**
   * 图标大小，默认是fontSize的值，传入number的话请输入rpx的值
   */
  size?: number | string;
}

export default ({ name, color, size, className, style, ...props }: Props) => {
  const innerSize = size || '1em';
  const isNumber = typeof innerSize === 'number';
  const wh = isNumber ? rpxToPx(+innerSize) : (innerSize + '').toUpperCase();
  const { width: width2 = wh, ...arg } = useViewLayout({ run: !size });
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      {...arg}
      style={{
        // width: wh,
        // height: wh,
        ...style,
      }}
    >
      <NeedWrap
        wrap={Rotate}
        need={['kq-loading', 'kq-loading2'].includes(name)}
        wrapProps={{
          style: {
            width: wh,
            height: wh,
          },
        }}
      >
        {width2 && (
          <Icon
            name={name}
            size={
              width2.toString().includes('PX')
                ? rpxToPx(+width2.toString().replace('PX', ''))
                : getPlatform === 'ali' && size
                ? pxToRpx(+width2)
                : typeof width2 === 'string'
                ? undefined
                : width2
            }
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
