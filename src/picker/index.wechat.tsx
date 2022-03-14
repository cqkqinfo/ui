import { Picker } from 'remax/wechat';
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker/cascade-picker';
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

export default (props: Props) => {
  const {
    data = useMemo(() => [], []),
    value,
    onChange,
    children,
    start,
    end,
    childrenCls,
    mode = 'multiSelector',
    cols = mode === 'datetime' ? 5 : undefined,
    ...newProps
  } = useProps(props);
  const getData = useCallback(
    (data: CascadePickerOption[] | CascadePickerOption[][], index: number) =>
      data.flat()[index]?.children || [],
    [],
  );
  const [columnIndex, setColumnIndex] = useState<number[]>([]);
  const isDatetime = mode === 'datetime';
  const [
    yIndex = 0,
    mIndex = 0,
    dIndex = 0,
    hIndex = 0,
    mmIndex = 0,
  ] = columnIndex;
  const minuteData = useMemo(() => {
    if (!isDatetime) return [];
    const ys = new Array(dayjs(end).diff(start, 'y') + 1).fill(0).map((_, i) =>
      dayjs(start)
        .add(i, 'y')
        .format('YYYY年'),
    );
    const getArr = (
      parent: string[],
      parentIndex: number,
      unit: dayjs.UnitType,
      cnUnit: string,
      limit: number,
      isStart: boolean,
      isEnd: boolean,
    ) => {
      const startIndex = dayjs(start).get(unit);
      const endIndex = dayjs(end).get(unit);
      const length = isStart
        ? limit - startIndex
        : isEnd
        ? endIndex + 1
        : limit;
      return new Array(
        unit === 'date'
          ? isEnd
            ? length - 1
            : isStart
            ? length + 1
            : length
          : length,
      )
        .fill(0)
        .map((_, i) => {
          let value: any =
            (isStart ? startIndex + i : i) +
            (['hours', 'minutes'].includes(unit) || (unit === 'date' && isStart)
              ? 0
              : 1);
          value = value < 10 ? `0${value}` : value;
          return `${value}${cnUnit}`;
        });
    };
    const isStartY = yIndex === 0;
    const isEndY = yIndex === ys.length - 1;
    const ms = getArr(ys, yIndex, 'months', '月', 12, isStartY, isEndY);
    const isStartM = isStartY && mIndex === 0;
    const isEndM = isEndY && mIndex === ms.length - 1;
    const ds = getArr(
      ms,
      mIndex,
      'date',
      '日',
      dayjs(
        `${ys[yIndex]}${ms[mIndex]}`.replace(/年/, '-').replace(/月/, ''),
        'YYYY-M',
      )
        .endOf('months')
        .date(),
      isStartM,
      isEndM,
    );
    const isStartH = isStartM && dIndex === 0;
    const isEndH = isEndM && dIndex === ds.length - 1;
    const hs = getArr(ds, hIndex, 'hours', '时', 24, isStartH, isEndH);
    const isStartMm = isStartH && hIndex === 0;
    const isEndMm = isEndH && hIndex === hs.length - 1;
    const mms = getArr(ds, mmIndex, 'minutes', '分', 60, isStartMm, isEndMm);
    return [ys, ms, ds, hs, mms];
  }, [dIndex, end, hIndex, isDatetime, mIndex, mmIndex, start, yIndex]);
  const range = useMemo(() => {
    const range: (CascadePickerOption[] | CascadePickerOption[][])[] = [];
    new Array(cols).fill(0).forEach((_, index) => {
      range.push(
        index === 0
          ? data
          : getData(
              range[index - 1],
              columnIndex[index - 1] === -1
                ? range[index - 1]
                    .flat()
                    .findIndex(({ children = [] }) =>
                      children.some(({ value: v }) =>
                        value instanceof Array ? v === value[index] : false,
                      ),
                    )
                : columnIndex[index - 1],
            ),
      );
    });
    return isDatetime ? minuteData : range;
  }, [cols, columnIndex, data, getData, isDatetime, minuteData, value]);
  const rangeRef = useRef(range);
  rangeRef.current = range;
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
          (str: any, i: any) => `${str}${['年', '月', '日', '时', '分'][i]}`,
        );
      newValue.forEach((v: any, i: any) => {
        numbers[i] = rangeRef.current[i]?.findIndex(
          (value: any) => v === value,
        );
        numbers[i] = numbers[i] === -1 ? 0 : numbers[i];
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
  return (
    <Picker
      {...(newProps as any)}
      range-key={isDatetime ? undefined : 'label'}
      mode={isDatetime ? 'multiSelector' : (mode as any)}
      start={start}
      end={end}
      range={range}
      value={!isDateOrTimeMode ? columnIndex : value}
      onColumnChange={({ detail: { column, value } }) => {
        columnIndex[column] = value;
        columnIndex.forEach((_, i) => {
          if (i > column) {
            columnIndex[i] = 0;
          }
        });
        setColumnIndex([...columnIndex]);
      }}
      onChange={({ detail: { value } }) => {
        if (isDatetime) {
          onChange?.(
            dayjs(
              value
                .map((item: any, i: number) => {
                  const str = minuteData[i][item];
                  if (str?.includes('日')) {
                    return str.replace('日', ' ');
                  }
                  return (
                    str?.replace(/\W$/, '') +
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
