import React from 'react';
import moment from 'moment';

export default ({
  children,
  onChange = () => {},
  value,
  mode,
}: {
  children:
    | ((onChange: (value: any) => void, value: any) => any)
    | React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  mode?: 'array' | 'date' | 'time' | 'JSON';
}) => {
  if (value !== undefined) {
    if (mode === 'array') {
      value = [value];
    } else if (mode === 'date') {
      value = value && moment(value, 'YYYY-MM-DD HH:mm:ss');
    } else if (mode === 'time') {
      value = value && moment(value, 'HH:mm');
    } else if (mode === 'JSON') {
      value = JSON.parse(value || '{}');
    }
  }
  return mode && React.isValidElement(children)
    ? React.cloneElement(children, {
        ...children.props,
        onChange: (value: any) => {
          if (value === undefined) {
            return onChange(value);
          }
          if (mode === 'array') {
            value = value[0];
          } else if (mode === 'date') {
            value = value && moment(value).format('YYYY-MM-DD HH:mm:ss');
          } else if (mode === 'time') {
            value = value && moment(value).format('HH:mm');
          } else if (mode === 'JSON') {
            value = Object.keys(value).length
              ? JSON.stringify(value)
              : undefined;
          }
          onChange(value);
        },
        value,
      })
    : children instanceof Function && children(onChange, value);
};
