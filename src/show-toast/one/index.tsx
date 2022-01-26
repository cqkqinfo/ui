import { Toast } from 'antd-mobile';
import { Options } from './index.wechat';

export default ({ icon = 'success', title, duration, mask = false }: Options) =>
  new Promise(resolve => {
    Toast.show({
      icon: icon === 'none' ? undefined : 'success',
      content: title,
      duration,
      maskClickable: mask,
      afterClose: () => resolve(''),
    });
  });
