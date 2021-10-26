module.exports = {
  globals: {
    __REMAX_HOST_COMPONENTS__: {},
    __REMAX_PX2RPX__: true,
    __REMAX_ENTRY_INFO__: {},
    __REMAX_PAGE_EVENTS__: {},
    __REMAX_APP_EVENTS__: [
      'onLaunch',
      'onShow',
      'onHide',
      'onShareAppMessage',
      'onPageNotFound',
      'onError',
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(.*(remax|hex-rgb).*))'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/example/',
    '/src/remax.wechat.tsx',
    '/src/remax.toutiao.tsx',
    '/src/utils.wechat.ts',
    '/src/utils.toutiao.ts',
  ],
  setupFiles: ['./setup.js'],
};
