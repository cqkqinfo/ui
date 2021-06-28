import { defineConfig } from 'dumi';

process.env.REMAX_PLATFORM = 'web';

export default defineConfig({
  title: '凯桥UI',
  favicon: 'https://z3.ax1x.com/2021/04/12/cBYdw8.png',
  logo: 'https://z3.ax1x.com/2021/04/12/cBYdw8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  extraPostCSSPlugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 100,
      exclude: /(.dumi)|(antd-mobile)/,
    }),
  ],
});
