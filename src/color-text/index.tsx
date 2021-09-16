import React from 'react';
import { Text, TextProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';

export default ({
  underline,
  style,
  color,
  ...props
}: React.PropsWithChildren<
  TextProps & {
    /**
     * 显示下划线
     */
    underline?: boolean;
    /**
     * 自定义颜色
     */
    color?: string;
  }
>) => {
  const { brandPrimary } = ConfigProvider.useContainer();
  return (
    <Text
      {...props}
      className={classNames(
        styles.text,
        props.className,
        underline && styles.underline,
      )}
      style={
        {
          color: color || brandPrimary,
          textUnderlineColor: color || brandPrimary,
          ...style,
        } as any
      }
    />
  );
};
