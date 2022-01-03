import React, { useState, useMemo, useRef } from 'react';
import { View } from 'remax/one';
import cls from 'classnames';
import styles from './index.module.less';
import Shadow from '../shadow';
import { Native } from '@kqinfo/ui';
import { NativeInstance } from '../native';

interface Props {
  /**
   * 是否选择
   */
  value?: boolean;
  /**
   * 默认是否选择
   */
  defaultValue?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 组件变化回调
   */
  onChange?: (val: boolean) => void;
  /**
   * 背景颜色
   * @default 主题色
   */
  color?: string;
  /**
   * 可以控制整个组件的大小（组件高度为两倍fontSize）
   * @default 25
   */
  fontSize?: number | string;
  /**
   * 外层样式
   */
  className?: boolean;
  /**
   * 圆的样式
   */
  circleCls?: boolean;
  /**
   * 外层样式
   */
  style?: React.CSSProperties;
}

export default ({
  value,
  defaultValue,
  className,
  style = {},
  disabled,
  circleCls,
  fontSize,
  color,
  onChange,
}: Props) => {
  const [checked, setChecked] = useState(defaultValue);

  const showChecked = useMemo(() => (value !== undefined ? value : checked), [
    value,
    checked,
  ]);

  const getCls = (checked?: boolean) =>
    cls(
      styles.circle,
      circleCls,
      checked && styles.circleSelect,
      !checked && styles.circleUnselect,
    );

  const nativeRef = useRef<NativeInstance>(null);

  const handleChecked = () => {
    if (disabled) {
      return;
    }
    nativeRef.current?.setData({ className: getCls(!showChecked) });
    setChecked(!showChecked);
    onChange?.(!showChecked);
  };

  const computedStyle = useMemo(() => {
    const returnStyle = { ...style };
    if (fontSize) {
      returnStyle.fontSize = fontSize;
    }
    if (color) {
      returnStyle.backgroundColor = color;
      returnStyle.borderColor = color;
    }
    return returnStyle;
  }, [style, fontSize, color]);

  return (
    <View
      onTap={handleChecked}
      style={computedStyle}
      className={cls(
        styles.wrap,
        className,
        showChecked && styles.checked,
        !showChecked && styles.unchecked,
      )}
    >
      <Shadow shadowColor={'rgb(0, 0, 0, 0.7)'} shadowRadius={10}>
        <Native ref={nativeRef} initData={{ className: getCls(showChecked) }} />
      </Shadow>
    </View>
  );
};
