import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';

interface CascaderOptionType {
  value?: string;
  label?: React.ReactNode;
  children?: Array<CascaderOptionType>;
  [key: string]: any;
}

areas.forEach(area => {
  const matchCity: CascaderOptionType = cities.filter(
    city => city.code === area.cityCode,
  )[0];
  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code,
    });
  }
});

cities.forEach((city: CascaderOptionType) => {
  const matchProvince: CascaderOptionType = provinces.filter(
    province => province.code === city.provinceCode,
  )[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children,
    });
  }
});

const options: CascaderOptionType[] = provinces.map(
  (province: CascaderOptionType) => ({
    label: province.name,
    value: province.code,
    children: province.children,
  }),
);

export const getAddress = (arr: Array<string | number> = []) => {
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

export default options as PickerData[];
