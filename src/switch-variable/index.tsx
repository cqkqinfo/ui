export const Obj = ({}: {
  /**
   * 正则字符串
   */
  key: string;
  /**
   * 匹配到的值
   */
  value: any;
}) => {};

/* eslint-disable @typescript-eslint/ban-types */
export default <T extends unknown>(
  obj: {
    /**
     * 默认变量
     */
    default?: T extends object ? Partial<T> : T;
    [key: string]: (T extends object ? Partial<T> : T) | undefined;
  },
  /**
   * 取key值
   */
  readKey = false,
) => (v: keyof typeof obj) => {
  const defaultValue = obj['default'];
  let value = defaultValue;
  Object.entries(obj).forEach(([key, itemValue]) => {
    if (readKey) {
      if (new RegExp(itemValue + '').test(v + '')) {
        value = key as any;
      }
    } else {
      if (new RegExp(key).test(v + '')) {
        value = obj[key];
      }
    }
  });
  if (typeof value === 'object' && typeof defaultValue === 'object') {
    Object.keys(defaultValue as any).forEach(key => {
      if ((value as any)[key] === undefined) {
        (value as any)[key] = (defaultValue as any)[key];
      }
    });
  }
  return value as T;
};
