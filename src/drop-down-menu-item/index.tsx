/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import Icon from '../icon';
import Fold from '../fold';
import Rotate from '../rotate';
import Space from '../space';
import { IconNames } from '../icon/web';
import rpxToPx from '../rpx-to-px';

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
  icon?: IconNames;
  /**
   * 箭头的类名
   */
  arrowsCls?: string;
  /**
   * 箭头的颜色
   */
  arrowsColor?: string;
  arrowsSize?: number;
  /**
   * 自定义点击事件，如果返回false，不响应展开折叠
   */
  onTap?: () => boolean | void;
  /**
   * 标题类名
   */
  titleCls?: string;
}

export default (props: DropDownMenuIremProps) => {
  const {
    options,
    onToggle,
    showOptions,
    title,
    value,
    icon,
    arrowsCls,
    arrowsColor = '#bbb',
    arrowsSize = rpxToPx(28),
    onTap,
    onChange,
    titleCls,
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
    <>
      <Fold folded={!showOptions} className={styles.down} maxHeight={'50vh'}>
        <Space vertical style={{ width: '100%' }}>
          {options?.map(item => {
            return (
              <View
                key={item.value}
                onTap={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  onToggle?.(-1);
                  onChange?.(item.value, item);
                }}
                className={classNames(
                  styles.downSelect,
                  styles.flexCenter,
                  props.itemCls,
                  item.value === value &&
                    classNames(props.itemSelectCls, styles.select),
                )}
              >
                {item.text}
              </View>
            );
          })}
        </Space>
        {children}
      </Fold>
      <View
        className={classNames(
          styles.downItem,
          styles.flexCenter,
          props.className,
        )}
        onTap={() => {
          if (onTap) {
            // 如果返回false，不响应展开折叠
            if (onTap() !== false) {
              onToggle?.();
            }
          } else {
            onToggle?.();
          }
        }}
      >
        <Space size={10} className={classNames(styles.flexCenter, titleCls)}>
          {selectItem?.text || title}
          <Rotate run={showOptions} angle={180}>
            <Icon
              size={arrowsSize}
              name={icon || 'kq-down'}
              color={arrowsColor}
              className={classNames(styles.icon, arrowsCls)}
            />
          </Rotate>
        </Space>
      </View>
    </>
  );
};
