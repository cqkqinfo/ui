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
  const isTimeMode = mode === 'time';

  const timeData = useMemo(() => {
    if (!isTimeMode) return [];
    const [startH, startM] = start?.split(':') || [];
    const [endH, endM] = end?.split(':') || [];
    return new Array(24)
      .fill(0)
      .map((_, i) => {
        const value = i < 10 ? `0${i}` : `${i}`;
        const currentH = +value;
        return {
          label: `${value}时`,
          value,
          children: new Array(60)
            .fill(0)
            .map((_, j) => {
              const value = j < 10 ? `0${j}` : `${j}`;
              return {
                label: `${value}分`,
                value,
              };
            })
            .filter(
              ({ value }) =>
                !start || currentH !== +startH || +startM <= +value,
            )
            .filter(
              ({ value }) => !end || currentH !== +endH || +endM <= +value,
            ),
        };
      })
      .filter(({ value }) => !start || +startH <= +value)
      .filter(({ value }) => !end || +endH >= +value);
  }, [end, isTimeMode, start]);

  return (
    <>
      <div className={childrenCls} onClick={() => setVisible(true)}>
        {children}
      </div>
      {mode === 'selector' || isTimeMode ? (
        <CascadePicker
          options={isTimeMode ? timeData : data}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          value={
            isTimeMode
              ? value && `${value}`.split(':')
              : (tranformedPickValue as any)
          }
          onConfirm={e => {
            if (isTimeMode) {
              onChange(e?.join(':'));
            } else {
              onChange((cols === 1 ? e?.[0] : e) as any);
            }
          }}
          {...other}
        />
      ) : (
        <DatePicker
          precision={
            (mode === 'datetime'
              ? 'minute'
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
