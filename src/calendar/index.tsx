import classNames from 'classnames';
import styles from './index.module.less';
import { View } from 'remax/one';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useEffectState } from 'parsec-hooks';

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
  dotCls,
}: Props) => {
  const [selected, setSelected] = useEffectState(
    useMemo(() => current || dayjs(), [current]),
  );
  const days = useMemo(
    () =>
      new Array(limit).fill(0).map((_, index) =>
        dayjs(
          dayjs()
            .subtract(dayjs().day(), 'day')
            .add(index, 'day')
            .format('YYYY-MM-DD'),
        ),
      ),
    [limit],
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
        return (
          <View
            onTap={() => {
              setSelected(day);
              onChange?.(day);
            }}
            style={{
              marginRight: (index + 1) % 7 === 0 ? 0 : undefined,
            }}
            className={classNames(styles.item, itemCls, {
              [classNames(styles.disable, disableItemCls)]: renderDisable(day),
              [classNames(styles.active, activeItemCls)]: active,
            })}
            key={index}
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
        );
      })}
    </View>
  );
};
