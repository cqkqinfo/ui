import { useQuery } from 'remax';
import qs from 'qs';
import setStorageSync from '../set-storage-sync';
import getStorageSync from '../get-storage-sync';
import removeStorageSync from '../remove-storage-sync';

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

const pageData = {
  callback: (data: any) => {},
};

export default ({
  path,
  params,
  host = `${window.location.origin}${window.location.pathname}`,
  backUrl = window.location.href,
}: Options = {}): Return => {
  const { backSuccess, ...query } = useQuery();
  const storageUrl = getStorageSync('backUrl');
  if (backSuccess && !storageUrl) {
    setStorageSync('backUrl', query.backUrl);
  }
  if (backSuccess || storageUrl) {
    return [
      query,
      data => {
        removeStorageSync('backUrl');
        window.location.href = `${storageUrl}${
          storageUrl.includes('?') ? '&' : '?'
        }${qs.stringify({
          ...data,
          backSuccess: 1,
        })}`;
      },
    ];
  }
  if (path) {
    window.location.href = `${host}#${path}${
      path.includes('?') ? '&' : '?'
    }${qs.stringify({
      ...query,
      ...params,
      backUrl,
      backSuccess: 1,
      // ...params,
    })}`;
  }
  return [{}];
};
