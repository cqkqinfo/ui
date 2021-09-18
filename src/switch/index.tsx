import React, { useState, useMemo } from 'react';
import { View } from 'remax/one';
import cls from 'classnames';
import styles from './index.module.less';

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

  const handleChecked = () => {
    if (disabled) {
      return;
    }
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
      className={cls(styles.wrap, className, {
        [styles.checked]: showChecked,
        [styles.unchecked]: !showChecked,
      })}
    >
      <View
        className={cls(styles.circle, circleCls, {
          [styles.circleSelect]: showChecked,
          [styles.circleUnselect]: !showChecked,
        })}
      />
    </View>
  );
};
