import { getAuthCode } from 'remax/ali';

export default async (data?: { aliScopes?: string[] }) => {
  const res = await getAuthCode({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scopes: data?.aliScopes || ['auth_user'],
  });
  return { authCode: res.authCode };
};
