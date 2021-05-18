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
  ],
};
