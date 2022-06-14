import { getDownCount } from 'parsec-hooks/lib/downTimeHooks';
import React, { useEffect, useRef } from 'react';
import Native, { NativeInstance } from '../native';
import dayjs from 'dayjs';
import {
  setTimeInterval,
  clearTimeInterval,
} from 'parsec-hooks/lib/downCountHooks';

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
  /**
   * 自动停止
   */
  autoStop?: boolean;
}

export default ({ targetDate, format, style, className, autoStop }: Props) => {
  const ref = useRef<NativeInstance>(null);
  useEffect(() => {
    if (!targetDate) return;
    const fn = () => {
      const formatArg = {
        ...getDownCount(targetDate),
        diff: dayjs().diff(targetDate, 's'),
      };
      ref.current?.setData({
        content: format(formatArg),
      });
      if (formatArg.isEnd && autoStop) {
        clearTimeInterval(timer);
      }
    };
    fn();
    const timer = setTimeInterval(fn, 1000);
    return () => clearTimeInterval(timer);
  }, [autoStop, format, targetDate]);
  return <Native ref={ref} initData={{ style, className }} />;
};
