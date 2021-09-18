import React, { useEffect, useRef, useState } from 'react';
import Canves from '../canvas';
import { useId, useInit } from 'parsec-hooks';
import { Data, DataRecord, Chart, ChartParams } from '@antv/f2';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const F2 = require('@antv/f2/lib/core');

export interface Props<T extends DataRecord = DataRecord> {
  /**
   * 数据
   */
  data?: Data<T>;
  /**
   * 设置图表
   */
  setChart: (chart: Chart<T>) => void;
  /**
   * 初始化参数
   */
  initParams?: ChartParams;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
}

export default <T extends DataRecord = DataRecord>({
  data,
  initParams,
  style,
  id = useId(),
  className,
  setChart,
}: Props<T>) => {
  const [chart, initChart] = useState<Chart<DataRecord>>();
  useInit(() => {
    initChart(
      new F2.Chart({
        ...initParams,
        id,
      }),
    );
  }, [id]);
  const dataRef = useRef<typeof data>();
  useEffect(() => {
    if (!chart || !data) return;
    if (JSON.stringify(dataRef.current) === JSON.stringify(data)) return;
    dataRef.current = data;
    chart.source(data);
    setChart(chart);
    chart.render();
  }, [chart, data, setChart]);
  return <Canves id={id} style={style} className={className} />;
};
