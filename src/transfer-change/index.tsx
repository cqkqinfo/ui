import React from 'react';
import moment from 'moment';
import getAddress from '../get-address';
import getAddressId from '../get-address-id';

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
  mode?: 'array' | 'date' | 'time' | 'JSON' | 'city';
  dateFormat?: string;
}) => {
  if (value !== undefined) {
    if (mode === 'array') {
      value = [value];
    } else if (mode === 'date') {
      value = value && moment(value, dateFormat);
    } else if (mode === 'time') {
      value = value && moment(value, 'HH:mm');
    } else if (mode === 'JSON') {
      value = JSON.parse(value || '{}');
    } else if (mode === 'city') {
      value = getAddressId(value);
    }
  }
  return mode && React.isValidElement(children)
    ? React.cloneElement(children, {
        ...children.props,
        onChange: (...arg: any[]) => {
          let [value] = arg;
          if (value === undefined) {
            return onChange(value);
          }
          if (mode === 'array') {
            value = value[0];
          } else if (mode === 'date') {
            value = value && moment(value).format(dateFormat);
          } else if (mode === 'time') {
            value = value && moment(value).format('HH:mm');
          } else if (mode === 'JSON') {
            value = Object.keys(value).length
              ? JSON.stringify(value)
              : undefined;
          } else if (mode === 'city') {
            value = getAddress(value);
          }
          onChange(value);
          children.props.onChange?.(...arg);
        },
        value,
      })
    : children instanceof Function && children(onChange, value);
};
