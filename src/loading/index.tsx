import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import NeedWrap from '../need-wrap';
import Shadow from '../shadow';
import Icon from '../icon';
import { useConfig } from '../config-provider';
import Space from '../space';
import classnames from 'classnames';

export interface Props {
  /**
   * 加载中的文本内容
   * @default 加载中
   */
  content?: string;
  /**
   * 类型
   * @default full
   */
  type?: 'top' | 'full' | 'inline';
  /**
   * 加载文字类名
   */
  textCls?: string;
  /**
   * 加载图标颜色
   */
  iconColor?: string;
  className?: string;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
}

export default ({
  type,
  content = '加载中',
  iconColor,
  textCls,
  icon,
  className,
}: Props) => {
  const { brandPrimary } = useConfig();
  const top = type === 'top';
  if (type === 'inline') {
    return (
      <Space
        size={10}
        className={classnames(styles.tip, className)}
        alignItems={'center'}
        justify={'center'}
      >
        {icon || (
          <Icon size={30} color={iconColor || '#CCCCCC'} name={'kq-loading2'} />
        )}
        {content}
      </Space>
    );
  }
  return (
    <View className={!top && styles.mask}>
      <NeedWrap need={top} wrap={Shadow}>
        <View className={classnames(top ? styles.top : styles.full, className)}>
          {icon || (
            <Icon
              name={top ? 'kq-loading' : 'kq-loading2'}
              color={iconColor || (top ? brandPrimary : '#fff')}
              size={top ? 50 : 80}
            />
          )}
          {!top && (
            <View className={classnames(styles.text, textCls)}>{content}</View>
          )}
        </View>
      </NeedWrap>
    </View>
  );
};
