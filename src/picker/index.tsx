import { Picker, DatePicker } from 'antd-mobile';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
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

  /** 单独处理非时间的picker，组装picker的value数据 */
  const tranformedPickValue = useMemo(() => {
    return ['string', 'number'].includes(typeof value) ? [value] : value;
  }, [value]) as (string | number)[] | undefined;

  /** 单独处理时间的picker，组装时间picker */
  const tranformedDateValue = useMemo(() => {
    if (!value) {
      return void 0;
    }
    if (mode === 'date' && typeof value === 'string') {
      return dayjs(value).toDate();
    }
    if (mode === 'time' && typeof value === 'string') {
      return dayjs(dayjs().format(`YYYY-MM-DD ${value}`)).toDate();
    }
    console.error('时间类型不正确');
    return void 0;
  }, [value, mode]);

  return mode === 'selector' ? (
    <Picker
      data={data}
      cols={cols}
      value={tranformedPickValue}
      onChange={e => {
        onChange(cols === 1 ? e?.[0] : e);
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
      value={tranformedDateValue}
      onChange={e => {
        onChange(dayjs(e).format(mode === 'date' ? 'YYYY-MM-DD' : 'HH:mm'));
      }}
      {...(other as any)}
    >
      <div className={childrenCls}>{children}</div>
    </DatePicker>
  );
};
