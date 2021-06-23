import Sentry from './sentry';

const newSentry: typeof Sentry = {
  ...Sentry,
  init: ({ beforeSend, ...options } = {}) => {
    Sentry.init({
      dsn: 'https://2306075284d9444894a37d888ef6977a@sentry.parsec.com.cn/13',
      integrations: [new Sentry.Integrations.GlobalHandlers()],
      beforeSend(event, hint) {
        /* tslint:disable:no-string-literal only-arrow-functions */
        const isNonErrorException =
          event.exception?.values?.[0]?.value?.startsWith(
            'Non-Error exception captured',
          ) ||
          (hint?.originalException as any)?.message?.startsWith(
            'Non-Error exception captured',
          );
        /* tslint:enable:no-string-literal only-arrow-functions */

        if (isNonErrorException) {
          // We want to ignore those kind of errors
          return null;
        }
        if (beforeSend) {
          return beforeSend(event, hint);
        }
        return event;
      },

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
      ...options,
    });
  },
};

export default newSentry;
