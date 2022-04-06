import { useQuery } from 'remax';
import qs from 'qs';
import { useCallback, useMemo } from 'react';

interface Options {
  /**
   * `#`号前面的地址，默认当前host
   */
  host?: string;
  /**
   * 跳转路径
   */
  path?: string;
  /**
   * 传递的参数
   */
  params?: any;
  /**
   * 跳转成功的回跳地址，默认为当前页面
   */
  backUrl?: string;
  /**
   * 是否跳转
   * @default true
   */
  run?: boolean;
}

type Return = [any, (data: any) => void] | [any];

export const returns = ({}: Return) => {};

export default ({
  path,
  params,
  host = `${window.location.origin}${window.location.pathname}`,
  backUrl = window.location.href,
  run = true,
}: Options = {}): Return => {
  const query = useMemo(() => useQuery(), []);
  const { backSuccess } = query;
  const key = `${window.location.pathname}-backUrl`;
  const storageUrl = sessionStorage[key];
  if (backSuccess && !storageUrl && query.backUrl) {
    sessionStorage.setItem(key, query.backUrl);
  }
  if (backSuccess || storageUrl) {
    return [
      query,
      useCallback(
        data => {
          sessionStorage.removeItem(key);
          window.location.replace(
            `${storageUrl}${storageUrl.includes('?') ? '&' : '?'}${qs.stringify(
              {
                ...data,
                backSuccess: 1,
              },
            )}`,
          );
        },
        [key, storageUrl],
      ),
    ];
  }
  if (path && run) {
    window.location.replace(
      `${host}#${path}${path.includes('?') ? '&' : '?'}${qs.stringify({
        ...query,
        ...params,
        backUrl,
        backSuccess: 1,
        // ...params,
      })}`,
    );
  }
  return [query];
};
