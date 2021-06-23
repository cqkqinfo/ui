import axios from '../axios';
import Sentry from '../sentry';
const wx = require('weixin-js-sdk');

export default () => {
  const data = new FormData();
  const url = encodeURIComponent(
    window.location.href.split('#')[0] || window.location.href,
  );
  data.append('url', url);
  return axios
    .post('//ih.cqkqinfo.com/api/ehis/health/api/inquiry/getJsApiConfig', data)
    .then(({ data: { data } }) => {
      const config = {
        debug: false,
        beta: true,
        ...data,
        nonceStr: data.noncestr,
      };
      wx.config(config);
      Sentry.setExtra('wxConfig', config);
      wx.error((res: any) => {
        Sentry.setExtra('wxError', res);
      });
    });
};
