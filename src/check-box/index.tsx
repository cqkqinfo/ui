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
  onGroupChange?: (v: CheckboxValue[], e?: any) => void;
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
}

const Checkbox = (props: CheckBoxProps) => {
  const {
    children,
    checked,
    value,
    activeCls,
    iconColor = '#ffffff',
    onChange,
    className,
    isRound = false,
    ...other
  } = props;
  const [myChecked, setMyChecked] = useEffectState(checked);

  const handleClick = (e: any) => {
    onChange?.(!myChecked, e, value);
    setMyChecked(!myChecked);
  };

  return (
    <View
      className={classNames(styles.checkBox, myChecked && activeCls, className)}
      onTap={handleClick}
      {...other}
    >
      <View
        className={classNames(
          styles.box,
          { [styles.round]: isRound },
          myChecked && styles.active,
        )}
      >
        {myChecked && <Icon name="kq-yes" color={iconColor} />}
      </View>
      {children}
    </View>
  );
};

const getCheckboxs = (
  children: React.ReactNode,
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
    onChange?.(newValue, e);
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
        onChange: onGroupChange,
      },
    };
  });
};
export interface GroupProps extends SpaceProps {
  value?: CheckboxValue[];
  children?: React.ReactNode;
  onChange?: (v?: CheckboxValue[]) => void;
}
Checkbox.Group = (props: GroupProps) => {
  const { value = [], children, onChange, ...other } = props;
  return (
    <Space flexWrap={'wrap'} {...other}>
      {getCheckboxs(children, value, onChange)}
    </Space>
  );
};

export default Checkbox;
