import { getDownCount } from 'parsec-hooks/lib/downTimeHooks';
import { Native } from '@kqinfo/ui';
import React, { useEffect, useRef } from 'react';
import { NativeInstance } from '../native';
import dayjs from 'dayjs';

interface Props {
  /**
   * 目标日期
   */
  targetDate?: string;
  /**
   * format
   */
  format: (data: {
    d: string;
    h: string;
    m: string;
    s: string;
    diff: number;
    isEnd: boolean;
  }) => string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
}

export default ({ targetDate, format, style, className }: Props) => {
  const ref = useRef<NativeInstance>(null);
  useEffect(() => {
    if (!targetDate) return;
    const fn = () =>
      ref.current?.setData({
        content: format({
          ...getDownCount(targetDate),
          diff: dayjs().diff(targetDate, 's'),
        }),
      });
    fn();
    const timer = setInterval(fn, 1000);
    return () => clearInterval(timer);
  }, [format, targetDate]);
  return <Native ref={ref} initData={{ style, className }} />;
};
