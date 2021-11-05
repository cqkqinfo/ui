import React from 'react';
import { View } from 'remax/one';
import { Space, BackgroundImg, CommonImg, QrCode } from '@kqinfo/ui';
import styles from './index.module.less';

export interface Props {
  /**
   * 患者姓名
   */
  patientName?: string;
  /**
   * 健康卡号
   */
  patCardNo?: string;
}

export default (props: Props) => {
  return (
    <Space vertical alignItems="center" className={styles.card}>
      <BackgroundImg img={CommonImg.healthCard} className={styles.jkk}>
        <Space
          className={styles.content}
          justify="space-between"
          alignItems="flex-end"
        >
          <Space vertical>
            <View className={styles.name}>{props?.patientName}</View>
            <View className={styles.idno}>{props?.patCardNo}</View>
          </Space>
          <QrCode
            modalTitle={'电子健康卡'}
            content={props.patCardNo || ''}
            showModal
            className={styles.img}
          />
        </Space>
      </BackgroundImg>
    </Space>
  );
};
