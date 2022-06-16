import Sentry from './sentry';
import getVersion from '../get-version';
import './init';
import getPlatform from '../get-platform';

const newSentry: typeof Sentry = {
  ...Sentry,
  init: (options = {}) => {
    if (getVersion() !== 'develop') {
      Sentry.init({
        integrations:
          getPlatform === 'native'
            ? [
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                new Sentry.ReactNativeTracing({
                  // tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
                  // ... other options
                }),
              ]
            : getPlatform === 'web'
            ? [
                new Sentry.Integrations.Breadcrumbs({
                  console: false,
                }),
                new Sentry.Integrations.GlobalHandlers(),
              ]
            : [new Sentry.Integrations.GlobalHandlers()],
        ignoreErrors: [
          'Non-Error exception captured',
          'promise rejection captured',
        ],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
        release: getVersion(),
        ...options,
        dsn:
          options?.dsn ||
          'https://c4d3b0feed534673bf62e8f3a9230b14@sentry.parsec.com.cn/5',
      });
    }
  },
};

export default newSentry;
