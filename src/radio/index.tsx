import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';

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
  onChange?: (checked: boolean, e?: any, v?: string | number) => void;
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
}

const Radio = (props: RadioProps) => {
  const {
    children,
    checked,
    value,
    activeBackgroundColor = '#277fd9',
    backgroundColor = '#eeeeee',
    color = '#000',
    activeColor = '#fff',
    style,
    onChange,
    className,
    activeCls,
    type = 'normal',
  } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View
      className={classNames(
        className,
        styles.container,
        {
          [styles.radio]: type === 'normal',
          [styles.btn]: type === 'button',
        },
        checked && classNames(activeCls, type === 'button' && styles.btnActive),
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
          className={classNames(styles.dot, {
            [styles.dotCheck]: checked,
          })}
          style={{
            borderColor: checked ? activeBackgroundColor : 'transparent',
            background: activeColor,
          }}
        />
      )}
      {children}
    </View>
  );
};

export interface GroupProps {
  value?: any;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (e: any, v: any) => void;
  style?: React.CSSProperties;
}

const getRadios = (
  children: React.ReactNode,
  value?: string,
  onChange?: (v: string, e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: string) => {
    const newValue = v;
    onChange?.(newValue as string, e);
  };
  const radios = React.Children.map(children, (radio: any) => {
    const newRadio = radio;
    let checked = false;
    if (newRadio && newRadio.props) {
      if (
        (newRadio.props.value ||
          newRadio.props.value === 0 ||
          newRadio.props.value === false) &&
        newRadio.props.value === value
      ) {
        checked = true;
      } else {
        checked = false;
      }
      return (
        <Radio {...newRadio.props} checked={checked} onChange={onGroupChange} />
      );
    }
    return newRadio;
  });

  return radios;
};

Radio.Group = (props: GroupProps) => {
  const { value, children, direction = 'row', onChange, style } = props;

  const radios = getRadios(children, value, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: direction,
          ...style,
        } as React.CSSProperties
      }
    >
      {radios}
    </View>
  );
};

export default Radio;
