import Sentry from './sentry';
import getVersion from '../get-version';
import './init';

const newSentry: typeof Sentry = {
  ...Sentry,
  init: (options = {}) => {
    if (
      process.env.REMAX_PLATFORM === 'wechat'
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          __wxConfig.envVersion !== 'develop'
        : !window.location.host.includes('localhost')
    ) {
      Sentry.init({
        integrations: [new Sentry.Integrations.GlobalHandlers()],
        ignoreErrors: ['Non-Error exception captured'],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
        release: getVersion,
        ...options,
        dsn:
          options?.dsn ||
          'https://2306075284d9444894a37d888ef6977a@sentry.parsec.com.cn/13',
      });
    }
  },
};

export default newSentry;
