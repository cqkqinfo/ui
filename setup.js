import { createAppConfig } from 'remax';
import React from 'react';

const reCreateFn = React.createElement;
React.createElement = (...arg) => {
  if (arg[0] === 'view') {
    arg[0] = 'div';
  }
  return reCreateFn(...arg);
};

jest.mock('@remax/runtime/cjs/stopPullDownRefresh', () => {
  return () => {};
});

// mock mini program getApp api
const app = createAppConfig(undefined);

global.getApp = () => app;
global.stopPullDownRefresh = () => {};

global.console.warn = jest.fn();
const logError = console.error;
console.error = (...arg) => {
  if (
    ['Unknown event', 'attribute', 'input to be controlled'].some(i =>
      arg[0]?.includes(i),
    )
  ) {
    return;
  }
  return logError(...arg);
};

window.innerWidth = 375;

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
