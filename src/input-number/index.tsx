import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, Text, ViewProps } from 'remax/one';
import { useConfig } from '../config-provider';
import cls from 'classnames';
import { Icon, Native } from '@kqinfo/ui';
import styles from './index.module.less';
import { NativeInstance } from '../native';

export interface Props
  extends Pick<
    ViewProps,
    | 'style'
    | 'className'
    | 'onTap'
    | 'onTouchStart'
    | 'onTouchMove'
    | 'onTouchEnd'
    | 'onTouchCancel'
    | 'onLongTap'
  > {
  /**
   * 最小值
   * @default Number.MIN_SAFE_INTEGER
   */
  min?: number;
  /**
   * 最大值
   * @default Number.MAX_SAFE_INTEGER
   *
   */
  max?: number;
  /**
   * 当前值
   */
  value?: number;
  /**
   * 每次改变步数，可以为小数
   * @default 1
   */
  step?: number;
  /**
   * 显示的单位
   * @default 1
   */
  unit?: string;
  /**
   * 初始值
   * @default 0
   */
  defaultValue?: number;
  /**
   * 变化时回调函数
   */
  onChange?: (val: number) => void;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 禁用icon的颜色
   * @default transparent
   */
  disabledColor?: string;
  /**
   * icon的默认颜色
   * @default 主题色
   */
  iconColor?: string;

  /**
   * 格式化样式
   */
  formatValue?: (val: any) => string | number;
  /**
   * 外层样式
   */
  className?: string;
  /**
   * icon的样式
   */
  iconCls?: string;
  /**
   * 数字的样式
   */
  numberCls?: string;
  /**
   * 禁用时数字的样式
   */
  numberDisabledCls?: string;
  /**
   * 自定义增加按钮
   */
  addBtn?: (data: {
    disabled: boolean;
    handleAdd: () => void;
  }) => React.ReactNode;
  /**
   * 自定义减少按钮
   */
  subBtn?: (data: {
    disabled: boolean;
    handleSub: () => void;
  }) => React.ReactNode;
}

export default ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  value,
  disabledColor = 'transparent',
  defaultValue = 0,
  step = 1,
  iconColor,
  className,
  iconCls,
  numberCls,
  numberDisabledCls,
  onChange,
  formatValue = a => a,
  unit,
  disabled,
  addBtn,
  subBtn,
  ...restProps
}: Props) => {
  const { brandPrimary } = useConfig();

  const [showVal, setShowVal] = useState<number>(defaultValue);
  /** 显示的值 */
  const realVal = useMemo(() => (value !== undefined ? value : showVal), [
    value,
    showVal,
  ]);
  /** 是否禁用最大图标点击 */
  const maxDisabled = useMemo(() => {
    return disabled || realVal >= max;
  }, [max, disabled, realVal]);

  /** 是否禁用最小图标点击 */
  const minDisabled = useMemo(() => {
    return disabled || realVal <= min;
  }, [min, disabled, realVal]);

  /** 选中图标颜色 */
  const iconSelectColor = useMemo(() => iconColor || brandPrimary, [
    iconColor,
    brandPrimary,
  ]);

  /** 精度 */
  const precision = useMemo(() => step.toString().split('.')[1]?.length, [
    step,
  ]);

  /** 解决精度问题 如 0.0000000001 */
  const formatResult = (val: number) => {
    return Number(val.toFixed(precision || 0));
  };

  const nativeRef = useRef<NativeInstance>(null);

  const setText = useCallback(
    (value: number) => {
      nativeRef.current?.setData({
        content: formatValue(value.toFixed(precision)),
      });
    },
    [formatValue, precision],
  );

  const handleChange = useCallback(
    (value: number) => {
      setText(value);
      onChange?.(value);
    },
    [onChange, setText],
  );

  const handleAdd = () => {
    if (maxDisabled) {
      return;
    }
    const value = formatResult(realVal + step);
    handleChange(value);
    setShowVal(value);
  };

  const handleSubtract = () => {
    if (minDisabled) {
      return;
    }
    const value = formatResult(realVal - step);
    handleChange(value);
    setShowVal(value);
  };

  const initRef = useRef(true);
  useEffect(() => {
    if (initRef.current && realVal !== undefined && onChange) {
      initRef.current = false;
      handleChange(realVal);
    }
  }, [handleChange, onChange, realVal]);

  return (
    <View className={cls(styles.wrap, className)} {...restProps}>
      {typeof subBtn === 'function' ? (
        subBtn({ disabled: minDisabled, handleSub: handleSubtract })
      ) : (
        <Icon
          name="kq-jianshao"
          onTap={handleSubtract}
          className={cls(styles.icon, iconCls)}
          color={minDisabled ? disabledColor : iconSelectColor}
        />
      )}
      <View
        className={cls(styles.number, numberCls, {
          [numberDisabledCls || '']: minDisabled && maxDisabled,
        })}
      >
        <Native
          ref={nativeRef}
          initData={{ content: formatValue(realVal.toFixed(precision)) }}
        />
        <Text className={styles.unit}>{unit}</Text>
      </View>
      {typeof addBtn === 'function' ? (
        addBtn({ disabled: maxDisabled, handleAdd })
      ) : (
        <Icon
          name="kq-zengjia"
          onTap={handleAdd}
          className={cls(styles.icon, iconCls)}
          color={maxDisabled ? disabledColor : iconSelectColor}
        />
      )}
    </View>
  );
};
