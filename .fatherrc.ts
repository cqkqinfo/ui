export default {
  esm: 'babel',
  cjs: 'babel',
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
          if (/^(use)/.test(name)) {
            return `parsec-hooks/lib/${name
              .replace(/^(use)/, '')
              .replace(/^\S/, s => s.toLowerCase())}Hooks`;
          } else {
            return `parsec-hooks/lib/utils/${name}`;
          }
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
    [
      'import',
      {
        libraryName: 'ahooks',
        libraryDirectory: 'es',
      },
      'ahooks',
    ],
  ],
};
