import useGetSystemInfoSync from '../use-get-system-info-sync';

export default () => {
  const {
    screenHeight,
    safeArea: { bottom = screenHeight } = {},
  } = useGetSystemInfoSync();
  return { bottomHeight: screenHeight - bottom };
};
