import axios from './axios';
import Sentry from '../sentry';

axios.interceptors.request.use(config => {
  Sentry.addBreadcrumb({
    category: 'xhr',
    message: 'request.config',
    data: config,
    level: Sentry.Severity.Info,
  });
  Sentry.addBreadcrumb({
    category: 'xhr',
    message: 'request.data',
    data: config.data,
    level: Sentry.Severity.Info,
  });
  return config;
});

axios.interceptors.response.use(
  response => {
    Sentry.addBreadcrumb({
      category: 'xhr',
      message: 'response.data',
      data: response.data,
      level: Sentry.Severity.Info,
    });
    return response;
  },
  response => {
    Sentry.addBreadcrumb({
      category: 'xhr',
      message: 'response.data',
      data: response.data,
      level: Sentry.Severity.Error,
    });
    return response;
  },
);

export default axios;
