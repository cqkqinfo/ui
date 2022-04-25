import * as Sentry from 'sentry-miniapp';
// import { Severity } from '@sentry/types';
import { getUpdateManager } from 'remax/wechat';
import showModal from '../show-modal';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const nativePage = Page;
// @ts-ignore
Page = options => {
  nativePage({
    ...options,
    onLoad(...arg: any[]) {
      const nativeSetData = this.setData;
      const fn = (data: any) =>
        Object.entries(data || {}).forEach(([key, value]: any) => {
          if (key.includes('hover-')) {
            delete data[key];
          } else if (
            ['webp', 'lazy-load', 'show-menu-by-longpress'].includes(key) &&
            !value
          ) {
            delete data[key];
          } else if (value instanceof Array) {
            if (value.length === 0) {
              delete data[key];
            }
          } else if (typeof value === 'object') {
            // if (key === 'props') {
            //   value.id = value.id || data.id;
            // }
            fn(value);
          }
        });
      this.setData = (data: any, callback: any) => {
        // const startTime = +new Date();
        fn(data);
        nativeSetData.call(this, data, (...arg: any[]) => {
          // const runTime = +new Date() - startTime;
          // console.log(runTime);
          // if (runTime > 1500) {
          //   Sentry.addBreadcrumb({
          //     level: Sentry.Severity.Info,
          //     message: `setData执行时间：${runTime}ms`,
          //   });
          //   Sentry.captureEvent({
          //     message: 'setData执行时间过长',
          //     level: Severity.Info,
          //   });
          // }
          callback?.(...arg);
        });
      };
      (options as any)['onLoad']?.call(this, ...arg);
    },
  });
};

const getCurrentPage = () => {
  // @ts-ignore
  const pages = getCurrentPages();
  if (pages.length) {
    const { route } = pages[0];
    return route;
  } else {
    return '';
  }
};
let form = '';
setInterval(() => {
  const to = getCurrentPage();
  if (form !== to) {
    Sentry.addBreadcrumb({
      type: 'Navigation',
      category: 'navigation',
      level: Sentry.Severity.Info,
      data: {
        form,
        to,
      },
    });
    form = to;
  }
}, 500);

const updateManager = getUpdateManager();
updateManager?.onUpdateReady(() => {
  showModal({
    title: '更新提示',
    content: '新版本已经准备好，即将重启应用。',
    showCancel: false,
  }).then(updateManager.applyUpdate);
});
