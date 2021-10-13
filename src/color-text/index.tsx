import React from 'react';
import { Text, TextProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import { useConfig } from '../config-provider';

export default ({
  underline,
  style,
  color,
  fontSize,
  fontWeight,
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
    /**
     * 字体大小
     */
    fontSize?: string;
    /**
     * 字重
     */
    fontWeight?: React.CSSProperties['fontWeight'];
  }
>) => {
  const { brandPrimary } = useConfig();
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
          fontSize,
          fontWeight,
          ...style,
        } as any
      }
    />
  );
};
