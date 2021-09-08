import { uploadFile } from 'remax/wechat';
import axios from '../axios';

const fn: typeof uploadFile = ({
  formData: data,
  filePath,
  name,
  url,
}: any) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  formData.append(name, filePath, filePath.name);
  return axios.post(url, formData, {
    headers: { Accept: '*/*' },
  });
};

export default fn;
