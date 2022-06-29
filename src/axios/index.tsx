import axios from './axios';
import Sentry from '../sentry';
import { AxiosInstance, AxiosStatic } from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const setSentry = (axios: AxiosStatic | AxiosInstance) => {
  axios.interceptors.request.use(config => {
    config.headers['Content-Type'] =
      config.headers['Content-Type'] || 'application/json;charset=UTF-8';
    if (config.params) {
      Object.entries(config.params).forEach(([key, value]) => {
        if (value instanceof Array) {
          delete config.params[key];
          config.url += `${config.url?.includes('?') ? '&' : '?'}${value
            .map(id => `${key}=${id}`)
            .join('&')}`;
        }
      });
    }
    if (isProduction) {
      const curl = `curl '${config.baseURL || ''}${config.url}${
        config.params
          ? `?${Object.entries(config.params)
              .map(([key, value]) => `${key}=${value}`)
              .join('&')}`
          : ''
      }' -X '${config.method?.toUpperCase()}'  ${Object.entries(config.headers)
        .filter(([_, value]) => typeof value === 'string')
        .map(([key, value]) => `-H '${key}: ${value}'`)
        .join(' ')} ${
        config.data ? `--data-binary '${JSON.stringify(config.data)}' ` : ''
      }  --compressed`;
      console.log(curl);
      Sentry.addBreadcrumb({
        category: 'xhr',
        message: 'curl',
        data: {
          curl,
        },
        level: Sentry.Severity.Info,
      });
    }
    return config;
  });

  axios.interceptors.response.use(
    response => {
      if (isProduction) {
        console.log(response?.data);
      }
      Sentry.addBreadcrumb({
        category: 'xhr',
        message: `${response?.config.url}.data`,
        data: response?.data,
        level: Sentry.Severity.Info,
      });
      return response;
    },
    response => {
      Sentry.addBreadcrumb({
        category: 'xhr',
        message: `${response?.config.url}.data`,
        data: response?.data,
        level: Sentry.Severity.Error,
      });
      return Promise.reject(response);
    },
  );
};

setSentry(axios);

const oldCreate = axios.create;
axios.create = config => {
  const instance = oldCreate(config);
  setSentry(instance);
  return instance;
};

export default axios;
