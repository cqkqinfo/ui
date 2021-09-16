import { login } from 'remax/wechat';

export default (data?: {
  code?: string;
}): Promise<{ code?: string; openId?: string }> => login();
