import { CascaderOptionType, options } from '../address-options';

export default (value = '') => {
  const valueArr = value?.split('-');
  const strArr: string[] = [];
  let index = 0;
  const fn = (options: CascaderOptionType[]) =>
    options.find(({ value, label, children }) => {
      const is = label === valueArr?.[index];
      if (is) {
        strArr.push(value + '');
        index++;
      }
      if (children) {
        fn(children);
      }
      return is;
    });
  fn(options);
  return strArr;
};
