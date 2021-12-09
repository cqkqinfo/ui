export default (obj: {
  /**
   * 默认变量
   */
  default?: any;
  [key: string]: any;
}) => (v: string) => {
  const defaultValue = obj['default'];
  const value = obj[v] || defaultValue;
  if (typeof value === 'object' && defaultValue) {
    Object.keys(defaultValue).forEach(key => {
      if ((value as any)[key] === undefined) {
        (value as any)[key] = (defaultValue as any)[key];
      }
    });
  }
  return value;
};
