import React, { forwardRef } from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import { Property } from 'csstype';
import rpxToPx from '../rpx-to-px';
import NeedWrap from '../need-wrap';
import Animated from '../animated';
import 'array-flat-polyfill';

export interface Props
  extends Pick<
    ViewProps,
    | 'style'
    | 'onTap'
    | 'className'
    | 'id'
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
  hidden?: boolean;
  /**
   * 在一行第几个时不设置size
   */
  ignoreNum?: number;
  /**
   * 由createAnimation创建的动画对象
   */
  animation?: any;
}

export default forwardRef(
  (
    {
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
      ignoreNum,
      animation,
      ...props
    }: Props,
    ref,
  ) => {
    const filterChildren = (children instanceof Array ? children : [children])
      .flat(3)
      ?.map((i: any) =>
        i?.type?.toString() === 'Symbol(react.fragment)' ? i.props.children : i,
      )
      ?.flat(3)
      ?.filter?.(i => ![undefined, true, false].includes(i));
    return (
      <NeedWrap
        wrap={Animated.View}
        need={!!animation}
        wrapProps={animation as any}
      >
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
          className={classNames(
            styles.space,
            className,
            vertical && styles.vertical,
          )}
          {...props}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={ref}
        >
          {filterChildren?.map?.((item, index) => {
            item = React.isValidElement(item) ? item : <View>{item}</View>;
            const props = (item as any).props;
            const style = {
              [vertical ? 'marginBottom' : 'marginRight']:
                index + 1 === filterChildren?.length ||
                (ignoreNum && index && (index + 1) % ignoreNum === 0)
                  ? undefined
                  : typeof size === 'number'
                  ? rpxToPx(size)
                  : process.env.REMAX_PLATFORM === 'wechat'
                  ? size?.toUpperCase()
                  : size,
              ...props.style,
            };
            return React.cloneElement(item as any, {
              ...props,
              'data-is-last': index === filterChildren.length - 1,
              key: index + JSON.stringify(style),
              style,
            });
          })}
        </View>
      </NeedWrap>
    );
  },
);
