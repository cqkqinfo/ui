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
  base: '/ui/',
  publicPath: '/ui/',
  navs: [null, { title: 'GitHub', path: 'https://github.com/cqkqinfo/ui' }, { title: 'RN模版', path: 'https://github.com/cqkqinfo/remax-react-native-template.git' }],
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
    [
      'babel-plugin-import',
      {
        libraryName: 'parsec-hooks',
        camel2DashComponentName: false,
        customName: (name: string) => {
          if (name === 'ContainerUseWrap') {
            return `parsec-hooks/lib/${name}`;
          }
          if (/^(use)/.test(name)) {
            return `parsec-hooks/lib/${name
              .replace(/^(use)/, '')
              .replace(/^\S/, s => s.toLowerCase())}Hooks`;
          } else {
            return `parsec-hooks/lib/utils/${name}`;
          }
        },
      },
      'parsec-hooks',
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
