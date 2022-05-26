import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import Shadow from '../shadow';
import NeedWrap from '../need-wrap';
import Space, { Props as SpaceProps } from '../space';
import Icon from '../icon';
import { useConfig } from '../config-provider';
import '../_init';

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
  size?: 'normal' | 'small' | 'action' | 'tiny';
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
  disabled?: boolean;
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

const Button = ({
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
  disabled,
  ...props
}: Props) => (
  <NeedWrap wrap={Shadow} need={shadow}>
    <View
      role="button"
      aria-label={typeof children === 'string' ? children : undefined}
      aria-disabled={disabled}
      className={classNames(
        styles.button,
        block && styles.block,
        styles[size],
        styles[type],
        ghost && styles.ghost,
        ghost && styles[`${type}-ghost`],
        disabled && styles.disable,
        loading && styles.loading,
        round && styles.round,
        bold || (elderly && styles.bold),
        type === 'default' && shadow && styles.noBorder,
        type === 'default' && shadow && styles[`${type}-noBorder`],
        elderly && styles.elderly,
        className,
      )}
      {...props}
    >
      <Space size={'.5em'} alignItems={'center'}>
        {loading ? (
          <Icon
            size={36}
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

Button.Group = ({ className, ...props }: SpaceProps) => {
  return <Space className={classNames(className, styles.group)} {...props} />;
};

export default Button;
