import { View } from 'remax/one';
import React from 'react';
import styles from './index.module.less';
import Input, { Props as InputProps } from '../re-input';
import { useEffectState } from 'parsec-hooks';
import Icon from '../icon';
import classNames from 'classnames';

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
}

export default ({
  showBtn,
  value,
  onChange,
  style,
  btnCls,
  iconColor = '#999999',
  ...props
}: Props) => {
  const [value2, setValue] = useEffectState(value);
  const handleChange = (e?: string) => {
    setValue(e);
    onChange?.(e);
  };
  return (
    <View className={styles.wrap} style={style}>
      <View className={styles.inputWrap}>
        <Icon className={styles.icon} color={iconColor} name={'kq-search'} />
        <Input
          className={styles.input}
          placeholderStyle={{ color: '#999999' }}
          onChange={handleChange}
          value={value2}
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
        >
          搜索
        </View>
      )}
    </View>
  );
};
