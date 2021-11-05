import React, { useRef } from 'react';
import { Image, Text, View } from 'remax/one';
import {
  Space,
  BackgroundImg,
  QrCode,
  Sheet,
  Button,
  hideTabBar,
  showTabBar,
} from '@kqinfo/ui';
import classNames from 'classnames';
import styles from './index.module.less';
import { SheetInstance } from '../sheet';

export interface Props {
  /**
   * 患者姓名
   */
  patientName?: string;
  /**
   * 就诊号
   */
  patCardNo?: string;
  className?: string;
  /**
   * 医院名称
   */
  hisName?: string;
  onTap?: (e: any) => void;
}

export default ({
  hisName,
  patientName,
  patCardNo,
  onTap,
  className,
}: Props) => {
  const ref = useRef<SheetInstance>(null);
  return (
    <Space
      vertical
      alignItems="center"
      className={classNames(styles.card, className)}
      onTap={onTap}
    >
      <Sheet ref={ref} center>
        <Space
          vertical
          size={20}
          className={styles.modal}
          alignItems={'center'}
        >
          <Space>
            {patientName}丨{patCardNo}
          </Space>
          <QrCode content={patCardNo || ''} className={styles.modalImg} />
          <Space alignSelf={'stretch'}>
            <Button
              ghost
              type={'primary'}
              onTap={() => {
                ref.current?.setVisible(false);
                showTabBar();
              }}
            >
              关闭
            </Button>
          </Space>
        </Space>
      </Sheet>
      <BackgroundImg
        img={`https://tihs.cqkqinfo.com/patients/p40009-his/images/jzk.png`}
        className={styles.jzk}
      >
        <Space vertical className={styles.content} justify="center">
          <Space alignItems="center">
            <Image
              src={`https://tihs.cqkqinfo.com/patients/p40009-his/images/mine/logo.png`}
              className={styles.logo}
            />
            <Text className={styles.title}>电子就诊卡</Text>
          </Space>
          <Space justify="space-between" alignItems="flex-end">
            <Space vertical justify="flex-end">
              <View className={styles.text2}>
                就诊人
                <Text className={styles.bold}>{patientName}</Text>
              </View>
              <View className={styles.text}>
                就诊号
                <Text className={styles.bold}>{patCardNo}</Text>
              </View>
            </Space>
            <Space
              className={styles.qrcode}
              onTap={(e: any) => {
                e.stopPropagation();
                ref.current?.setVisible(true);
                hideTabBar();
              }}
              justify="center"
              alignItems="center"
            >
              <QrCode content={patCardNo || ''} className={styles.qrcodeImg} />
            </Space>
          </Space>
          <Space justify="center" className={styles.hospital}>
            {hisName}
          </Space>
        </Space>
      </BackgroundImg>
    </Space>
  );
};
