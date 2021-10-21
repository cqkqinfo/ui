import getAddressOptions from '../get-address-options';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';

let options: PickerData[] = [];

getAddressOptions().then(values => (options = values));

export default (value = '') => {
  const valueArr = value?.split('-');
  const strArr: string[] = [];
  let index = 0;
  const fn = (options: PickerData[]) =>
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
