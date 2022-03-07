import { Toast } from '@ant-design/react-native';
import { Options } from './index.wechat';

export default ({ icon = 'success', title, duration, mask = false }: Options) =>
  new Promise(resolve => {
    if (icon === 'none') {
      Toast.fail(title, duration, () => {}, mask);
      setTimeout(resolve, duration);
    } else {
      Toast.success(title, duration, () => resolve(''), mask);
    }
  });
