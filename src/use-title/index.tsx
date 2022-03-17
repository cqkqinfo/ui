import { useForceUpdate, useTitle } from 'parsec-hooks';
import { usePageEvent } from 'remax/macro';

export default (title: string) => {
  useTitle(title);
  const { forceUpdate } = useForceUpdate();
  usePageEvent('onShow', forceUpdate);
};
