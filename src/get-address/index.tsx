import getAddressOptions from '../get-address-options';
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker/cascade-picker';

let options: CascadePickerOption[] = [];

getAddressOptions().then(values => (options = values));

export default (arr: Array<string | number> = []) => {
  const strArr: string[] = [];
  let index = 0;
  const fn = (options: CascadePickerOption[]) =>
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
