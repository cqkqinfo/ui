import { useCallback, useState } from 'react';

export enum FaceVerifyStatus {
  '未开始' = -1,
  '失败',
  '成功',
}

export interface Options {
  /**
   * 姓名，小程序需要
   */
  name?: string;
  /**
   * 身份证号，小程序需要
   */
  no?: string;
  /**
   * web端需要，用户身份信息
   */
  request_verify_pre_info?: string;
  /**
   * web端需要，公众id
   */
  appid?: string;
}

export default ({ name, no, request_verify_pre_info, appid }: Options) => {
  const [faceVerifyStatus, setFaceVerifyStatus] = useState<FaceVerifyStatus>(
    FaceVerifyStatus.失败,
  );
  const handleFaceVerify = useCallback(
    () =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        wx.invoke(
          'requestWxFacePictureVerify',
          {
            appid,
            check_alive_type: 2,
            request_verify_pre_info,
          },
          (data: any) => {
            const { err_code } = data;
            if ([0, '0'].includes(err_code)) {
              setFaceVerifyStatus(FaceVerifyStatus.成功);
              resolve(data);
            } else {
              setFaceVerifyStatus(FaceVerifyStatus.失败);
              reject(data);
            }
          },
        );
      }),
    [appid, request_verify_pre_info],
  );
  return { handleFaceVerify, faceVerifyStatus };
};
