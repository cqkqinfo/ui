import { Picker, DatePicker } from 'antd-mobile';
import dayjs from 'dayjs';
import React from 'react';
import { Props, useProps } from './common';

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
    <Picker
      data={data}
      cols={cols}
      value={value}
      onChange={e => {
        onChange(e);
      }}
      {...other}
    >
      <div className={childrenCls}>{children}</div>
    </Picker>
  ) : (
    <DatePicker
      mode={mode as any}
      minDate={start ? dayjs(start).toDate() : undefined}
      maxDate={end ? dayjs(end).toDate() : undefined}
      value={
        value
          ? dayjs(dayjs().format(`YYYY-MM-DD ${value?.[0]}`)).toDate()
          : undefined
      }
      onChange={e => {
        onChange(
          e
            ? [dayjs(e).format(mode === 'date' ? 'YYYY-MM-DD' : 'HH:mm')]
            : undefined,
        );
      }}
      {...(other as any)}
    >
      <div className={childrenCls}>{children}</div>
    </DatePicker>
  );
};
