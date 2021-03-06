import { Toast } from '@ant-design/react-native';
import { Options } from './index.wechat';
import hideLoading from '../../hide-loading';

export default ({
  icon = 'success',
  title,
  duration = 1000,
  mask = false,
}: Options) =>
  new Promise(resolve => {
    hideLoading();
    if (icon === 'none') {
      Toast.show(title, duration / 1000, mask);
      resolve('');
    } else {
      Toast.success(title, duration / 1000, () => resolve(''), mask);
    }
  });
