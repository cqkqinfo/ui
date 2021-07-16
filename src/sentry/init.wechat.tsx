import * as Sentry from 'sentry-miniapp';
import { Severity } from '@sentry/types';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const nativePage = Page;
// @ts-ignore
Page = options => {
  nativePage({
    ...options,
    onLoad(...arg: any[]) {
      const nativeSetData = this.setData;
      this.setData = (data: any, callback: any) => {
        const startTime = +new Date();
        nativeSetData.call(this, data, (...arg: any[]) => {
          const runTime = +new Date() - startTime;
          if (runTime > 1500) {
            Sentry.addBreadcrumb({
              level: Sentry.Severity.Info,
              message: `setData执行时间：${runTime}ms`,
            });
            Sentry.captureEvent({
              message: 'setData执行时间过长',
              level: Severity.Info,
            });
          }
          callback?.(...arg);
        });
      };
      options['onLoad']?.call(this, ...arg);
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
