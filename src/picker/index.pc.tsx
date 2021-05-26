import { Cascader, DatePicker } from 'antd';
import React from 'react';
import { Props, useProps } from './common';
import moment from 'moment';

export default (props: Props) => {
  const {
    children,
    data,
    cols,
    value,
    onChange,
    mode = 'selector',
    start,
    end,
    childrenCls,
    ...other
  } = useProps(props);
  return mode === 'selector' ? (
    <Cascader
      options={data}
      value={value}
      onChange={e => {
        onChange(e);
      }}
      {...other}
    />
  ) : (
    <DatePicker
      picker={mode as any}
      disabledTime={() => {}}
      // minDate={start ? dayjs(start).toDate() : undefined}
      // maxDate={end ? dayjs(end).toDate() : undefined}
      value={value && value?.[0] !== undefined ? moment(value) : value}
      onChange={e => {
        onChange(
          e
            ? [moment(e).format(mode === 'date' ? 'YYYY-MM-DD' : 'HH:mm')]
            : undefined,
        );
      }}
      {...(other as any)}
    >
      <div className={childrenCls}>{children}</div>
    </DatePicker>
  );
};
