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
   * radio最右侧可以再扩展一些内容
   */
  extra?: React.ReactNode;
  /**
   * radio框style
   */
  style?: React.CSSProperties;
  /**
   * onchange方法
   */
  onChange?: (checked: boolean, e?: any, v?: string | number) => void;
  /**
   * radio选中时的背景色
   */
  color?: string;
  /**
   * 默认背景色
   */
  defaultColor?: string;
  /**
   * 选中时的前景色
   */
  fontColor?: string;
  /**
   * 默认前景色
   */
  defaultFontColor?: string;
  /**
   * type样式
   */
  type?: 'normal' | 'button';
}

const Radio = (props: RadioProps) => {
  const {
    children,
    checked,
    value,
    extra,
    color = '#277fd9',
    defaultColor = '#eeeeee',
    fontColor = 'inherit',
    defaultFontColor = '#000',
    style,
    onChange,
    type = 'normal',
  } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View
      className={classNames({
        [styles.annaRadio]: type === 'normal',
        [styles.annaRadioBtn]: type === 'button',
      })}
      style={{
        background: type !== 'button' ? 'none' : checked ? color : defaultColor,
        ...style,
      }}
      onTap={handleClick}
    >
      <View className={styles.annaRadioContainer}>
        {type === 'normal' && (
          <View
            className={classNames(styles.annaRadioContainerRadio, {
              [styles.annaRadioContainerRadioCheck]: checked,
            })}
            style={{
              borderColor: checked ? color : 'transparent',
              background: defaultColor,
            }}
          />
        )}
        <View
          className={classNames(styles.annaRadioContainerChildren, {
            [styles.annaRadioContainerChildrenChecked]:
              type === 'button' && checked,
          })}
          style={{
            color: checked ? fontColor : defaultFontColor,
          }}
        >
          {children}
        </View>
      </View>
      <View className={styles.annaRadioExtra}>{extra}</View>
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
