import axios from '../axios';

export default ({
  formData: data,
  name,
  url,
}: WechatMiniprogram.UploadFileOption) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  formData.append(name, data.file, data.file.name);
  return axios
    .post(url, formData, {
      headers: { Accept: '*/*' },
    })
    .then(res => JSON.stringify(res));
};
