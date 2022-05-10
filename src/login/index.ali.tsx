import { getAuthCode } from 'remax/ali';

export default async () => {
  const res = await getAuthCode({
    scopes: ['auth_user', 'hospital_order'],
  });
  return { authCode: res.authCode };
};
