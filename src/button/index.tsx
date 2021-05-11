import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import Shadow from '../shadow';
import NeedWrap from '../need-wrap';
import Space from '../space';
import Icon from '../icon';

export interface Props
  extends Pick<
    ViewProps,
    | 'style'
    | 'className'
    | 'onTap'
    | 'onTouchStart'
    | 'onTouchMove'
    | 'onTouchEnd'
    | 'onTouchCancel'
    | 'onLongTap'
  > {
  children: React.ReactNode;
  /**
   * 是否是行内元素
   * @default true
   */
  block?: boolean;
  /**
   * 按钮大小
   * @default normal
   */
  size?: 'normal' | 'small' | 'action';
  /**
   * 阴影
   * @default false
   */
  shadow?: boolean;
  /**
   * 类型
   * @default default
   */
  type?: 'default' | 'primary';
  /**
   * 镂空
   * @default false
   */
  ghost?: boolean;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 粗体
   * @default false
   */
  bold?: boolean;
  /**
   * 禁用
   * @default false
   */
  disable?: boolean;
  /**
   * 是否是圆形按钮
   * @default false
   */
  round?: boolean;
  /**
   * 是否是加载状态
   * @default false
   */
  loading?: boolean;
}

export default ({
  children,
  className,
  size = 'normal',
  shadow = false,
  type = 'default',
  icon,
  bold,
  round = false,
  block = true,
  ghost = false,
  loading = false,
  disable,
  ...props
}: Props) => (
  <NeedWrap wrap={Shadow} need={shadow}>
    <View
      className={classNames(
        styles.button,
        className,
        styles[size],
        styles[type],
        {
          [styles.ghost]: ghost,
          [styles.disable]: disable,
          [styles.block]: block,
          [styles.loading]: loading,
          [styles.round]: round,
          [styles.bold]: bold,
          [styles.noBorder]: type === 'default' && shadow,
        },
      )}
      {...props}
    >
      <Space size={'.5em'} alignItems={'flex-end'}>
        {loading ? (
          <Icon
            name={'kq-loading'}
            color={type === 'default' ? '#999' : '#fff'}
          />
        ) : (
          icon
        )}
        {children}
      </Space>
    </View>
  </NeedWrap>
);
