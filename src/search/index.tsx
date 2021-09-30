import { View } from 'remax/one';
import React from 'react';
import styles from './index.module.less';
import Input, { Props as InputProps } from '../re-input';
import { useEffectState } from 'parsec-hooks';
import Icon from '../icon';
import classNames from 'classnames';
import { useConfig } from '../config-provider';

interface Props extends InputProps {
  /**
   * 显示搜索按钮
   */
  showBtn?: boolean;
  /**
   * 搜索按钮类名
   */
  btnCls?: string;
  /**
   * 图标的颜色
   */
  iconColor?: string;
  /**
   * 输入框wrap类名
   */
  inputWrapCls?: string;
  /**
   * 输入框类名
   */
  inputCls?: string;
  /**
   * 适老模式，开启后不同type的按钮文字和尺寸都会变大
   */
  elderly?: boolean;
  /**
   * 搜索按钮样式
   */
  btnStyle?: React.CSSProperties;
  /**
   * 输入框wrap样式
   */
  inputWrapStyle?: React.CSSProperties;
}

export default ({
  showBtn,
  value,
  onChange,
  style,
  btnCls,
  iconColor = '#999999',
  inputWrapStyle,
  inputCls,
  className,
  inputWrapCls,
  elderly = useConfig().elderly,
  btnStyle,
  ...props
}: Props) => {
  const [value2, setValue] = useEffectState(value);
  const handleChange = (e?: string) => {
    setValue(e);
    onChange?.(e);
  };
  return (
    <View
      className={classNames(styles.wrap, className, elderly && styles.elderly)}
      style={style}
    >
      <View
        className={classNames(styles.inputWrap, inputWrapCls)}
        style={inputWrapStyle}
      >
        <Icon className={styles.icon} color={iconColor} name={'kq-search'} />
        <Input
          className={classNames(styles.input, inputCls)}
          placeholderStyle={{ color: '#999999' }}
          onChange={handleChange}
          value={value2}
          confirmType={'search'}
          {...props}
        />
        <View
          onTap={() => {
            handleChange('');
            props.onConfirm?.('');
          }}
          style={{ opacity: value2 ? 1 : 0 }}
          className={styles.clear}
        >
          <Icon name={'kq-clear2'} color={iconColor} />
        </View>
      </View>
      {showBtn && (
        <View
          className={classNames(styles.btn, btnCls)}
          onTap={() => props.onConfirm?.(value2)}
          style={btnStyle}
        >
          搜索
        </View>
      )}
    </View>
  );
};
