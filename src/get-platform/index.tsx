export default (process.env.REMAX_PLATFORM as
  | 'web'
  | 'wechat'
  | 'ali'
  | 'toutiao') || 'web';
