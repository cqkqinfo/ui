import { useGetSystemInfoSync } from '@kqinfo/ui';

export default () => {
  const {
    screenHeight,
    safeArea: { bottom = screenHeight } = {},
  } = useGetSystemInfoSync();
  return { bottomHeight: screenHeight - bottom };
};
