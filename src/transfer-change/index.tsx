import React, { useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import getAddress from '../get-address';
import getAddressId from '../get-address-id';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import { useWhyDidYouUpdate } from 'ahooks';

dayjs.extend(weekday);
dayjs.extend(localeData);

export default React.memo(
  ({
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
    mode?: 'array' | 'split' | 'date' | 'time' | 'JSON' | 'city' | 'boolean';
    /**
     * 当mode是date时可以用
     */
    dateFormat?: string;
  }) => {
    if (value !== undefined) {
      if (mode === 'array') {
        value = [value];
      }
      if (mode === 'split') {
        value = value ? value.split(',') : undefined;
      } else if (mode === 'date') {
        value = value && dayjs(value, dateFormat);
      } else if (mode === 'time') {
        value = value && dayjs(value, 'HH:mm');
      } else if (mode === 'JSON') {
        value = JSON.parse(value || '{}');
      } else if (mode === 'city') {
        value = getAddressId(value);
      } else if (mode === 'boolean') {
        value = !!+value;
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
        } else if (mode === 'split') {
          value = value.join(',');
        } else if (mode === 'date') {
          value = value && dayjs(value).format(dateFormat);
        } else if (mode === 'time') {
          value = value && dayjs(value).format('HH:mm');
        } else if (mode === 'JSON') {
          value = Object.keys(value).length ? JSON.stringify(value) : undefined;
        } else if (mode === 'city') {
          value = getAddress(value);
        } else if (mode === 'boolean') {
          value = +value;
        }
        onChange(value);
        (children as any)?.props?.onChange?.(...arg);
      },
      [children, dateFormat, mode, onChange],
    );
    useWhyDidYouUpdate('aaaaa', {
      children,
      handleChange,
      mode,
      value,
    });
    return useMemo(
      () =>
        mode && React.isValidElement(children)
          ? React.cloneElement(children, {
              ...children.props,
              onChange: handleChange,
              value,
            })
          : children instanceof Function && children(handleChange, value),
      [children, handleChange, mode, value],
    );
  },
  (p1, p2) =>
    JSON.stringify(p1.value) === JSON.stringify(p2.value) &&
    p1.children === p2.children,
);
