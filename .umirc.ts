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
  themeConfig: {
    carrier: 'KQ UI', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // [{ mode: 'vw', options: [100, 750] }],
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
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
        libraryDirectory: 'es/components',
        style: false,
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
