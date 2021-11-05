import { useCallback, useState } from 'react';

export enum FaceVerifyStatus {
  '未开始' = -1,
  '失败',
  '成功',
}

export default ({
  name,
  no,
}: {
  /**
   * 姓名
   */
  name: string;
  /**
   * 身份证号
   */
  no: string;
}) => {
  const [faceVerifyStatus, setFaceVerifyStatus] = useState<FaceVerifyStatus>(
    FaceVerifyStatus.未开始,
  );
  const handleFaceVerify = useCallback(
    () =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        wx.startFacialRecognitionVerify({
          name,
          idCardNumber: no,
          checkAliveType: 2,
          success: (e: any) => {
            setFaceVerifyStatus(FaceVerifyStatus.成功);
            resolve(e);
          },
          fail: (e: any) => {
            setFaceVerifyStatus(FaceVerifyStatus.失败);
            reject(e);
          },
        });
      }),
    [name, no],
  );
  return { handleFaceVerify, faceVerifyStatus };
};
