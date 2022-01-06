import axios from '../axios';

export default ({
  formData: data,
  name,
  url,
}: WechatMiniprogram.UploadFileOption) => {
  const formData = new FormData();
  Object.keys(data as any).forEach(key => {
    formData.append(key, (data as any)[key]);
  });
  formData.append(name, (data as any).file, (data as any).file.name);
  return axios
    .post(url, formData, {
      headers: { Accept: '*/*' },
    })
    .then(res => JSON.stringify(res));
};
