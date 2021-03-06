import { PickerProps } from 'remax/wechat';
import React from 'react';
import { useControllableValue } from 'ahooks';
import 'array-flat-polyfill';
import classNames from 'classnames';
import { PickerProps as AntPickerProps } from 'antd-mobile/es/components/picker';
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker/cascade-picker';

export interface Props
  extends Omit<
      AntPickerProps,
      'value' | 'data' | 'onChange' | 'children' | 'columns'
    >,
    Pick<PickerProps, 'start' | 'end'> {
  /**
   * 1.0.0
   * 选择器类型
   *
   * selector	普通选择器
   * multiSelector	多列选择器
   * time	时间选择器
   * date	日期选择器
   * region	省市区选择器
   * datetime	日期加时分选择
   */
  mode?: 'selector' | 'multiSelector' | 'time' | 'date' | 'region' | 'datetime';
  /**
   * 显示列数
   */
  cols?: number;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 选项数据
   */
  data?: CascadePickerOption[];
  /**
   * 传入方法可以自定义渲染
   */
  children?: React.ReactNode | ((result: any, value?: any) => React.ReactNode);
  /**
   * 是否根据value渲染children
   */
  renderValue?: boolean;
  /**
   * 包裹children的类名
   */
  childrenCls?: string;
  /**
   * value值
   */
  value?: string | number | (string | number)[];
  /**
   * onChange事件
   */
  onChange?: (v?: string | number | (string | number)[]) => void;
}

const dataFlat = (data: CascadePickerOption[]): CascadePickerOption[] =>
  data
    .flat(3)
    .map(item => (item.children ? [item, ...dataFlat(item.children)] : [item]))
    .flat(3);

export const getChildren = ({
  renderValue,
  data = [],
  value,
  style,
  children,
}: Props): React.ReactNode => {
  const render =
    dataFlat(data)
      .filter(
        ({ value: v }: any) =>
          value === v || (Array.isArray(value) && value?.includes?.(v)),
      )
      .map((data: any) => data.label)
      .join('-') || value;
  const result = renderValue ? render || children : children;
  return (
    (children instanceof Function
      ? children(render, value)
      : React.isValidElement(children)
      ? React.cloneElement(children, {
          ...children.props,
          children: result,
          style: {
            ...style,
            ...children.props?.style,
          },
        })
      : result) || '请选择'
  );
};

export const useProps = (props: Props) => {
  const [value, onChange] = useControllableValue<Props['value']>(props);
  const { data, cols = 1, title = '选择', renderValue = true } = props;

  const newProps = {
    ...props,
    renderValue,
    cols,
    title,
    data: data || [],
    value,
    onChange,
  };
  return {
    ...newProps,
    childrenCls: classNames(newProps.childrenCls, 'picker-children'),
    // style: undefined,
    children: getChildren(newProps),
  };
};
