import getAddressOptions from '../get-address-options';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';

let options: PickerData[] = [];

getAddressOptions().then(values => (options = values));

export default (arr: Array<string | number> = []) => {
  const strArr: string[] = [];
  let index = 0;
  const fn = (options: PickerData[]) =>
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
