import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.Integrations.GlobalHandlers;

export default Sentry;
