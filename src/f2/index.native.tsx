import React, { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas';
import { useId, useInit } from 'parsec-hooks';
import { DataRecord, Chart } from '@antv/f2';
import { View } from 'remax/one';
import {
  enable,
  ReactNativeBridge,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '@gcanvas/core/src/index.js';
import { NativeModules, Platform, findNodeHandle } from 'react-native';
import { Props } from './index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const F2 = require('@antv/f2/lib/core');

function convertTouches(touches: any) {
  if (!touches || !touches.length) {
    return [];
  }
  return touches.map((item: any) => {
    return {
      x: item.pageX,
      y: item.pageY,
    };
  });
}

function convertEvent(nativeEvent: any) {
  const touches = convertTouches(nativeEvent.touches);
  const changedTouches = convertTouches(nativeEvent.changedTouches);
  return {
    preventDefault: function() {},
    touches,
    changedTouches,
  };
}

ReactNativeBridge.GCanvasModule = NativeModules.GCanvasModule;
ReactNativeBridge.Platform = Platform;

function strLen(str: string) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}

export default <T extends DataRecord = DataRecord>({
  data,
  initParams,
  style,
  id = useId(),
  className,
  setChart,
  recordScale,
}: Props<T>) => {
  const [chart, initChart] = useState<Chart<DataRecord>>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const [wh, setWh] = useState({ width: 0, height: 0 });
  useInit(() => {
    if (!canvasRef.current || !wh.height) {
      return false;
    }
    let ref: any = canvasRef.current;
    const canvas_tag = findNodeHandle(ref);
    const el = { ref: '' + canvas_tag, style: {} };
    ref = enable(el, { bridge: ReactNativeBridge });

    // 适配gcanvas 的context
    const ctx = ref.getContext('2d');
    ctx.measureText = (text: any) => {
      let fontSize = 12;
      const font = ctx.font;
      if (font) {
        fontSize = parseInt(font.split(' ')[3], 10);
      }
      fontSize /= 2;
      return {
        width: strLen(text) * fontSize,
      };
    };

    initChart(
      new F2.Chart({
        context: ctx,
        pixelRatio: 3,
        padding: [15],
        ...initParams,
        width: wh.width / 3,
        height: wh.height / 3,
      }),
    );
  });
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
      dataRef.current = data;
    }
  }, [chart, data, recordScale, setChart]);
  return (
    <Canvas
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLayout={e => setWh(e.nativeEvent.layout)}
      id={id}
      ref={canvasRef}
      style={style}
      className={className}
      onTouchStart={(e: any) => {
        if (!chart) {
          return;
        }
        const ev = convertEvent(e.nativeEvent);
        (chart.get('el') as any).dispatchEvent('touchstart', ev);
      }}
      onTouchMove={(e: any) => {
        if (!chart) {
          return;
        }
        const ev = convertEvent(e.nativeEvent);
        (chart.get('el') as any).dispatchEvent('touchmove', ev);
      }}
      onTouchEnd={(e: any) => {
        if (!chart) {
          return;
        }
        const ev = convertEvent(e.nativeEvent);
        (chart.get('el') as any).dispatchEvent('touchend', ev);
      }}
    />
  );
};
