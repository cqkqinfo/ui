import showLoading from '../show-loading';
import uploadFile from '../upload-file';
import chooseImage from '../choose-image';
import showToast from '../show-toast';

export interface IdnoInfoType {
  address: string;
  birth: string;
  name: string;
  nationality: string;
  num: string;
  request_id: string;
  sex: string;
}

export default async ({
  basicPlatformToken,
}: {
  /**
   * 基础平台token
   */
  basicPlatformToken: string;
}) => {
  const {
    tempFilePaths: [file],
  } = await chooseImage({ count: 1 });
  showLoading({ title: '识别中...' });
  await uploadFile({
    url: `https://wx.cqkqinfo.com/basicapi/basic/ocr/ocrImage?basic_token=${basicPlatformToken}`,
    name: 'file',
    filePath: file,
    formData: {
      file,
    },
  }).then(({ data }: any) => {
    let ocr;
    if (typeof data === 'string') {
      ocr = JSON.parse(data).data;
    } else {
      ocr = data;
    }
    if (!ocr) {
      showToast({ title: '请上传清晰正确的身份证照片', icon: 'none' });
      return Promise.reject();
    }
    return ocr as IdnoInfoType;
  });
};
