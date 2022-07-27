import { showToast, hideLoading } from 'remax/ali';
import { Options } from './index.wechat';

export default ({ title, icon = 'success', duration = 3000 }: Options) =>
  new Promise(resolve => {
    hideLoading();
    showToast({
      type: icon,
      content: title,
      duration,
      success: () => resolve(''),
    });
  });
