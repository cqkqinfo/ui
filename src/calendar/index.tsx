import classNames from 'classnames';
import styles from './index.module.less';
import { View, ViewProps } from 'remax/one';
import dayjs from 'dayjs';
import React, { useCallback, useMemo, useRef } from 'react';
import { useEffectState, useStateRef } from 'parsec-hooks';
import weekday from 'dayjs/plugin/weekday';
import { useConfig } from '../config-provider';
import { Native } from '@kqinfo/ui';
import { NativeInstance } from '../native';
import rpxToPx from '../rpx-to-px';
import getPlatform from '../get-platform';
import Picker from './picker';
import { useMemoizedFn } from 'ahooks';

dayjs.extend(weekday);

const weeks = ['日', '一', '二', '三', '四', '五', '六'];

type Current = dayjs.Dayjs | [dayjs.Dayjs | undefined, dayjs.Dayjs | undefined];

export interface Props {
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 子项样式类名
   */
  itemCls?: string;
  /**
   * 选中的子项样式类名
   */
  activeItemCls?: string;
  /**
   * 选中的标记点样式类名
   */
  activeDotCls?: string;
  /**
   * 不可选中的子项样式类名
   */
  disableItemCls?: string;
  /**
   * 标记点的类名
   */
  dotCls?: string;
  /**
   * 标记点Wrap的类名
   */
  dotWrapCls?: string;
  /**
   * 日期范围选择
   */
  range?: boolean;
  /**
   * 选中的日期，range为true是返回的是数组
   */
  current?: Current;
  /**
   * 选中的日期改变的事件，range为true是返回的是数组
   */
  onChange?: (day: Current) => void;
  /**
   * 渲染标记点，返回false不显示，可以返回一个元素可以自定义显示
   */
  renderDot?: (day: dayjs.Dayjs, index: number) => React.ReactNode | boolean;
  /**
   * 渲染禁止的日期
   * @default day => day.isBefore(dayjs(), 'date')
   */
  renderDisable?: (day: dayjs.Dayjs) => boolean;
  /**
   * 日期范围天数
   * @default 14
   */
  limit?: number;
  /**
   * 自定义渲染
   */
  renderDate?: (day: dayjs.Dayjs) => React.ReactNode;
  /**
   * 自定义渲染item props
   */
  renderItemProps?: (day: dayjs.Dayjs) => ViewProps;
  /**
   * 设置这个后会渲染成列表模式
   */
  listEndDay?: dayjs.Dayjs;
  /**
   * 列表模式的月份类名
   */
  monthCls?: string;
  /**
   * 开始时间，默认今天
   */
  startDay?: dayjs.Dayjs;
  /**
   * 适老模式，开启后尺寸会变大
   */
  elderly?: boolean;
  style?: React.CSSProperties;
  /**
   * 星期的类名
   */
  weekCls?: string;
  /**
   * 被范围选择项的类名
   */
  rangeActiveCls?: string;
}

