import * as React from 'react';
import { View, Image } from 'remax/one';
import classNames from 'classnames';
import Images from './images';
import styles from './index.less';
type CheckboxValue = string | number;
export interface CheckBoxProps {
  checked?: boolean;
  value?: CheckboxValue;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onChange?: (checked: any, e?: any, v?: CheckboxValue) => void;
  onGroupChange?: (v: CheckboxValue[], e?: any) => void;
}

const Checkbox = (props: CheckBoxProps) => {
  const { children, checked, value, extra, style, onChange } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={styles.annaCheckBox}>
      <View className={styles.annaCheckBoxContainer} onTap={handleClick}>
        <Image
          className={styles.pic}
          src={checked ? Images.iconSelect : Images.iconUnSelect}
          mode={'widthFix'}
        />
        {children ? (
          <View className={classNames(styles.annaCheckBoxContainerChildren)}>
            {children}
          </View>
        ) : null}
      </View>
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
