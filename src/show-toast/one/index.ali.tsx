import { showToast } from 'remax/ali';
import { Options } from './index.wechat';

export default ({ title, icon, duration = 3000 }: Options) =>
  new Promise(resolve => {
    showToast({
      type: icon,
      content: title,
      duration,
      success: () => resolve(''),
    });
  });
