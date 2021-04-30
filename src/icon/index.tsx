import { View, ViewProps } from 'remax/one';
import React, { useRef, useState } from 'react';
import Icon from './one';
import { IconFontProps } from './wechat';
import styles from './index.less';
import classNames from 'classnames';
import useViewSize from '../use-view-size';
import NeedWrap from '../need-wrap';
import Rotate from '../rotate';

export interface Props
  extends ViewProps,
    Pick<IconFontProps, 'name' | 'color'> {
  /**
   * 图标大小，默认是fontSize的值
   */
  size?: number | string;
}

let count = 0;

export default ({
  name,
  color,
  size = '1em',
  className,
  style,
  id = `icon${count++}`,
  ...props
}: Props) => {
  const idRef = useRef(id);
  const [{ width = 0 }, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  useViewSize(idRef.current, setWH);
  return (
    <View
      className={classNames(styles.wrap, className)}
      {...props}
      id={idRef.current}
      style={{ width: size, height: size, ...style }}
    >
      <NeedWrap
        wrap={Rotate}
        need={['kq-loading', 'kq-loading2'].includes(name)}
      >
        {width && (
          <Icon
            name={name}
            size={width}
            color={color}
            className={styles.icon}
          />
        )}
      </NeedWrap>
    </View>
  );
};
