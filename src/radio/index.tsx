import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import { Property } from 'csstype';
import { useEffectState } from 'parsec-hooks';
import { useConfig } from '../config-provider';

export interface RadioProps {
  /**
   * radio内容
   * @default label
   */
  children?: React.ReactNode;
  /**
   * 当前是否选中
   */
  checked?: boolean;
  /**
   * radio值
   * @default value
   */
  value?: string | number;
  /**
   * radio框style
   */
  style?: React.CSSProperties;
  /**
   * onchange方法
   */
  onChange?: (checked: boolean, v?: string | number) => void;
  /**
   * 文字颜色
   */
  color?: string;
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
   * type样式
   */
  type?: 'normal' | 'button';
  /**
   * 类名
   */
  className?: string;
  /**
   * 选择的类名
   */
  activeCls?: string;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
}

const Radio = (props: RadioProps) => {
  const { brandPrimary } = useConfig();
  const {
    disabled,
    children,
    checked,
    value,
    activeBackgroundColor = brandPrimary,
    backgroundColor = '#eeeeee',
    color = '#000',
    activeColor = '#fff',
    style,
    onChange,
    className,
    activeCls,
    type = 'normal',
  } = props;
  const [myChecked, setMyChecked] = useEffectState(checked);
  return (
    <View
      className={classNames(
        className,
        styles.container,
        type === 'normal' && styles.radio,
        type === 'button' && styles.btn,
        myChecked &&
          classNames(activeCls, type === 'button' && styles.btnActive),
        disabled && styles.disabled,
      )}
      style={{
        background:
          type !== 'button'
            ? 'none'
            : myChecked
            ? activeBackgroundColor
            : backgroundColor,
        color: type !== 'button' ? 'none' : myChecked ? activeColor : color,
        ...style,
      }}
      onTap={e => {
        if (!disabled) {
          setMyChecked(!myChecked);
          onChange?.(!myChecked, !myChecked ? value : undefined);
        }
      }}
    >
      {type === 'normal' && (
        <View
          className={classNames(styles.dot, myChecked && styles.dotCheck)}
          style={{
            borderColor: myChecked ? activeBackgroundColor : '#eee',
            borderWidth: myChecked ? undefined : 1,
            background: activeColor,
          }}
        />
      )}
      {children}
    </View>
  );
};

export interface GroupProps {
  value?: string | number;
  children?: React.ReactNode;
  direction?: Property.FlexDirection;
  onChange?: (v: string | number) => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const getRadios = (
  children: React.ReactNode,
  value?: string | number,
  disabled?: boolean,
  onChange?: (v: string | number) => void,
) => {
  const onGroupChange = (checked: boolean, v: string | number) => {
    if (disabled) {
      return;
    }
    onChange?.(v);
  };
  return React.Children.map(children, radio => {
    const newRadio = radio;

    let checked = false;
    if (newRadio && React.isValidElement(newRadio) && newRadio.props) {
      checked =
        (newRadio.props.value ||
          newRadio.props.value === 0 ||
          newRadio.props.value === false) &&
        newRadio.props.value === value;
      return React.cloneElement(newRadio, {
        checked,
        disabled,
        onChange: onGroupChange,
      });
    }
    return newRadio;
  });
};

Radio.Group = (props: GroupProps) => {
  const {
    value,
    children,
    direction,
    onChange,
    disabled = false,
    style,
    className,
  } = props;
  const [v, setV] = useEffectState(value);

  const radios = getRadios(children, v, disabled, (...arg) => {
    setV(arg[0]);
    onChange?.(...arg);
  });

  return (
    <View
      style={{
        flexDirection: direction,
        ...style,
      }}
      className={classNames(
        className,
        styles.group,
        disabled && styles.disabled,
      )}
    >
      {radios}
    </View>
  );
};

export default Radio;
