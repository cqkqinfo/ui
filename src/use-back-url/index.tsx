import { useQuery } from 'remax';
import qs from 'qs';

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
}

type Return = [any, (data: any) => void] | [any];

export const returns = ({}: Return) => {};

export default ({
  path,
  params,
  host = `${window.location.origin}${window.location.pathname}`,
  backUrl = window.location.href,
}: Options = {}): Return => {
  const { backSuccess, ...query } = useQuery();
  const key = `${window.location.pathname}-backUrl`;
  const storageUrl = sessionStorage[key];
  if (backSuccess && !storageUrl && query.backUrl) {
    sessionStorage.setItem(key, query.backUrl);
  }
  if (backSuccess || storageUrl) {
    return [
      query,
      data => {
        sessionStorage.removeItem(key);
        window.location.replace(
          `${storageUrl}${storageUrl.includes('?') ? '&' : '?'}${qs.stringify({
            ...data,
            backSuccess: 1,
          })}`,
        );
      },
    ];
  }
  if (path) {
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
