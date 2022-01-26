import { CascadePicker, DatePicker } from 'antd-mobile';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { Props, useProps } from './common';
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker/cascade-picker';

export const PickerData = ({}: CascadePickerOption) => {};

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
    return void 0;
  }, [value, mode]);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={childrenCls} onClick={() => setVisible(true)}>
        {children}
      </div>
      {mode === 'selector' ? (
        <CascadePicker
          options={data}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          value={tranformedPickValue as any}
          onConfirm={e => {
            onChange((cols === 1 ? e?.[0] : e) as any);
          }}
          {...other}
        />
      ) : (
        <DatePicker
          precision={
            (mode === 'datetime'
              ? 'minute'
              : mode === 'time'
              ? 'hour'
              : mode === 'date'
              ? 'day'
              : mode) as any
          }
          min={start ? dayjs(start).toDate() : undefined}
          max={end ? dayjs(end).toDate() : undefined}
          value={tranformedDateValue}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          onConfirm={e => {
            onChange(
              dayjs(e).format(
                mode === 'datetime'
                  ? 'YYYY-MM-DD HH:mm'
                  : mode === 'date'
                  ? 'YYYY-MM-DD'
                  : 'HH:mm',
              ),
            );
          }}
        />
      )}
    </>
  );
};
