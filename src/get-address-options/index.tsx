import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';
import axios from '../axios';

export interface CascaderOptionType {
  value?: string;
  label?: React.ReactNode;
  children?: Array<CascaderOptionType>;
  [key: string]: any;
}

let areas: any;
let transform = false;
let options: any = [];

export default async () => {
  if (!areas) {
    areas = [];
    ({ data: areas } = await axios.get(
      'https://kq-static.oss-cn-beijing.aliyuncs.com/ui/areas.json',
    ));
    if (!transform) {
      transform = true;
      areas.forEach((area: any) => {
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
    }
  }
  if (!options.length) {
    options = provinces.map((province: CascaderOptionType) => ({
      label: province.name,
      value: province.code,
      children: province.children,
    }));
  }

  return JSON.parse(JSON.stringify(options)) as PickerData[];
};
