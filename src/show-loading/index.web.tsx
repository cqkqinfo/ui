import { Toast } from 'antd-mobile';

export default ({ title } = {} as WechatMiniprogram.ShowLoadingOption) => {
  Toast.show({
    icon: 'loading',
    duration: 9999999,
  });
  return Promise.resolve();
};
