import getCurrentPage from '../get-current-page';
import React, { useRef, useState } from 'react';
import {
  SheetWrap,
  SheetWrapInstance,
  SheetWrapData,
  SheetProps,
} from '../sheet';
import styles from './index.module.less';
import Space from '../space';
import classNames from 'classnames';
import rpxToPx from '../rpx-to-px';
import Icon from '../icon';
import { useConfig } from '../config-provider';
import ColorText from '../color-text';

export const Options = ({}: ShowOptions) => {};

export interface ShowOptions extends Pick<SheetProps, 'maskClosable'> {
  /**
   * 确认标题
   * @default 提示
   */
  title?: React.ReactNode;
  /**
   * 确定文字
   * @default 确定
   */
  okText?: React.ReactNode;
  /**
   * 确认事件，传入promise方法，可以阻止点击确认后弹窗关闭
   */
  onOk?: () => Promise<any>;
  /**
   * 确定按钮颜色
   */
  okTextColor?: string;
  /**
   * 取消文字
   * @default 取消
   */
  cancelText?: React.ReactNode;
  /**
   * 弹窗内容
   */
  content: React.ReactNode;
  /**
   * 显示取消
   */
  showCancel?: boolean;
  /**
   * 自定义footer
   */
  footer?: React.ReactNode;
  /**
   * 标题类名
   */
  titleCls?: string;
  /**
   * 弹窗底部类名
   */
  footerCls?: string;
  /**
   * 内容类名
   */
  contentCls?: string;
  /**
   * 确定按钮类名
   */
  okCls?: string;
  /**
   * 按钮类名
   */
  btnCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 弹窗主体类名
   */
  bodyCls?: string;
  /**
   * 弹窗样式
   */
  wrapStyle?: React.CSSProperties;
  /**
   * 主体样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 默认转为单位rpx
   * @default 80vw
   */
  width?: number;
}

const data: SheetWrapData = {};

const Modal = () => {
  const { brandPrimary } = useConfig();
  const [okLoading, setOkLoading] = useState(false);
  const [
    {
      title,
      cancelText = '取消',
      okText = '确定',
      content,
      showCancel = true,
      contentCls,
      okCls,
      className,
      titleCls,
      bodyCls,
      footerCls,
      btnCls,
      wrapStyle,
      bodyStyle,
      okTextColor = brandPrimary,
      width,
      onOk = async () => {},
      footer = (
        <Space
          className={classNames(styles.footer, footerCls)}
          alignItems={'stretch'}
        >
          {showCancel && (
            <Space
              flex={1}
              justify={'center'}
              alignItems={'center'}
              className={classNames(styles.btn, btnCls)}
              onTap={() => {
                ref.current?.promiseRef.reject();
                ref.current?.sheetRef?.setVisible(false);
              }}
            >
              {cancelText}
            </Space>
          )}
          <Space
            flex={1}
            justify={'center'}
            alignItems={'center'}
            className={classNames(styles.ok, styles.btn, okCls, btnCls)}
            onTap={async () => {
              if (okLoading) return;
              setOkLoading(true);
              await onOk().finally(() => {
                setOkLoading(false);
              });
              ref.current?.promiseRef.resolve();
              ref.current?.sheetRef?.setVisible(false);
            }}
            size={10}
          >
            {okLoading && <Icon color={okTextColor} name={'kq-loading'} />}
            <ColorText color={okTextColor}>{okText}</ColorText>
          </Space>
        </Space>
      ),
    },
    setOptions,
  ] = useState<ShowOptions>({} as any);
  const ref = useRef<SheetWrapInstance>(null);
  return (
    <SheetWrap ref={ref} setOptions={setOptions} data={data} center>
      <Space
        vertical
        className={classNames(styles.wrap, className)}
        style={{ width: width ? rpxToPx(width) : undefined, ...wrapStyle }}
      >
        <Space
          className={classNames(styles.body, bodyCls)}
          vertical
          alignItems={'stretch'}
          style={bodyStyle}
        >
          {title && (
            <Space
              className={classNames(styles.title, titleCls)}
              justify={'center'}
            >
              {title}
            </Space>
          )}
          <Space
            className={classNames(styles.content, contentCls)}
            justify={'center'}
          >
            {content}
          </Space>
        </Space>
        {footer}
      </Space>
    </SheetWrap>
  );
};

Modal.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  if (!data[page]) {
    throw new Error('请在页面添加<Modal/>组件');
  }
  return data[page].fn(options);
};

Modal.hide = () => {
  const page = getCurrentPage();
  return data[page].setVisible?.(false);
};

export default Modal;
