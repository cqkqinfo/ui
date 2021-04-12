import { Toast } from 'antd-mobile';

export default ({ icon = 'success', title, duration, mask = false }: any) =>
  new Promise(resolve => {
    if (icon === 'none') {
      Toast.show(title, duration, mask);
      setTimeout(resolve, duration);
    } else {
      Toast.success(title, duration, () => resolve(''), mask);
    }
  });
