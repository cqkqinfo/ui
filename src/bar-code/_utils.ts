const bar = require('wxbarcode/demo/utils/barcode.js'); //引入生成条形码方法

function convert_length(length: number) {
  return Math.round((my.getSystemInfoSync().windowWidth * length) / 750);
}

export function barcode(
  id: string,
  code: string,
  width: number,
  height: number,
) {
  //封装展示条形码方法
  bar.code128(
    my.createCanvasContext(id),
    code,
    convert_length(width),
    convert_length(height),
  );
}
