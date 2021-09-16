import getStorageSync from '../get-storage-sync';
import setStorageSync from '../set-storage-sync';
import { envVersion } from '../get-version';
import qs from 'qs';

export default ({ code = 'ff8080817a8bfc68017af6e31b270003' }) => {
  let openId = getStorageSync('openId');
  if (code !== getStorageSync('authorizeCode')) {
    openId = undefined;
  }
  if (envVersion === 'develop') {
    return Promise.resolve({ openId });
  }
  const params = qs.parse(window.location.href.split('?')[1]);
  if (params.openId) {
    const openId = params.openId;
    setStorageSync('openId', openId);
    window.location.href = window.location.href.replace(`openId=${openId}`, '');
    return Promise.resolve({});
  }
  if (openId) {
    return Promise.resolve({ openId });
  }
  setStorageSync('authorizeCode', code);
  window.location.href = `https://wx.cqkqinfo.com/wx/wechat/authorize/${code}?scope=snsapi_userinfo`;
  return Promise.resolve({});
};
