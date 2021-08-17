import classNames from 'classnames';
import styles from './index.module.less';
import { View } from 'remax/one';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useEffectState } from 'parsec-hooks';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

const weeks = ['日', '一', '二', '三', '四', '五', '六'];

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
   * 选中的日期
   */
  current?: dayjs.Dayjs;
  /**
   * 选中的日期改变的事件
   */
  onChange?: (day: dayjs.Dayjs) => void;
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
}

export default ({
  className,
  current,
  renderDot,
  onChange,
  itemCls,
  renderDisable = day => day.isBefore(dayjs(), 'date'),
  activeItemCls,
  disableItemCls,
  activeDotCls,
  dotWrapCls,
  limit = 14,
  renderDate = day => day.get('date'),
  listEndDay,
  monthCls,
  startDay: outStartDay,
  dotCls,
}: Props) => {
  const [selected, setSelected] = useEffectState(
    useMemo(() => current || dayjs(), [current]),
  );
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
  return (
    <View className={classNames(styles.calendar, className)}>
      {weeks.map((item, index) => (
        <View
          className={classNames(styles.item, itemCls, styles.week)}
          key={item}
          style={{ marginRight: index === 6 ? 0 : undefined }}
        >
          {item}
        </View>
      ))}
      {days.map((day, index) => {
        const dot = renderDot?.(day, index);
        const active = day.isSame(selected, 'date');
        const renderEmpty = (before = false) => {
          const length = before ? day.weekday() : 7 - day.weekday() - 1;
          return new Array(length).fill(0).map((_, i) => (
            <View
              className={classNames(itemCls, styles.item)}
              key={i}
              style={{
                marginRight: !before && i === length - 1 ? 0 : undefined,
              }}
            />
          ));
        };
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
            <View
              onTap={() => {
                setSelected(day);
                onChange?.(day);
              }}
              style={{
                marginRight: day.weekday() === 6 ? 0 : undefined,
              }}
              className={classNames(styles.item, itemCls, {
                [classNames(styles.disable, disableItemCls)]: renderDisable(
                  day,
                ),
                [classNames(styles.active, activeItemCls)]: active,
              })}
            >
              {renderDate(day)}
              <View className={classNames(styles.dotWrap, dotWrapCls)}>
                {dot === true ? (
                  <View
                    className={classNames(styles.dot, dotCls, {
                      [classNames(styles.activeDot, activeDotCls)]: active,
                    })}
                  >
                    {dot}
                  </View>
                ) : (
                  dot
                )}
              </View>
            </View>
            {listEndDay &&
              day.month() !==
                dayjs(day)
                  .add(1, 'day')
                  .month() &&
              renderEmpty(false)}
          </React.Fragment>
        );
      })}
    </View>
  );
};
