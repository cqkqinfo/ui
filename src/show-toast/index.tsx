import showToast from './one';
import { Options } from './one/index.wechat';
import Sentry from '@/sentry';

export default (options: Options) => {
  Sentry.addBreadcrumb({
    category: 'ui.showToast',
    message: `显示了${options.title}`,
    data: options,
    level: Sentry.Severity.Info,
  });
  if (options.icon === 'none') {
    Sentry.captureEvent(new Error(options.title));
  }
  return showToast(options);
};
