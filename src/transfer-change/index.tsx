import React, { useCallback } from 'react';
import dayjs from 'dayjs';
import getAddress from '../get-address';
import getAddressId from '../get-address-id';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(weekday);
dayjs.extend(localeData);

export default ({
  children,
  onChange = () => {},
  value,
  mode,
  dateFormat = 'YYYY-MM-DD HH:mm:ss',
}: {
  children:
    | ((onChange: (value: any) => void, value: any) => any)
    | React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  /**
   * 内置模式
   */
  mode?: 'array' | 'date' | 'time' | 'JSON' | 'city';
  /**
   * 当mode是date时可以用
   */
  dateFormat?: string;
}) => {
  if (value !== undefined) {
    if (mode === 'array') {
      value = [value];
    } else if (mode === 'date') {
      value = value && dayjs(value, dateFormat);
    } else if (mode === 'time') {
      value = value && dayjs(value, 'HH:mm');
    } else if (mode === 'JSON') {
      value = JSON.parse(value || '{}');
    } else if (mode === 'city') {
      value = getAddressId(value);
    }
  }
  const handleChange = useCallback(
    (...arg: any[]) => {
      let [value] = arg;
      if (value === undefined) {
        return onChange(value);
      }
      if (mode === 'array') {
        value = value[0];
      } else if (mode === 'date') {
        value = value && dayjs(value).format(dateFormat);
      } else if (mode === 'time') {
        value = value && dayjs(value).format('HH:mm');
      } else if (mode === 'JSON') {
        value = Object.keys(value).length ? JSON.stringify(value) : undefined;
      } else if (mode === 'city') {
        value = getAddress(value);
      }
      onChange(value);
      (children as any)?.props?.onChange?.(...arg);
    },
    [children, dateFormat, mode, onChange],
  );
  return mode && React.isValidElement(children)
    ? React.cloneElement(children, {
        ...children.props,
        onChange: handleChange,
        value,
      })
    : children instanceof Function && children(handleChange, value);
};
