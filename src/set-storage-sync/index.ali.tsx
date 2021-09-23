import { setStorageSync } from 'remax/ali';

export default (key: string, data: any) =>
  setStorageSync({
    /**
     * 缓存数据的key
     */
    key,

    /**
     * 要缓存的数据
     */
    data,
  });
