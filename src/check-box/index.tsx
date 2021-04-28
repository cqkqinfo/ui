import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import styles from './index.less';
type CheckboxValue = string | number;
export interface CheckBoxProps {
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
}

const Checkbox = (props: CheckBoxProps) => {
  const {
    children,
    checked,
    value,
    extra,
    style,
    activeCls,
    iconColor = '#ffffff',
    onChange,
    isRound = false,
  } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={styles.annaCheckBox} style={style}>
      <View
        className={classNames(
          styles.annaCheckBoxContainer,
          checked && activeCls,
        )}
        onTap={handleClick}
      >
        <View
          className={classNames(
            styles.checkbox,
            { [styles.round]: isRound },
            checked && styles.active,
          )}
        >
          {checked && <Icon name="kq-yes" color={iconColor} />}
        </View>
        {children ? (
          <View className={classNames(styles.annaCheckBoxContainerChildren)}>
            {children}
          </View>
        ) : null}
      </View>
      <View className={styles.annaCheckBoxExtra}>{extra}</View>
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
  value: any;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (v?: CheckboxValue[]) => void;
}
Checkbox.Group = (props: GroupProps) => {
  const { value = [], children, direction = 'row', onChange } = props;

  const checkboxs = getCheckboxs(children, value, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: direction,
        } as React.CSSProperties
      }
    >
      {checkboxs}
    </View>
  );
};

export default Checkbox;
