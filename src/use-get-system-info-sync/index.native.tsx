import { useSafeAreaInsets } from 'react-native-safe-area-context';
import screenHeight from '../screen-height';

export default () => {
  const { bottom } = useSafeAreaInsets();
  return {
    screenHeight,
    safeArea: {
      bottom: screenHeight - bottom,
    },
  };
};
