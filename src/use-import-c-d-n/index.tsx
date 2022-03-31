import { useEffect, useState } from 'react';
import importCDN from '../import-c-d-n';

export default function<D = any>(
  /**
   * cdn链接
   */
  link: string,
  /**
   * 引入的js文件名
   */
  name: string,
  /**
   * 是否是es6模块
   */
  es6?: boolean,
) {
  const [code, setCode] = useState<D>();
  useEffect(() => {
    importCDN(
      link,
      name,
      code => {
        setCode(code);
      },
      es6,
    );
  }, [es6, link, name]);
  return code;
}
