import React from 'react';
import { View, Image, Text, navigateBack } from 'remax/one';
import { Button, useFaceVerify } from '@kqinfo/ui';
import styles from './index.module.less';
import { useTitle } from 'parsec-hooks';
import { Options, FaceVerifyStatus } from '../use-face-verify';
import icon from './icon.png';

export interface Props extends Options {
  /**
   * 成功事件
   */
  onSuccess?: () => {};
}

export default ({ onSuccess, ...options }: Props) => {
  useTitle('人脸识别');
  const { handleFaceVerify, faceVerifyStatus } = useFaceVerify(options);
  return (
    <View className={styles.wrap}>
      <View className={styles.title}>人脸识别</View>
      <Image
        src={
          faceVerifyStatus === FaceVerifyStatus.成功
            ? 'https://kq-static.oss-cn-beijing.aliyuncs.com/ui/faceSuccess.png'
            : 'https://kq-static.oss-cn-beijing.aliyuncs.com/ui/face.png'
        }
        className={styles.face}
        mode="widthFix"
      />
      <View className={styles.tip}>
        {faceVerifyStatus !== FaceVerifyStatus.成功 && (
          <>
            <Image src={icon} className={styles.icon} mode="widthFix" />
            <Text className={styles['tip-text']}>水平拍照，正对光源</Text>
          </>
        )}
      </View>
      {faceVerifyStatus === FaceVerifyStatus.成功 ? (
        <Button type="primary" onTap={() => navigateBack()}>
          人脸认证成功，点击返回
        </Button>
      ) : (
        <Button type="primary" onTap={() => handleFaceVerify()}>
          开始人脸验证
        </Button>
      )}
    </View>
  );
};
