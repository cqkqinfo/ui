import { Interpreter } from 'eval5';
import axios from '../axios';

const window: any = {};

const interpreter = new Interpreter({
  window,
  console,
  Uint8Array,
  Function,
  this: window,
});
let Babel: any;

export default async function<D = any>(
  /**
   * cdn链接
   */
  link: string,
  /**
   * 引入的js文件名
   */
  name: string,
  /**
   * 回调函数
   */
  callBack: (js: D) => void,
  /**
   * 是否是es6模块
   */
  es6 = false,
) {
  if (!Babel && es6) {
    await axios
      .get('https://unpkg.com/@babel/standalone/babel.min.js')
      .then(({ data }) => {
        interpreter.evaluate(`
          window['this'] = this;
          ${data.replace(/(const|let) /g, 'var ')}
        `);
        Babel = window.this.Babel;
      });
  }
  axios.get(link).then(({ data }) => {
    if (es6) {
      data = Babel.transform(data, {
        presets: ['env'],
      }).code;
    }
    interpreter.evaluate(`
      window['this'] = this;
      ${data}
    `);
    const code = window[name] || window.this[name];
    callBack?.(code);
  });
}
