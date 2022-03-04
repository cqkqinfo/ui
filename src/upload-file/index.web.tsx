import axios from '../axios';

export default ({
  formData: data,
  filePath,
  name,
  url,
}: WechatMiniprogram.UploadFileOption) => {
  const formData = new FormData();
  Object.keys(data as any).forEach(key => {
    formData.append(key, (data as any)[key]);
  });
  formData.append(name, filePath, (filePath as any).name);
  return axios
    .post(url, formData, {
      headers: { Accept: '*/*' },
    })
    .then(res => JSON.stringify(res));
};
