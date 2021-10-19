/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import Icon from '../icon';
import Fold from '../fold';
import Rotate from '../rotate';
import Space from '../space';
import { DropDownMenuIremProps } from './index';

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
    arrowsSize,
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

  const [top, setTop] = useState(0);

  return (
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
      <Fold
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onLayout={e => setTop(e.nativeEvent.layout.top)}
        folded={!showOptions}
        className={styles.down}
        maxHeight={'50vh'}
        style={{ top, position: showOptions ? 'fixed' : undefined }}
      >
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
    </View>
  );
};
