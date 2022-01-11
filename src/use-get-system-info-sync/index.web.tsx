import safeAreaInsets from 'safe-area-insets';
import screenHeight from '../screen-height';
import { useForceUpdate } from 'parsec-hooks';
import { useEffect } from 'react';

export default () => {
  const { forceUpdate } = useForceUpdate();
  useEffect(() => {
    safeAreaInsets.onChange(forceUpdate);
  }, [forceUpdate]);
  return {
    screenHeight,
    safeArea: {
      bottom: screenHeight - safeAreaInsets.bottom,
    },
  };
};
