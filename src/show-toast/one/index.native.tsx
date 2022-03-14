import { Toast } from '@ant-design/react-native';
import { Options } from './index.wechat';

export default ({
  icon = 'success',
  title,
  duration = 1000,
  mask = false,
}: Options) =>
  new Promise(resolve => {
    if (icon === 'none') {
      Toast.fail(title, duration / 1000, () => resolve(''), mask);
    } else {
      Toast.success(title, duration / 1000, () => resolve(''), mask);
    }
  });
