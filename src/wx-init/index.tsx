import axios from '../axios';
import Sentry from '../sentry';
import isWx from '../is-wx';
import versionVariable from '../version-variable';
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

setTimeout(() => {
  initResolve();
}, 1500);

export default ({
  platformId = '2214',
  apiUrl,
  configData,
}: {
  /**
   * 平台id
   * @default 2214
   */
  platformId?: string;
  /**
   * 自定义获取微信配置的接口
   * @default //ih.cqkqinfo.com/api/ehis/health/api/inquiry/getJsApiConfig
   */
  apiUrl?: string;
  /**
   * 手动传自定义微信配置
   */
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
              `//${versionVariable({
                develop: 'tih',
                release: 'ih',
              })}.cqkqinfo.com/api/ehis/health/api/inquiry/getJsApiConfig?platformId=${platformId}`,
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
        jsApiList: [...Object.keys(wx), 'requestWxFacePictureVerify'],
        openTagList: configData?.openTagList || ['wx-open-launch-weapp'],
        ...config,
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
