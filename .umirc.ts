import { defineConfig } from 'dumi';

process.env.REMAX_PLATFORM = 'web';

export default defineConfig({
  title: 'Kqinfo UI',
  favicon: 'https://z3.ax1x.com/2021/04/12/cBYdw8.png',
  logo: 'https://z3.ax1x.com/2021/04/12/cBYdw8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  theme: {
    '@c-primary': '#2780da',
  },
  base: '/ui/',
  publicPath: '/ui/',
  navs: [{ title: 'GitHub', path: 'https://github.com/cqkqinfo/ui' }],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  extraPostCSSPlugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 100,
      exclude: /(.dumi)|(antd)/,
    }),
  ],
});
