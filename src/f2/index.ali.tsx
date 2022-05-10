import React, { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas';
import { createCanvasContext } from 'remax/ali';
import { DataRecord, Chart } from '@antv/f2';
import { Props } from './index';
import useViewLayout from '../use-view-layout';
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
  className,
  recordScale,
  setChart,
}: Props) => {
  const [chart, initChart] = useState<Chart<DataRecord>>();
  const canvasRef = useRef<any>();
  const { width, height, ...arg } = useViewLayout();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const id = arg.id;
  useEffect(() => {
    if (!width) return;
    const context = createCanvasContext(id);
    // const pixelRatio = getSystemInfoSync().pixelRatio;
    const chart = new F2.Chart({
      context,
      width,
      height,
      // pixelRatio,
      ...initParams,
    });
    initChart(chart);
    canvasRef.current = chart.get('el');
  }, [height, id, initParams, width]);
  const dataRef = useRef<typeof data>();
  useEffect(() => {
    if (!chart || !data) return;
    if (JSON.stringify(dataRef.current) === JSON.stringify(data)) return;
    if (dataRef.current) {
      chart.changeData(data);
    } else {
      chart.source(data, recordScale);
      setChart(chart);
      chart.render();
    }
    dataRef.current = data;
  }, [chart, data, recordScale, setChart]);
  return (
    <Canvas
      id={id}
      style={style}
      className={className}
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
      {...arg}
    />
  );
};
