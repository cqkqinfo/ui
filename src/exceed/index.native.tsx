import React, { PropsWithChildren } from 'react';
import { View, ViewProps, Text } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';

interface Props extends PropsWithChildren<ViewProps> {
  children: React.ReactNode;
  /**
   * 超过多少行显示省略号
   * @default 2
   */
  clamp?: number;
  /**
   * 自定义省略号
   */
  more?: React.ReactNode;
  /**
   * 更多节点的类名
   */
  moreCls?: string;
  /**
   * 更多节点的背景色
   * @default #fff
   */
  moreBg?: string;
}

export default ({
  clamp = 2,
  className,
  more,
  style,
  children,
  moreCls,
  moreBg = '#fff',
  ...props
}: Props) => (
  <View
    className={classNames(styles.exceed, className)}
    style={{
      height: style?.lineHeight
        ? clamp * +style?.lineHeight?.toString().replace('px', '')
        : `${clamp * 1.2}em`,
      ...style,
    }}
    {...props}
  >
    {typeof children === 'string'
      ? children.replace?.(/(<[^>]+>)|(&[^>]+;)/g, '')
      : children instanceof Array
      ? children.join('')
      : children}
    {more && (
      <Text
        className={classNames(styles.more, moreCls)}
        style={{
          background: `linear-gradient(-90deg, ${moreBg} 50%, rgba(255,255,255,0.001))`,
        }}
      >
        {more}
      </Text>
    )}
  </View>
);
