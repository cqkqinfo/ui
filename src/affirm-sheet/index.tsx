import getCurrentPage from '../get-current-page';
import React, { useRef, useState } from 'react';
import { SheetWrap, SheetWrapInstance, SheetWrapData } from '../sheet';
import styles from './index.module.less';
import Space from '../space';
import ColorText from '../color-text';
import Button, { Props as ButtonProps } from '../button';
import { useConfig } from '../config-provider';
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
   * 确认按钮的props
   */
  okProps?: ButtonProps;
  /**
   * 取消按钮的props
   */
  cancelProps?: ButtonProps;
  /**
   * 确认内容
   */
  content: React.ReactNode;
}

const data: SheetWrapData = {};

const AffirmSheet = ({
  elderly = useConfig().elderly,
}: {
  /**
   * 适老模式，开启后不同type的按钮文字和尺寸都会变大
   */
  elderly?: boolean;
}) => {
  const [
    {
      title = '提示',
      cancelText = '取消',
      okText = '确定',
      content,
      cancelProps,
      okProps,
    },
    setOptions,
  ] = useState<ShowOptions>({} as any);
  const ref = useRef<SheetWrapInstance>(null);
  return (
    <SheetWrap ref={ref} setOptions={setOptions} data={data}>
      <Space
        vertical
        className={classNames(styles.wrap, elderly && styles.elderly)}
      >
        <ColorText className={styles.title}>{title}</ColorText>
        <Space className={styles.content}>{content}</Space>
        <Space size={20}>
          <Button
            type={'primary'}
            ghost
            {...okProps}
            onTap={() => {
              ref.current?.promiseRef.reject();
              ref.current?.sheetRef?.setVisible(false);
            }}
          >
            {cancelText}
          </Button>
          <Button
            type={'primary'}
            {...cancelProps}
            onTap={() => {
              ref.current?.promiseRef.resolve();
              ref.current?.sheetRef?.setVisible(false);
            }}
          >
            {okText}
          </Button>
        </Space>
      </Space>
    </SheetWrap>
  );
};

AffirmSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  if (!data[page]) {
    throw new Error('请在页面添加<AffirmSheet/>组件');
  }
  return data[page].fn(options);
};

AffirmSheet.hide = () => {
  const page = getCurrentPage();
  return data[page].setVisible?.(false);
};

export default AffirmSheet;
