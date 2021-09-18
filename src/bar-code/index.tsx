import React, { useEffect, useRef } from 'react';
import { View } from 'remax/one';
import JsBarcode from 'jsbarcode';
import BarCodeProps from './common';
export default ({ content, style, ...props }: BarCodeProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    JsBarcode(svgRef.current, content, {
      displayValue: true, //  不显示原始值
      textMargin: 5, //设置条形码和文本之间的间距
      fontSize: 30, //设置文本的大小
      width: 2, //设置条之间的宽度
    });
    svgRef.current?.setAttribute('height', '100%');
    svgRef.current?.setAttribute('width', '100%');
  }, [content]);
  return (
    <View {...props} style={{ background: '#fff', ...style }}>
      <svg ref={svgRef} />
    </View>
  );
};
