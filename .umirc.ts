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
  alias: {
    'react-native': 'react-native-web',
  },
  navs: [
    null,
    { title: 'GitLab', path: 'https://gitlab2.cqkqinfo.com/kqinfo/ui' },
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
      'antd-mobile',
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
    require('postcss-unit-transforms')({
      multiple: (fileName: string) => {
        return /(.dumi)|(antd)/.test(fileName) ? 1 : 0.5;
      },
      targetUnits: 'px',
    }),
  ],
});
