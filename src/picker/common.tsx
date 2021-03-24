import { PickerData, PickerPropsType } from 'antd-mobile/lib/picker/PropsType';
import { PickerProps } from '@remax/wechat/esm/hostComponents/Picker';
import React from 'react';
import { useControllableValue } from 'ahooks';

export interface Props
  extends Omit<PickerPropsType, 'data'>,
    Pick<PickerProps, 'mode' | 'start' | 'end'> {
  data?: PickerData[] | PickerData[][];
  children?: React.ReactNode;
  renderValue?: boolean;
}

const dataFlat = (data: PickerData[] | PickerData[][]): PickerData[] =>
  data
    .flat(3)
    .map(item => (item.children ? [...dataFlat(item.children), item] : [item]))
    .flat(3);

export const getChildren = ({
  renderValue,
  data = [],
  value,
  children,
}: Props): React.ReactNode => {
  return renderValue
    ? dataFlat(data)
        .filter(({ value: v }: any) => value === v || value?.includes?.(v))
        .map((data: any) => data.label)
        .join('-') ||
        value ||
        children
    : children;
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
    children: getChildren(newProps),
  };
};
