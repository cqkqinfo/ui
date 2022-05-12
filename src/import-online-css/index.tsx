import axios from '../axios';
import switchVariable from '../switch-variable';
import getPlatform from '../get-platform';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssToObject from 'transform-css-to-js';

const suffix = switchVariable({
  default: 'css',
  ali: 'acss',
  wecaht: 'wxss',
})(getPlatform);

export const transformObj = (css: string) => {
  const cssStr = cssToObject(
    css
      .replace(`@import "./../../remax-styles.${suffix}";`, '')
      .replace(/:root/g, '.root')
      .replace(/([^}]+),\n([^{]+)({[^}]+})/, '$1 $3 $2 $3') // 匹配.a,\n
      .replace(/@keyframes[\s\S]+}\n}/g, ''),
  )
    .replace(/(\w+):/g, '"$1":')
    .replace(/\/\/ \.[^\n]+/g, '');
  return JSON.parse(cssStr);
};

export default async ({ host, path }: { host: string; path: string }) => {
  const { data: css } = await axios.get(`${host}${path}.${suffix}`, {
    responseType: 'text',
  });
  return transformObj(css);
};
