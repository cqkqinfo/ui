import { Toast } from 'antd-mobile';

export default ({ title }: WechatMiniprogram.ShowLoadingOption) => {
  Toast.loading(title, 9999999);
  return Promise.resolve();
};
