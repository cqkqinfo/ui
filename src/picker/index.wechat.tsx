import { Picker } from 'remax/wechat';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Props, useProps } from './common';
import { View } from 'remax/one';
import dayjs from 'dayjs';

const dateTimeData = new Array(1).fill(0).map((_, i) => {
  const y = dayjs()
    .add(i, 'y')
    .year();
  return {
    value: y,
    label: y + '年',
    children: new Array(12 - dayjs().get('month')).fill(0).map((_, i) => {
      const m = i + 1 + dayjs().get('month');
      return {
        label: m + '月',
        children: new Array(
          dayjs(`${y}-${m}`)
            .endOf('month')
            .date(),
        )
          .fill(0)
          .map((_, i) => {
            const d = i + 1;
            return {
              label: d + '日',
              children: new Array(24).fill(0).map((_, i) => {
                const h = i + 1;
                return {
                  label: (h < 10 ? '0' + h : h) + '时',
                  children: new Array(60).fill(0).map((_, i) => {
                    return {
                      label: (i < 10 ? '0' + i : i) + '分',
                    };
                  }),
                };
              }),
            };
          }),
      };
    }),
  };
});

export default (props: Props) => {
  const {
    data = useMemo(() => [], []),
    value,
    onChange,
    children,
    cols,
    start,
    end,
    childrenCls,
    mode = 'multiSelector',
    ...newProps
  } = useProps(props);
  const getData = useCallback(
    (data: PickerData[] | PickerData[][], index: number) =>
      data.flat()[index]?.children || [],
    [],
  );
  const [columnIndex, setColumnIndex] = useState<number[]>([]);
  const isDatetime = mode === 'datetime';
  useEffect(() => {
    const numbers: number[] = [];
    /** 默认值 */
    if (!value) {
      setColumnIndex(new Array(cols).fill(0));
      return;
    }
    if (isDatetime) {
      let newValue: any = value;
      newValue = newValue
        .split(/-|\s|:/)
        .map(
          (str: any, i: any) =>
            `${str}${['年', '月', '日', '时', '分', '分'][i]}`,
        );
      newValue.forEach((v: any, i: any) => {
        numbers[i] = rangeRef.current[i].findIndex((value: any) => v === value);
      });
    } else if (cols === 1 && ['string', 'number'].includes(typeof value)) {
      numbers[0] = rangeRef.current[0]
        .flat()
        .findIndex(({ value: v }: any) => v === value);
    } else if (Array.isArray(value)) {
      new Array(cols).fill(0).forEach((_, index) => {
        numbers[index] = value?.[index]
          ? rangeRef.current[index]
              .flat()
              .findIndex(({ value: v }: any) => value?.[index] === v)
          : 0;
      });
    }

    setColumnIndex(numbers);
  }, [cols, isDatetime, value]);

  const isDateOrTimeMode = useMemo(() => {
    return ['date', 'time'].includes(mode);
  }, [mode]);
  const [, mIndex = 0, dIndex = 0, hIndex = 0] = columnIndex;
  const minuteData = useMemo(() => {
    if (!isDatetime) return [];
    const y = dateTimeData[0].label;
    const m = dateTimeData[0].children.map(({ label }) => label);
    const d = dateTimeData[0].children[mIndex].children
      .filter(
        (_, i) =>
          m[mIndex] !== dayjs().get('month') + 1 + '月' ||
          i + 1 >= dayjs().get('date'),
      )
      .map(({ label }) => label);
    const h = dateTimeData[0].children[0].children[0].children
      .filter(
        (_, i) =>
          d[dIndex] !== dayjs().get('date') + '日' || i + 1 >= dayjs().get('h'),
      )
      .map(({ label }) => label);
    const mm = dateTimeData[0].children[0].children[0].children[0].children
      .filter(
        (_, i) =>
          h[hIndex] !== dayjs().get('hour') + '时' ||
          i + 1 >= dayjs().get('minute'),
      )
      .map(({ label }) => label);
    return [[y], m, d, h, mm];
  }, [dIndex, hIndex, isDatetime, mIndex]);
  const range = useMemo(() => {
    const range: (PickerData[] | PickerData[][])[] = [];
    new Array(cols).fill(0).forEach((_, index) => {
      range.push(
        index === 0 ? data : getData(range[index - 1], columnIndex[index - 1]),
      );
    });
    return isDatetime ? minuteData : range;
  }, [cols, columnIndex, data, getData, isDatetime, minuteData]);
  const rangeRef = useRef(range);
  rangeRef.current = range;

  return (
    <Picker
      {...newProps}
      range-key={isDatetime ? undefined : 'label'}
      mode={isDatetime ? 'multiSelector' : (mode as any)}
      start={start}
      end={end}
      range={isDatetime ? minuteData : range}
      value={!isDateOrTimeMode ? columnIndex : value}
      onColumnChange={({ detail: { column, value } }) => {
        columnIndex[column] = value;
        console.log(column, value);
        setColumnIndex([...columnIndex]);
      }}
      onChange={({ detail: { value } }) => {
        if (isDatetime) {
          onChange?.(
            dayjs(
              value
                .map((item: any, i: number) => {
                  const str = minuteData[i][item];
                  if (str.includes('日')) {
                    return str.replace('日', ' ');
                  }
                  return (
                    str.replace(/\W$/, '') +
                    (i < value.length - 1
                      ? i < value.length - 2
                        ? '-'
                        : ':'
                      : '')
                  );
                })
                .join(''),
              'YYYY-M-D HH:mm',
            ).format('YYYY-MM-DD HH:mm'),
          );
        } else if (value && !isDateOrTimeMode) {
          const newValues: any[] = [];
          new Array(cols).fill(0).forEach((_, index) => {
            newValues.push(
              (range as any)[index][value[index]]?.value || columnIndex[index],
            );
          });
          onChange?.(cols === 1 ? newValues?.[0] : newValues);
        } else {
          onChange?.(value);
        }
      }}
      children={<View className={childrenCls}>{children}</View>}
    />
  );
};
