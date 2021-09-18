import { CascaderOptionType, options } from '../address-options';

export default (arr: Array<string | number> = []) => {
  const strArr: string[] = [];
  let index = 0;
  const fn = (options: CascaderOptionType[]) =>
    options.find(({ value, label, children }) => {
      const is = value === arr[index];
      if (is) {
        strArr.push(label + '');
        index++;
      }
      if (children) {
        fn(children);
      }
      return is;
    });
  fn(options);
  return strArr.join('-');
};
