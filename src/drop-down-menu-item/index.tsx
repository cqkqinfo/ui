/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import Icon from '../icon';
import Fold from '../fold';

export interface DropDownMenuIremProps {
  /**
   * 外层样式
   */
  className?: string;
  /**
   * 子项目样式
   */
  itemCls?: string;
  /**
   * 子项目选中样式
   */
  itemSelectCls?: string;
  /** 当前所选值 */
  value?: any;
  /** 显示的标题 */
  title?: string;
  /** 所有选项*/
  options?: {
    text: string;
    value: any;
  }[];
  children?: React.ReactNode;
  /** 如果传递option值，发生变化会获得value值 */
  onChange?: (
    val: any,
    item: {
      text: string;
      value: any;
    },
  ) => void;
  /**
   * 箭头的类名
   */
  arrowsCls?: string;
  /**
   * 箭头的颜色
   */
  arrowsColor?: string;
}

export default (props: DropDownMenuIremProps) => {
  const {
    options,
    onToggle,
    showOptions,
    title,
    value,
    arrowsCls,
    arrowsColor = '#bbb',
    onChange,
    children,
  } = props as DropDownMenuIremProps & {
    /**内部传参 */
    onToggle?: () => void;
    /**内部传参 */
    showOptions?: boolean;
  };

  const selectItem = useMemo(() => {
    return options?.find(item => item.value === value);
  }, [options, value]);

  return (
    <View
      className={classNames(
        styles.downItem,
        styles.flexCenter,
        props.className,
      )}
      onTap={() => {
        onToggle?.();
      }}
    >
      <View className={styles.flexCenter}>
        {selectItem?.text || title}
        <Icon
          name={'kq-down'}
          color={arrowsColor}
          className={classNames(
            styles.icon,
            { [styles.rotate]: showOptions },
            arrowsCls,
          )}
        />
      </View>
      <Fold folded={!showOptions} className={styles.down} maxHeight={'100vh'}>
        {options?.map(item => {
          return (
            <View
              key={item.value}
              onTap={() => {
                onChange?.(item.value, item);
              }}
              className={classNames(
                styles.downSelect,
                styles.flexCenter,
                props.itemCls,
                classNames(props.itemSelectCls, styles.select) &&
                  item.value === value,
              )}
            >
              {item.text}
            </View>
          );
        })}
        {children}
      </Fold>
    </View>
  );
};
