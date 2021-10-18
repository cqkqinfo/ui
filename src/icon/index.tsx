import { View, ViewProps } from 'remax/one';
import React from 'react';
import Icon from './one/index';
import { IconFontProps } from './other';
import styles from './index.module.less';
import classNames from 'classnames';
import useViewSize from '../use-view-size';
import NeedWrap from '../need-wrap';
import Rotate from '../rotate';
import { useId } from 'parsec-hooks';
import rpxToPx from '../rpx-to-px';

export interface Props
  extends ViewProps,
    Pick<IconFontProps, 'name' | 'color'> {
  /**
   * 图标大小，默认是fontSize的值，传入number的话请输入rpx的值
   */
  size?: number | string;
}

export default ({
  name,
  color,
  size = '1em',
  className,
  style,
  ...props
}: Props) => {
  const id = useId();
  const width2 = useViewSize(id).width;
  const isNumber = typeof size === 'number';
  const wh = isNumber ? rpxToPx(+size) : (size + '').toUpperCase();
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      id={id}
      style={{
        width: wh,
        height: wh,
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
