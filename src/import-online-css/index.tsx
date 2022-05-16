import axios from '../axios';
import switchVariable from '../switch-variable';
import getPlatform from '../get-platform';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssToObject from 'transform-css-to-js';

const suffix = switchVariable({
  default: 'css',
  ali: 'acss',
  wechat: 'wxss',
})(getPlatform);

export const transformObj = (css: string) => {
  // console.log(css);
  const transformStr = css
    .replace(/@import "\.\/\.\.\/\.\.\/remax-styles\.(css|acss|wxss)";/g, '')
    .replace(/:root/g, '.root')
    // .replace(/([^}]+),\n([^{]+)({[^}]+})/g, '$1 $3 $2 $3') // 匹配.a,\n
    .replace(/([^}]+),\n([^{]+)({[^}]+})/g, '') // 匹配.a,\n
    .replace(/@keyframes[\s\S]+}\n}/g, '');
  const cssStr = cssToObject(transformStr)
    .replace(/(\w+):/g, '"$1":')
    .replace(/\/\/ \.[^\n]+/g, '');
  // console.log(cssStr);
  return JSON.parse(cssStr);
};

export default async ({ host, path }: { host: string; path: string }) => {
  return Promise.all(
    [
      `${host}${path}.${suffix}`,
      `${host}/${switchVariable({
        default: 'app',
        development: 'remax-styles',
      })(process.env.NODE_ENV || '')}.${suffix}`,
    ].map(link =>
      axios.get(link, {
        responseType: 'text',
      }),
    ),
  ).then(res => {
    const obj = transformObj(res.map(({ data }) => data).join(''));
    // console.log(obj);
    return obj;
  });
};
