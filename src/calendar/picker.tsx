import React, { useMemo } from 'react';
import { Calendar, Space, Icon, rpxToPx } from '@kqinfo/ui';
import dayjs from 'dayjs';
import { useEffectState } from 'parsec-hooks';
import { Props } from './index';
import styles from './index.module.less';
import classnames from 'classnames';

export default ({
  style,
  startDay,
  current,
  renderDisable,
  headerCls,
  ...props
}: Props & {
  /**
   * header类名
   */
  headerCls?: string;
}) => {
  const [currentStartDay, setCurrentStartDay] = useEffectState(
    useMemo(
      () =>
        (current instanceof Array ? current[0] : current) ||
        startDay ||
        dayjs(),
      [current, startDay],
    ),
  );
  return (
    <Space vertical size={30} style={style}>
      <Space
        justify={'space-between'}
        className={classnames(styles.pickerHeader, headerCls)}
        alignItems={'center'}
      >
        <Icon
          size={28}
          color={'#3A3A3A'}
          name={'kq-left'}
          onTap={() => setCurrentStartDay(currentStartDay.subtract(1, 'y'))}
        />
        <Icon
          size={34}
          color={'#3A3A3A'}
          name={'kq-zuo'}
          onTap={() => setCurrentStartDay(currentStartDay.subtract(1, 'month'))}
        />
        {currentStartDay.format('YYYY年MM月')}
        <Icon
          size={34}
          color={'#3A3A3A'}
          name={'kq-you'}
          onTap={() => setCurrentStartDay(currentStartDay.add(1, 'month'))}
        />
        <Icon
          size={28}
          color={'#3A3A3A'}
          name={'kq-right'}
          onTap={() => setCurrentStartDay(currentStartDay.add(1, 'y'))}
        />
      </Space>
      <Calendar
        limit={42}
        startDay={dayjs(currentStartDay).set('date', 1)}
        current={current}
        {...props}
        renderDisable={
          renderDisable || (day => !day.isSame(currentStartDay, 'month'))
        }
      />
    </Space>
  );
};
