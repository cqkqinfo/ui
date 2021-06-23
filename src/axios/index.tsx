import axios from './axios';
import Sentry from '../sentry';

axios.interceptors.response.use(response => {
  Sentry.addBreadcrumb({
    category: 'request.url',
    message: response.config.url,
    level: Sentry.Severity.Info,
  });
  Sentry.addBreadcrumb({
    category: 'request.data',
    message: response.config.data,
    level: Sentry.Severity.Info,
  });
  Sentry.addBreadcrumb({
    category: 'response.data',
    message: response.data,
    level: Sentry.Severity.Info,
  });
  return response;
});

export default axios;
