import { Toast } from 'antd-mobile';
import { Options } from './index.wechat';

export default ({
  icon = 'success',
  title,
  duration = 3000,
  mask = false,
}: Options) =>
  new Promise(resolve => {
    Toast.show({
      icon,
      content: title,
      duration,
      maskClickable: mask,
      afterClose: () => resolve(''),
    });
  });
