import React from 'react';
import { Space } from '@kqinfo/ui';
import { Props as SpaceProps } from '../space';
import styles from './index.module.less';
import classNames from 'classnames';
import getPrice from './getPrice';

export interface Props extends SpaceProps {
  /**
   * 金额，单位：分
   */
  price?: number;
  /**
   * 小数位长度
   * @default 2
   */
  len?: number;
  /**
   * 粗体
   */
  bold?: boolean;
  /**
   * 前缀大字体
   */
  bigPrefix?: boolean;
  /**
   * 小数位大字体
   */
  bigDecimal?: boolean;
  /**
   * 字体放大比例
   * @default 1.53
   */
  bigScale?: number;
  /**
   * 大字体类名
   */
  bigCls?: string;
  /**
   * 整数类名
   */
  integerCls?: string;
  /**
   * 小数类名
   */
  decimalCls?: string;
}

export default ({
  price,
  className,
  len,
  bigPrefix,
  bigDecimal,
  integerCls,
  decimalCls,
  bigScale = 1.53,
  bigCls,
  ...props
}: Props) => {
  let str = getPrice(price, len);
  str = +str ? str : '0';
  const [integer, decimal] = str.split('.');
  const bigStyle = { fontSize: `${bigScale}em` };
  return (
    <Space
      className={classNames(styles.price, className)}
      alignItems={'baseline'}
      {...props}
    >
      <Space
        className={classNames(bigPrefix && bigCls)}
        style={bigPrefix ? bigStyle : {}}
      >
        ¥
      </Space>
      <Space className={classNames(bigCls, integerCls)} style={bigStyle}>
        {integer}
      </Space>
      <Space
        className={classNames(bigDecimal && bigCls, decimalCls)}
        style={bigDecimal ? bigStyle : {}}
      >
        {str.includes('.') ? '.' : ''}
        {decimal}
      </Space>
    </Space>
  );
};
