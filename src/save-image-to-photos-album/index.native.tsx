import CameraRoll from '@react-native-community/cameraroll';
import { Options } from './index';

export default ({ filePath }: Options) =>
  CameraRoll.save(
    `${filePath.includes('file://') ? '' : 'file://'}${filePath}`,
    {
      type: 'photo',
    },
  );
