import { showToast } from 'remax/wechat';

export interface Options {
  title: string;
  icon?: 'success' | 'none' | 'fail';
  mask?: boolean;
  duration?: number;
}

export default ({ title, icon, mask, duration = 3000 }: Options) =>
  new Promise(resolve => {
    showToast({
      icon: icon === 'fail' ? 'error' : icon,
      title,
      duration,
      mask,
      success: () => resolve(''),
    });
  });
