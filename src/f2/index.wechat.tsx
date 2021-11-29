import React, { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas';
import { useId } from 'parsec-hooks';
import { createSelectorQuery, getSystemInfoSync } from 'remax/wechat';
import { DataRecord, Chart } from '@antv/f2';
import { Props } from './index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const F2 = require('@antv/f2/lib/core');

function wrapEvent(e: any) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function() {};
  }
  return e;
}

export default ({
  data,
  initParams,
  style,
  id = useId(),
  className,
  recordScale,
  setChart,
}: Props) => {
  const [chart, initChart] = useState<Chart<DataRecord>>();
  const canvasRef = useRef<any>();
  useEffect(() => {
    // 高清设置
    const chart = new F2.Chart({
      context: canvasRef.current.getContext('2d'),
      ...initParams,
    });
    initChart(chart);
  }, [id, initParams]);
  const dataRef = useRef<typeof data>();
  useEffect(() => {
    if (!chart || !data) return;
    if (JSON.stringify(dataRef.current) === JSON.stringify(data)) return;
    dataRef.current = data;
    chart.source(data, recordScale);
    setChart(chart);
    chart.render();
  }, [chart, data, setChart]);
  return (
    <Canvas
      id={id}
      style={style}
      className={className}
      ref={canvasRef}
      onTouchStart={(e: any) => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        canvasEl.dispatchEvent('touchstart', wrapEvent(e));
      }}
      onTouchMove={(e: any) => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        canvasEl.dispatchEvent('touchmove', wrapEvent(e));
      }}
      onTouchEnd={(e: any) => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        canvasEl.dispatchEvent('touchend', wrapEvent(e));
      }}
    />
  );
};
