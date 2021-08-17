import { View, ViewProps } from 'remax/one';
import React from 'react';
import Icon from './one';
import { IconFontProps } from './wechat';
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
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      id={id}
      style={{
        width: isNumber ? rpxToPx(+size) : size,
        height: isNumber ? rpxToPx(+size) : size,
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
            className={styles.icon}
          />
        )}
      </NeedWrap>
    </View>
  );
};
