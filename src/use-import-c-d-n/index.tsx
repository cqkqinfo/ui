import { useEffect, useState } from 'react';
import importCDN from '../import-c-d-n';

export default function<D = any>(
  link: string,
  name: string,
  callBack?: (js: D) => void,
) {
  const [code, setCode] = useState<D>();
  useEffect(() => {
    importCDN(link, name, code => {
      callBack?.(code);
      setCode(code);
    });
  }, [link, name, callBack]);
  return code;
}
