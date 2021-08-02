import getStorageSync from '../get-storage-sync';
import setStorageSync from '../set-storage-sync';
import qs from 'qs';

export default ({ code = 'ff8080816f9c207c0170a34c50ba00dc' }) => {
  const openId = getStorageSync('openId');
  const params = qs.parse(window.location.href.split('#')[0].split('?')[1]);
  if (params.openId || params.openid) {
    const openId = params.openId || params.openid;
    setStorageSync('openId', openId);
    window.location.href = window.location.href
      .replace(`openId=${openId}`, '')
      .replace(`openid=${openId}`, '');
    return Promise.reject({});
  }
  if (openId) {
    return Promise.resolve({ openId });
  }
  window.location.href = `https://wx.cqkqinfo.com/wx/wechat/authorize/${code}?scope=snsapi_userinfo`;
  return Promise.reject({});
};
