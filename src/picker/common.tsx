import { PickerData, PickerPropsType } from 'antd-mobile/lib/picker/PropsType';
import { PickerProps } from '@remax/wechat/esm/hostComponents/Picker';
import React from 'react';
import { useControllableValue } from 'ahooks';

export interface Props
  extends Omit<PickerPropsType, 'data'>,
    Pick<PickerProps, 'mode' | 'start' | 'end'> {
  data?: PickerData[] | PickerData[][];
  /**
   * 传入方法可以自定义渲染
   */
  children?: React.ReactNode | ((result: any) => React.ReactNode);
  /**
   * 是否根据value渲染children
   */
  renderValue?: boolean;
  /**
   * 包裹children的类名
   */
  childrenCls?: string;
}

const dataFlat = (data: PickerData[] | PickerData[][]): PickerData[] =>
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
      .filter(({ value: v }: any) => value === v || value?.includes?.(v))
      .map((data: any) => data.label)
      .join('-') || value;
  const result = renderValue ? render || children : children;
  return children instanceof Function
    ? children(render)
    : React.isValidElement(children)
    ? React.cloneElement(children, {
        ...children.props,
        children: result,
        style: {
          ...style,
          ...children.props?.style,
        },
      })
    : result;
};

export const useProps = (props: Props) => {
  const [value, onChange] = useControllableValue<Props['value']>(props);
  const { data = [], cols = 1, title = '选择', renderValue = true } = props;
  const newProps = {
    ...props,
    renderValue,
    cols,
    title,
    data,
    value,
    onChange,
  };
  return {
    ...newProps,
    style: undefined,
    children: getChildren(newProps),
  };
};
