import createApiHooks from 'create-api-hooks';
import axios from '../axios';

export default {
  通过openid登录: createApiHooks(
    (data: { openId?: string; code?: string; rawData?: any }) => {
      return axios.post<{
        code: number;
        openid: string;
        hasBind: 0 | 1;
        login_access_token: string;
      }>('/api/ihis/user/login/authorization', undefined, {
        params: data,
      });
    },
  ),
};
