export default {
  esm: 'babel',
  cjs: 'babel',
  extraBabelPresets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 4,
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'parsec-hooks',
        camel2DashComponentName: false,
        customName: (name: string) => {
          if (name === 'ContainerUseWrap') {
            return `parsec-hooks/lib/${name}`;
          }
          return `parsec-hooks/lib/${name
            .replace(/^(use)/, '')
            .replace(/^\S/, s => s.toLowerCase())}Hooks`;
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: true,
      },
      'antd-mobile',
    ],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
};
