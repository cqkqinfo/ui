import * as React from 'react';
import { View, ViewProps } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import Space, { Props as SpaceProps } from '../space';
import styles from './index.module.less';
import { useEffectState } from 'parsec-hooks';
type CheckboxValue = string | number;
export interface CheckBoxProps extends ViewProps {
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
   * checkbox内容
   * @default label
   */
  children?: React.ReactNode;
  /**
   * onchange方法
   */
  onChange?: (checked: boolean, e?: any, v?: CheckboxValue) => void;
  /**
   * 选中时的勾选icon颜色
   */
  iconColor?: string;
  /**
   * 是否是圆型的
   */
  isRound?: boolean;
  /**
   * 选中的类名
   */
  activeCls?: boolean;
  /**
   * 类名
   */
  className?: string;
  /**
   * box的类名
   */
  boxCls?: string;
  /**
   * type样式
   */
  type?: 'normal' | 'button';
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
}

const Checkbox = (props: CheckBoxProps) => {
  const {
    disabled,
    children,
    checked,
    value,
    activeCls,
    iconColor = '#ffffff',
    onChange,
    className,
    boxCls,
    isRound = false,
    type = 'normal',
    ...other
  } = props;
  const [myChecked, setMyChecked] = useEffectState(checked);

  const handleClick = (e: any) => {
    if (disabled) {
      return;
    }
    onChange?.(!myChecked, e, value);
    setMyChecked(!myChecked);
  };

  return (
    <View
      className={classNames(
        styles.checkBox,
        type === 'normal' && styles.annaCheckBox,
        type === 'button' && styles.btn,
        myChecked && type === 'button' && styles.activebtn,
        myChecked && activeCls,
        className,
      )}
      onTap={handleClick}
      {...other}
    >
      {type === 'normal' && (
        <View
          className={classNames(
            styles.box,
            boxCls,
            isRound && styles.round,
            myChecked && styles.active,
          )}
        >
          {myChecked && <Icon name="kq-yes" color={iconColor} />}
        </View>
      )}
      {children}
    </View>
  );
};

const getCheckboxs = (
  children: React.ReactNode,
  value: CheckboxValue[] = [],
  disabled?: boolean,
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
  return React.Children.map(children, (checkbox: any) => {
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
        disabled,
        onChange: onGroupChange,
      },
    };
  });
};
export interface GroupProps extends SpaceProps {
  value?: CheckboxValue[];
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: (v?: CheckboxValue[]) => void;
}
Checkbox.Group = (props: GroupProps) => {
  const { value = [], children, disabled = false, onChange, ...other } = props;
  return (
    <Space flexWrap={'wrap'} {...other} className={disabled && styles.disabled}>
      {getCheckboxs(children, value, disabled, onChange)}
    </Space>
  );
};

export default Checkbox;
