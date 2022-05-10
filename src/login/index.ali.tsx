import { getAuthCode } from 'remax/ali';

export default async () => {
  const res = await getAuthCode({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scopes: ['auth_user', 'hospital_order'],
  });
  return { authCode: res.authCode };
};
