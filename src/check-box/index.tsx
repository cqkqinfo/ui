import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import styles from './index.less';
type CheckboxValue = string | number;
export interface CheckBoxProps {
  /**
   * checkbox禁止
   * @default false
   */
  disabled?: boolean;
  /**
   * 当前是否选中
   */
  checked?: boolean;
  /**
   * 值
   * @default value
   */
  value?: CheckboxValue;
  /**
   * 最右侧可以再扩展一些内容
   */
  extra?: React.ReactNode;
  /**
   * checkbox框style
   */
  style?: React.CSSProperties;
  /**
   * checkbox内容
   * @default label
   */
  children?: React.ReactNode;
  /**
   * onchange方法
   */
  onChange?: (checked: any, e?: any, v?: CheckboxValue) => void;
  /**
   * 默认的文字颜色
   */
  color?: string;
  /**
   * 选中时的勾选icon颜色
   */
  iconColor?: string;
  /**
   * 默认背景色
   */
  backgroundColor?: string;
  /**
   * 选中的文字颜色
   */
  activeColor?: string;
  /**
   * 选中的背景颜色
   */
  activeBackgroundColor?: string;
  /**
  /**
   * 是否是圆型的
   */
  isRound?: boolean;
  /**
   * type样式
   */
  type?: 'normal' | 'button';
}

const Checkbox = (props: CheckBoxProps) => {
  const {
    disabled,
    children,
    checked,
    value,
    extra,
    style,
    color = '#000',
    iconColor = '#ffffff',
    activeBackgroundColor = '#277fd9',
    backgroundColor = '#eeeeee',
    activeColor = '#fff',
    onChange,
    isRound = false,
    type = 'normal',
  } = props;

  const handleClick = (e: any) => {
    !disabled && onChange?.(!checked, e, value);
  };

  return (
    <View
      className={classNames(
        styles.annaCheckBoxContainer,
        {
          [styles.annaCheckBox]: type === 'normal',
          [styles.btn]: type === 'button',
        },
        disabled && styles.disabled,
      )}
      style={{
        background:
          type !== 'button'
            ? 'none'
            : checked
            ? activeBackgroundColor
            : backgroundColor,
        color: type !== 'button' ? 'none' : checked ? activeColor : color,
        ...style,
      }}
      onTap={handleClick}
    >
      {type === 'normal' && (
        <View
          className={classNames(styles.checkbox, { [styles.round]: isRound })}
          style={{
            background: checked ? activeBackgroundColor : '#e2e2e2',
          }}
        >
          {checked && <Icon name="kq-yes" color={iconColor} />}
        </View>
      )}
      {children ? (
        <View className={classNames(styles.annaCheckBoxContainerChildren)}>
          {children}
        </View>
      ) : null}
      <View className={styles.annaCheckBoxExtra}>{extra}</View>
    </View>
  );
};

const getCheckboxs = (
  children: React.ReactNode,
  disabled?: boolean,
  value: CheckboxValue[] = [],
  onChange?: (v?: CheckboxValue[], e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: CheckboxValue) => {
    const val = value || [];
    const newVal = val?.includes(v)
      ? val?.filter(i => i !== v)
      : val?.concat(v);
    const newValue =
      !Array.isArray(newVal) || newVal.length === 0 ? [] : newVal;
    !disabled && onChange?.(newValue, e);
  };
  const checkboxs = React.Children.map(children, (checkbox: any) => {
    const p = checkbox?.props || {};
    let checked = p.checked;
    if (
      (p.value || p.value === 0) &&
      (value as CheckboxValue[])?.includes?.(p.value)
    ) {
      checked = !checked;
    }
    return {
      ...checkbox,
      props: {
        ...checkbox.props,
        checked,
        onChange: onGroupChange,
      },
    };
  });

  return checkboxs;
};
export interface GroupProps {
  disabled?: boolean;
  value: any;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (v?: CheckboxValue[]) => void;
}
Checkbox.Group = (props: GroupProps) => {
  const {
    value = [],
    children,
    disabled = false,
    direction = 'row',
    onChange,
  } = props;

  const checkboxs = getCheckboxs(children, disabled, value, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: direction,
        } as React.CSSProperties
      }
      className={disabled && styles.disabled}
    >
      {checkboxs}
    </View>
  );
};

export default Checkbox;
