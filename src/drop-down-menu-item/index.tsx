/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { View, Image } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';
import Icon from '../icon';

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
}

export default (props: DropDownMenuIremProps) => {
  const {
    options,
    onToggle,
    showOptions,
    title,
    value,
    onChange,
    children,
  } = props as DropDownMenuIremProps & {
    /**内部传参 */
    onToggle?: () => void;
    /**内部传参 */
    showOptions?: boolean;
  };

  const selectItem = useMemo(() => {
    if (options) {
      return options.find(item => item.value === value) || options[0];
    }
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
        {title || selectItem?.text}
        <Icon
          name={'kq-down'}
          color={'#bbb'}
          className={classNames(styles.icon, { [styles.rotate]: showOptions })}
        />
      </View>
      <View
        className={classNames(styles.down, {
          [styles.hideDown]: !showOptions,
        })}
      >
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
      </View>
    </View>
  );
};
