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

export default (props: Props) => {
  const {
    data = useMemo(() => [], []),
    value,
    onChange,
    children,
    cols,
    start,
    end,
    mode = 'multiSelector',
  } = useProps(props);
  const getData = useCallback(
    (data: PickerData[] | PickerData[][], index: number) =>
      data.flat()[index]?.children || [],
    [],
  );
  const [columnIndex, setColumnIndex] = useState<number[]>([]);
  const range = useMemo(() => {
    const range: (PickerData[] | PickerData[][])[] = [];
    new Array(cols).fill(0).forEach((_, index) => {
      range.push(
        index === 0 ? data : getData(range[index - 1], columnIndex[index - 1]),
      );
    });
    return range;
  }, [cols, columnIndex, data, getData]);
  const rangeRef = useRef(range);
  rangeRef.current = range;

  useEffect(() => {
    const numbers: number[] = [];
    /** 默认值 */
    if (!value) {
      setColumnIndex(new Array(cols).fill(0));
      return;
    }
    if (cols === 1 && ['string', 'number'].includes(typeof value)) {
      numbers[0] = rangeRef.current[0]
        .flat()
        .findIndex(({ value: v }) => v === value);
    } else if (Array.isArray(value)) {
      new Array(cols).fill(0).forEach((_, index) => {
        numbers[index] = value?.[index]
          ? rangeRef.current[index]
              .flat()
              .findIndex(({ value: v }) => value?.[index] === v)
          : 0;
      });
    }

    setColumnIndex(numbers);
  }, [cols, value]);

  const isDateOrTimeMode = useMemo(() => {
    return ['date', 'time'].includes(mode);
  }, [mode]);

  return (
    <Picker
      range-key={'label'}
      mode={mode}
      start={start}
      end={end}
      range={range}
      value={!isDateOrTimeMode ? columnIndex : value}
      onColumnChange={({ detail: { column, value } }) => {
        columnIndex[column] = value;
        setColumnIndex([...columnIndex]);
      }}
      onChange={({ detail: { value } }) => {
        if (value && !isDateOrTimeMode) {
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
      children={children}
    />
  );
};
