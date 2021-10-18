import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import Shadow from '../shadow';
import NeedWrap from '../need-wrap';
import Space from '../space';
import Icon from '../icon';
import { useConfig } from '../config-provider';

export interface Props
  extends Partial<
    Pick<
      ViewProps,
      | 'style'
      | 'className'
      | 'onTap'
      | 'onTouchStart'
      | 'onTouchMove'
      | 'onTouchEnd'
      | 'onTouchCancel'
      | 'onLongTap'
    >
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
  type?: 'default' | 'primary' | 'attract';
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
  /**
   * 适老模式，开启后不同type的按钮文字和尺寸都会变大
   */
  elderly?: boolean;
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
  elderly = useConfig().elderly,
  disable,
  ...props
}: Props) => (
  <NeedWrap wrap={Shadow} need={shadow}>
    <View
      role="button"
      aria-label={typeof children === 'string' ? children : undefined}
      aria-disabled={disable}
      className={classNames(
        styles.button,
        className,
        styles[size],
        styles[type],
        ghost && styles.ghost,
        ghost && styles[`${type}-ghost`],
        disable && styles.disable,
        block && styles.block,
        loading && styles.loading,
        round && styles.round,
        bold || (elderly && styles.bold),
        type === 'default' && shadow && styles.noBorder,
        type === 'default' && shadow && styles[`${type}-noBorder`],
        elderly && styles.elderly,
      )}
      {...props}
    >
      <Space size={'.5em'} alignItems={'center'}>
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
