import { login } from 'remax/wechat';

export interface LoginData {
  /**
   * 小程序返回code
   */
  code?: string;
  /**
   * web返回openid
   */
  openId?: string;
  /**
   * 阿里小程序返回authCode
   */
  authCode?: string;
}

export default (data?: { code?: string }): Promise<LoginData> => login();
