import { createAppConfig } from 'remax';

jest.mock('@remax/runtime/cjs/stopPullDownRefresh', () => {
  return () => {};
});

// mock mini program getApp api
const app = createAppConfig(undefined);

global.getApp = () => app;
global.stopPullDownRefresh = () => {};

global.my = {
  getSystemInfoSync() {
    return {
      windowWidth: 375,
    };
  },
};

global.wx = {
  getSystemInfoSync() {
    return {
      windowWidth: 375,
    };
  },
};

global.tt = {
  getSystemInfoSync() {
    return {
      windowWidth: 375,
    };
  },
};
