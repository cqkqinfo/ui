import { Picker } from 'antd-mobile';
import React from 'react';
import { Props, useProps } from './common';

export default (props: Props) => {
  const { children, data, cols, value, onChange, ...other } = useProps(props);
  return (
    <Picker
      data={data}
      cols={cols}
      value={value}
      onChange={e => {
        onChange(e);
      }}
      {...other}
      className={'Component-picker'}
    >
      <div className={'Picker-children'}>{children}</div>
    </Picker>
  );
};
