import { Interpreter } from 'eval5';
import axios from '../axios';

const window: any = {};

const interpreter = new Interpreter({ window });

export default function<D = any>(
  link: string,
  name: string,
  callBack: (js: D) => void,
) {
  axios.get(link).then(({ data }) => {
    interpreter.evaluate(`
        window['this'] = this;
        ${data}
      `);
    const code = window[name] || window.this[name];
    callBack?.(code);
  });
}
