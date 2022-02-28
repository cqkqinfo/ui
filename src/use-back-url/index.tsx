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

type Return = [any, (data: any) => void] | [];

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
  if (backSuccess) {
    pageData.callback = data => {
      window.location.href = `${query.backUrl}?${qs.stringify(data)}`;
    };
    return [query, pageData.callback];
  }
  window.location.href = `${host}#${path}?${qs.stringify({
    backUrl,
    backSuccess: 1,
    ...params,
  })}`;
  return [];
};
