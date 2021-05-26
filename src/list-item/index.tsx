import React from 'react';
import Space, { Props as SpaceProps } from '../space';
import { Image } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';

interface Props extends SpaceProps {
  /**
   * 图片
   */
  img?: string;
  /**
   * 图片类名
   */
  imgCls?: string;
  /**
   * 图片下面的部分
   */
  imgFooter?: string;
  /**
   * 图片下面的部分的类名
   */
  imgFooterCls?: string;
  /**
   * 左边SpaceProps
   */
  leftSpaceProps?: SpaceProps;
  /**
   * 右边SpaceProps
   */
  rightSpaceProps?: SpaceProps;
  /**
   * title类名
   */
  titleCls?: string;
  /**
   * 右边文字第一行
   */
  title?: React.ReactNode;
  /**
   * subtitle类名
   */
  subtitleCls?: string;
  /**
   * title里的小文字
   */
  subtitle?: React.ReactNode;
  /**
   * text类名
   */
  textCls?: string;
  /**
   * text，右边文字第二行
   */
  text?: string;
  /**
   * footer类名
   */
  footerCls?: string;
  /**
   * 右边文字最后一行
   */
  footer?: string;
}

export default ({
  img,
  className,
  leftSpaceProps,
  rightSpaceProps,
  text,
  title,
  textCls,
  titleCls,
  footer,
  footerCls,
  subtitle,
  subtitleCls,
  imgFooter,
  imgCls,
  imgFooterCls,
  ...props
}: Props) => {
  return (
    <Space
      className={classNames(styles.item, className)}
      size={20}
      {...props}
      alignItems={'center'}
    >
      {(img || imgFooter) && (
        <Space size={20} vertical {...leftSpaceProps}>
          {img && (
            <Image
              mode={'aspectFill'}
              src={img}
              className={classNames(styles.img, imgCls)}
            />
          )}
          {imgFooter && (
            <Space className={classNames(styles.imgFooter, imgFooterCls)}>
              {imgFooter}
            </Space>
          )}
        </Space>
      )}
      <Space size={20} vertical {...leftSpaceProps}>
        {(title || subtitle) && (
          <Space
            size={20}
            className={classNames(titleCls, styles.title)}
            alignItems={'center'}
          >
            {title}
            <Space className={classNames(subtitleCls, styles.subtitle)}>
              {subtitle}
            </Space>
          </Space>
        )}
        {text && (
          <Space className={classNames(textCls, styles.text)}>{text}</Space>
        )}
        {footer && (
          <Space className={classNames(footerCls, styles.footer)}>
            {footer}
          </Space>
        )}
      </Space>
    </Space>
  );
};
