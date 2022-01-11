import { useGetSystemInfoSync } from '@kqinfo/ui';

export default () => {
  const {
    screenHeight,
    safeArea: { bottom },
  } = useGetSystemInfoSync();
  return { bottomHeight: screenHeight - bottom };
};
