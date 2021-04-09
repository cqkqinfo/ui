import { View } from 'remax/one';
import React from 'react';
import styles from './index.less';
import Input, { Props as InputProps } from '../re-input';
import { useEffectState } from 'parsec-hooks';
import Icon from '../icon';

interface Props extends InputProps {
  /**
   * 显示搜索按钮
   */
  showBtn?: boolean;
}

export default ({ showBtn, value, onChange, style, ...props }: Props) => {
  const [value2, setValue] = useEffectState(value, { wait: 300 });
  return (
    <View className={styles.wrap} style={style}>
      <View className={styles.inputWrap}>
        <Icon className={styles.icon} color={'#999999'} name={'kq-search'} />
        <Input
          className={styles.input}
          placeholderStyle={{ color: '#999999' }}
          onChange={e => {
            setValue(e);
            onChange?.(e);
          }}
          value={value2}
          {...props}
        />
      </View>
      {showBtn && (
        <View className={styles.btn} onTap={() => props.onConfirm?.(value2)}>
          搜索
        </View>
      )}
    </View>
  );
};
