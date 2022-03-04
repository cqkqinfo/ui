import getCurrentPage from '../get-current-page';
import React, { useRef, useState } from 'react';
import { SheetWrap, SheetWrapInstance, SheetWrapData } from '../sheet';
import { View } from 'remax/one';
import styles from './index.module.less';
import Space from '../space';
import classNames from 'classnames';

export interface ShowOptions {
  /**
   * 操作项
   */
  items: { label: React.ReactNode; value: string | number }[];
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 标题类名
   */
  titleCls?: string;
  /**
   * 子项类名
   */
  itemCls?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
}

export const showOptions = ({}: ShowOptions) => {};

const data: SheetWrapData = {};

const ActionSheet = () => {
  const [
    { title, titleCls, itemCls, items, className, style },
    setOptions,
  ] = useState<ShowOptions>({
    items: [],
  });
  const ref = useRef<SheetWrapInstance>(null);
  return (
    <SheetWrap
      ref={ref}
      setOptions={setOptions}
      data={data}
      className={className}
      style={style}
    >
      <Space vertical style={{ width: '100vw' }}>
        {title && (
          <View className={classNames(titleCls, styles.title)}>{title}</View>
        )}
        {items.map(({ label, value }, index) => (
          <React.Fragment key={index}>
            <View
              className={classNames(itemCls, styles.item)}
              onTap={() => {
                ref.current?.sheetRef?.setVisible(false);
                ref.current?.promiseRef.resolve({ label, value });
              }}
            >
              {label}
            </View>
            {index !== items.length - 1 && <View className={styles.line} />}
          </React.Fragment>
        ))}
        <View
          className={styles.cancel}
          onTap={() => {
            ref.current?.sheetRef?.setVisible(false);
            ref.current?.promiseRef.reject();
          }}
        >
          取消
        </View>
      </Space>
    </SheetWrap>
  );
};

ActionSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  if (!data[page]) {
    throw new Error('请在页面添加<ActionSheet/>组件');
  }
  return data[page].fn(options);
};

ActionSheet.hide = () => {
  const page = getCurrentPage();
  return data[page].setVisible?.(false);
};

export default ActionSheet;
