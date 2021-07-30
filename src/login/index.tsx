import { login } from 'remax/wechat';

export default (): Promise<{ code?: string; openId?: string }> => login();
