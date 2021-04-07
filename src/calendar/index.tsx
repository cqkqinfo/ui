import classNames from 'classnames';
import styles from './index.less';
import { View } from 'remax/one';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useEffectState } from 'parsec-hooks';

const weeks = ['日', '一', '二', '三', '四', '五', '六'];

const days = new Array(14).fill(0).map((_, index) =>
  dayjs(
    dayjs()
      .subtract(dayjs().day(), 'day')
      .add(index, 'day')
      .format('YYYY-MM-DD'),
  ),
);

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
   * 标记点的类名
   */
  dotCls?: string;
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
   * @default day.isBefore(dayjs(), 'date')
   */
  renderDisable?: (day: dayjs.Dayjs) => React.ReactNode | boolean;
}

export default ({
  className,
  current,
  renderDot,
  onChange,
  itemCls,
  renderDisable = day => day.isBefore(dayjs(), 'date'),
  dotCls,
}: Props) => {
  const [selected, setSelected] = useEffectState(
    useMemo(() => current || dayjs(), [current]),
  );
  return (
    <View className={classNames(styles.calendar, className)}>
      {weeks.map((item, index) => (
        <View
          className={classNames(styles.item, styles.week)}
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
              [styles.disable]: renderDisable(day),
              [styles.active]: active,
            })}
            key={index}
          >
            {day.get('date')}
            <View className={styles.dotWrap}>
              {dot === true ? (
                <View
                  className={classNames(styles.dot, dotCls, {
                    [styles.activeDot]: active,
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
