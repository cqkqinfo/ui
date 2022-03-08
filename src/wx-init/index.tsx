import axios from '../axios';
import Sentry from '../sentry';
import isWx from '../is-wx';
const wx = require('weixin-js-sdk');

interface ConfigData {
  appId: string;
  timestamp: number;
  nonceStr: string;
  signature: string;
  openTagList?: string[];
}

let initResolve: () => void;

export const initData = {
  pending: new Promise<void>(resolve => (initResolve = resolve)),
};

wx.ready(() => {
  initResolve();
});

export default ({
  apiUrl,
  configData,
}: {
  apiUrl?: string;
  configData?: ConfigData;
}) =>
  new Promise((resolve, reject) => {
    const data = new FormData();
    const url = window.location.href.split('#')[0] || window.location.href;
    data.append('url', url);
    const init = async () => {
      let config: any;
      if (configData) {
        config = configData;
      } else {
        await axios
          .post(
            apiUrl ||
              '//ih.cqkqinfo.com/api/ehis/health/api/inquiry/getJsApiConfig?platformId=2214',
            data,
          )
          .then(({ data: { data } }: any) => {
            config = {
              debug: false,
              beta: true,
              ...data,
              url: decodeURIComponent(data.url),
              nonceStr: data.noncestr,
            };
          });
      }
      wx.config({
        ...config,
        jsApiList: [...Object.keys(wx), 'requestWxFacePictureVerify'],
        openTagList: configData?.openTagList || ['wx-open-launch-weapp'],
      });
      Sentry.setExtra('wxConfig', config);
      wx.error((res: any) => {
        Sentry.setExtra('wxError', res);
      });
      resolve({});
    };
    if (isWx) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (!window.WeixinJSBridge) {
        document.addEventListener('WeixinJSBridgeReady', () => {
          init();
        });
      } else {
        init();
      }
    }
  });
