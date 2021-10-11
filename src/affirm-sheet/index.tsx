import getCurrentPage from '../get-current-page';
import React, { useEffect, useRef, useState } from 'react';
import Sheet, { SheetInstance } from '../sheet';
import styles from './index.module.less';
import Space from '../space';
import ColorText from '../color-text';
import Button, { Props as ButtonProps } from '../button';
import { useConfig } from '@/config-provider';
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

const data: {
  [route: string]: (options: ShowOptions) => Promise<undefined>;
} = {};

const AffirmSheet = ({
  elderly = useConfig().elderly,
}: {
  /**
   * 适老模式，开启后不同type的按钮文字和尺寸都会变大
   */
  elderly?: boolean;
}) => {
  const page = getCurrentPage();
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
  const ref = useRef<SheetInstance>(null);
  const promiseRef = useRef<any>({ resolve: () => {}, reject: () => {} });
  useEffect(() => {
    data[page] = options =>
      new Promise((resolve, reject) => {
        setOptions(options);
        ref.current?.setVisible(true);
        promiseRef.current = { reject, resolve };
      });
  }, [page]);
  return (
    <Sheet ref={ref}>
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
              promiseRef.current.reject();
              ref.current?.setVisible(false);
            }}
          >
            {cancelText}
          </Button>
          <Button
            type={'primary'}
            {...cancelProps}
            onTap={() => {
              promiseRef.current.resolve();
              ref.current?.setVisible(false);
            }}
          >
            {okText}
          </Button>
        </Space>
      </Space>
    </Sheet>
  );
};

AffirmSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  return data[page](options);
};

export default AffirmSheet;
