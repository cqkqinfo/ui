import showToast from './one';
import { Options } from './one/index.wechat';
import Sentry from '../sentry';
import { Severity } from '@sentry/types';
import hideLoading from '../hide-loading';

export default (options: Options) => {
  Sentry.addBreadcrumb({
    category: 'ui.showToast',
    message: `显示了${options.title}`,
    data: options,
    level: Sentry.Severity.Info,
  });
  if (options.icon === 'none') {
    Sentry.captureEvent({ message: options.title, level: Severity.Info });
  }
  hideLoading();
  return showToast(options);
};
