import { useEffect } from 'react';
import { initData } from '../wx-init';
const wx = require('weixin-js-sdk');

export default ({
  title,
  path,
  imageUrl,
  desc,
}: WechatMiniprogram.Page.ICustomShareContent & { desc?: string }) => {
  useEffect(() => {
    const fn = async () => {
      await initData.pending;
      wx.updateAppMessageShareData({
        title, // 分享标题
        desc, // 分享描述
        link: path, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imageUrl, // 分享图标
      });
    };
    fn();
  }, [desc, imageUrl, path, title]);
};
