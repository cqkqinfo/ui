import { getStorageSync } from 'remax/ali';

export default (key: string) =>
  getStorageSync({
    /**
     * 缓存数据的key
     */
    key,
  }).data;
