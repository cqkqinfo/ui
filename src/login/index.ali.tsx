import { getAuthCode } from 'remax/ali';

export default async () => {
  const res = await getAuthCode({
    scopes: ['auth_user'],
  });
  return { authCode: res.authCode };
};
