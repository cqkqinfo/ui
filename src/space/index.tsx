import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import { Property } from 'csstype';
import ViewProps from '@remax/one/esm/hostComponents/View/props';
import rpxToPx from '../rpx-to-px';

export interface Props
  extends Pick<
    ViewProps,
    | 'style'
    | 'onTap'
    | 'className'
    | 'onTouchStart'
    | 'onTouchMove'
    | 'onTouchEnd'
    | 'onTouchCancel'
    | 'onLongTap'
  > {
  /**
   * 是否垂直
   * @default false
   */
  vertical?: boolean;
  /**
   * 子元素
   */
  children?: React.ReactNodeArray | React.ReactNode;
  /**
   * 间距大小，字符串可以传入自定义单位，数字默认会转为rpx
   */
  size?: string | number;
  /**
   * CSS的flex设置
   */
  flex?: Property.Flex;
  /**
   * CSS的justify设置
   */
  justify?: Property.JustifyContent;
  /**
   * CSS的alignItems设置
   * @default stretch
   */
  alignItems?: Property.AlignItems;
  /**
   * CSS的alignSelf设置
   */
  alignSelf?: Property.AlignSelf;
  /**
   * CSS的margin设置
   */
  margin?: Property.Margin | number;
  /**
   * CSS的padding设置
   */
  padding?: Property.Padding | number;
  /**
   * CSS的flexWrap设置
   */
  flexWrap?: Property.FlexWrap;
}

export default ({
  style,
  children = [<View />, <View />],
  size,
  className,
  margin,
  padding,
  vertical,
  flexWrap,
  justify,
  alignSelf,
  alignItems,
  flex,
  ...props
}: Props) => {
  const filterChildren = (children instanceof Array ? children : [children])
    .flat(3)
    ?.map((i: any) =>
      i?.type?.toString() === 'Symbol(react.fragment)' ? i.props.children : i,
    )
    ?.flat(3)
    ?.filter?.(i => i);
  return (
    <View
      style={{
        lineHeight: vertical ? 1 : undefined,
        flex,
        justifyContent: justify,
        margin,
        padding,
        alignSelf,
        alignItems,
        flexWrap,
        ...style,
      }}
      className={classNames(styles.space, className, {
        [styles.vertical]: vertical,
      })}
      {...props}
    >
      {filterChildren?.map?.((item, index) => {
        item = React.isValidElement(item) ? item : <View>{item}</View>;
        const props = (item as any).props;
        return React.cloneElement(item as any, {
          ...props,
          key: index,
          style: {
            [vertical ? 'marginBottom' : 'marginRight']:
              index + 1 === filterChildren?.length
                ? undefined
                : typeof size === 'number'
                ? rpxToPx(size)
                : size,
            ...props.style,
          },
        });
      })}
    </View>
  );
};
