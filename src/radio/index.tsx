import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';

export interface RadioProps {
  children?: React.ReactNode;
  checked?: boolean;
  value?: string;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (checked: boolean, e?: any, v?: string) => void;
}

const Radio = (props: RadioProps) => {
  const { children, checked, value, extra, style, onChange } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={styles.annaRadio} style={style}>
      <View className={styles.annaRadioContainer} onTap={handleClick}>
        {checked ? (
          <View className={styles.annaRadioContainerChecked}></View>
        ) : (
          <View className={styles.annaRadioContainerNotChecked} />
        )}
        <View className={classNames(styles.annaRadioContainerChildren)}>
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