const Calendar = ({
  className,
  current,
  renderDot: _renderDot = () => false,
  onChange: _onChange = () => {},
  itemCls,
  renderDisable: _renderDisable = day => day.isBefore(dayjs(), 'date'),
  activeItemCls,
  disableItemCls,
  activeDotCls,
  dotWrapCls,
  limit = 14,
  renderDate: _renderDate = day => day.get('date'),
  listEndDay: _listEndDay,
  monthCls,
  startDay: _outStartDay,
  elderly = useConfig().elderly,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  renderItemProps: _renderItemProps = () => {},
  dotCls,
  range,
  weekCls,
  rangeActiveCls,
  ...props
}: Props) => {
  const renderDot = useMemoizedFn(_renderDot);
  const onChange = useMemoizedFn(_onChange);
  const renderDisable = useMemoizedFn(_renderDisable);
  const renderDate = useMemoizedFn(_renderDate);
  const renderItemProps = useMemoizedFn(_renderItemProps);
  const listEndDayStr = _listEndDay?.toString();
  const listEndDay = useMemo(
    () => (listEndDayStr ? dayjs(listEndDayStr) : undefined),
    [listEndDayStr],
  );
  const outStartDayStr = _outStartDay?.toString();
  const outStartDay = useMemo(
    () => (outStartDayStr ? dayjs(outStartDayStr) : undefined),
    [outStartDayStr],
  );

  const [selected, setSelected] = useEffectState<Current>(
    useMemo(() => current || (range ? [dayjs(), undefined] : dayjs()), [
      current,
      range,
    ]),
  );
  const selectedRef = useStateRef(selected);
  const startDay = useMemo(() => {
    return listEndDay ? dayjs().set('date', 1) : outStartDay || dayjs();
  }, [listEndDay, outStartDay]);
  limit = useMemo(() => {
    return listEndDay ? listEndDay.diff(dayjs(), 'day') + 1 : limit;
  }, [limit, listEndDay]);
  const days = useMemo(
    () =>
      new Array(limit).fill(0).map((_, index) =>
        dayjs(
          startDay
            .subtract(startDay.day(), 'day')
            .add(index, 'day')
            .format('YYYY-MM-DD'),
        ),
      ),
    [limit, startDay],
  );
  const getItemArg = useCallback(
    (day: dayjs.Dayjs) => {
      const selected = selectedRef.current;
      const [start, end] = selected instanceof Array ? selected : [];
      const isStart = !!(day.isSame(start, 'date') && range);
      const isEnd = !!(day.isSame(end, 'date') && range && end);
      const inRange = !!(
        day.isAfter(start) &&
        day.isBefore(end) &&
        range &&
        end &&
        !isEnd
      );
      const disabled = renderDisable(day);
      const active =
        selected instanceof Array
          ? isStart || isEnd || inRange
          : day.isSame(selected, 'date');
      const renderProps = renderItemProps?.(day);
      return {
        renderProps,
        end,
        isEnd,
        isStart,
        active,
        inRange,
        disabled,
      };
    },
    [range, renderDisable, renderItemProps, selectedRef],
  );
  const getItemNativeData = useCallback(
    (day: dayjs.Dayjs) => {
      const {
        renderProps,
        end,
        isEnd,
        isStart,
        active,
        inRange,
        disabled,
      } = getItemArg(day);
      return {
        style: {
          marginRight:
            day.weekday() === 6
              ? '0PX'
              : getPlatform === 'native'
              ? rpxToPx(30)
              : undefined,
          ...renderProps?.style,
        },
        className: classNames(
          styles.item,
          itemCls,
          renderProps?.className,
          disabled && classNames(styles.disable, disableItemCls),
          active && classNames(styles.active, activeItemCls),
          inRange && classNames(styles.rangeActive, rangeActiveCls),
          isEnd && classNames(styles.end),
          isStart && end && classNames(styles.start),
        ),
      };
    },
    [activeItemCls, disableItemCls, getItemArg, itemCls, rangeActiveCls],
  );
  const nativeRefArrRef = useRef<
    { day: dayjs.Dayjs; native: NativeInstance | null }[]
  >([]);
  return (
    <View
      className={classNames(
        styles.calendar,
        className,
        elderly && styles.elderly,
      )}
      {...props}
    >
      {weeks.map((item, index) => (
        <View
          className={classNames(styles.item, itemCls, styles.week, weekCls)}
          key={item}
          style={{
            marginRight:
              index === 6
                ? 0
                : getPlatform === 'native'
                ? rpxToPx(30)
                : undefined,
          }}
        >
          {item}
        </View>
      ))}
      {useMemo(() => {
        return days.map((day, index) => {
          const dot = renderDot?.(day, index);
          const { renderProps, active, disabled } = getItemArg(day);
          const renderEmpty = (before = false) => {
            const length = before ? day.weekday() : 7 - day.weekday() - 1;
            return new Array(length).fill(0).map((_, i) => (
              <View
                className={classNames(itemCls, styles.item, styles.empty)}
                key={i}
                style={{
                  marginRight:
                    !before && i === length - 1
                      ? 0
                      : getPlatform === 'native'
                      ? rpxToPx(30)
                      : undefined,
                }}
              />
            ));
          };
          if (listEndDay && day.month() === startDay.month() - 1) {
            return null;
          }
          return (
            <React.Fragment key={index}>
              {day.date() === 1 && listEndDay && (
                <>
                  <View className={classNames(styles.month, monthCls)}>
                    {day.format('YYYY年MM月')}
                  </View>
                  {renderEmpty(true)}
                </>
              )}
              <Native
                {...renderProps}
                onTap={() => {
                  if (disabled) return;
                  if (range) {
                    const [start, end] = selectedRef.current as any;
                    let current: Current;
                    if (start && end) {
                      current = [day, undefined];
                    } else if (start && dayjs(start).isBefore(day)) {
                      current = [start, day];
                    } else {
                      current = [day, undefined];
                    }
                    setSelected(current);
                    selectedRef.current = current;
                    onChange?.(current);
                  } else {
                    setSelected(day);
                    selectedRef.current = day;
                    onChange?.(day);
                  }
                  nativeRefArrRef.current.forEach(({ day, native }) => {
                    native?.setData(getItemNativeData(day));
                  });
                }}
                initData={getItemNativeData(day)}
                ref={native => {
                  nativeRefArrRef.current[index] = { day, native };
                  native?.setData(getItemNativeData(day));
                }}
              >
                {renderDate(day)}
                <View className={classNames(styles.dotWrap, dotWrapCls)}>
                  {dot === true ? (
                    <View
                      className={classNames(
                        styles.dot,
                        dotCls,
                        active && classNames(styles.activeDot, activeDotCls),
                      )}
                    >
                      {dot}
                    </View>
                  ) : (
                    dot
                  )}
                </View>
              </Native>
              {listEndDay &&
                (day.month() !==
                  dayjs(day)
                    .add(1, 'day')
                    .month() ||
                  days.length === index + 1) &&
                renderEmpty(false)}
            </React.Fragment>
          );
        });
      }, [
        activeDotCls,
        days,
        dotCls,
        dotWrapCls,
        getItemArg,
        getItemNativeData,
        itemCls,
        listEndDay,
        monthCls,
        onChange,
        range,
        renderDate,
        renderDot,
        selectedRef,
        setSelected,
        startDay,
      ])}
    </View>
  );
};

Calendar.Picker = Picker;

export default Calendar;
