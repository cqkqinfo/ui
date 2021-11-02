import _provinces from 'china-division/dist/provinces.json';
import _cities from 'china-division/dist/cities.json';
import _areas from 'china-division/dist/areas.json';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';

const provinces = JSON.parse(JSON.stringify(_provinces)) as typeof _provinces;
const cities = JSON.parse(JSON.stringify(_cities)) as typeof _cities;
const areas = JSON.parse(JSON.stringify(_areas)) as typeof _areas;

export interface CascaderOptionType {
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

export const options: CascaderOptionType[] = JSON.parse(
  JSON.stringify(
    provinces.map((province: CascaderOptionType) => ({
      label: province.name,
      value: province.code,
      children: province.children,
    })),
  ),
);

export default options as PickerData[];
