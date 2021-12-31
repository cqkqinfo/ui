import getCurrentPage from '../get-current-page';
import React, { useRef, useState } from 'react';
import { SheetWrap, SheetWrapInstance } from '../sheet';
import styles from './index.module.less';
import Space from '../space';
import classNames from 'classnames';

export interface ShowOptions {
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
}

const data: {
  [route: string]: (options: ShowOptions) => Promise<undefined>;
} = {};

export interface Props {
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
}

const AffirmSheet = ({
  contentCls,
  okCls,
  className,
  titleCls,
  bodyCls,
  footerCls,
  btnCls,
}: Props) => {
  const [
    {
      title,
      cancelText = '取消',
      okText = '确定',
      content,
      showCancel = true,
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
            onTap={() => {
              ref.current?.promiseRef.resolve();
              ref.current?.sheetRef?.setVisible(false);
            }}
          >
            {okText}
          </Space>
        </Space>
      ),
    },
    setOptions,
  ] = useState<ShowOptions>({} as any);
  const ref = useRef<SheetWrapInstance>(null);
  return (
    <SheetWrap ref={ref} setOptions={setOptions} data={data} center>
      <Space vertical className={classNames(styles.wrap, className)}>
        <Space
          className={classNames(styles.body, bodyCls)}
          vertical
          alignItems={'stretch'}
        >
          <Space
            className={classNames(styles.title, titleCls)}
            justify={'center'}
          >
            {title}
          </Space>
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

AffirmSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  return data[page](options);
};

export default AffirmSheet;
