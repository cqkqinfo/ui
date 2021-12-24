import React, { useState } from 'react';
import { View, navigateTo, reLaunch, navigateBack } from 'remax/one';
import OpenData from '../open-data';
import Button from '../button';
import CheckBox from '../check-box';
import Space from '../space';
import OpenTypeButton, { GetUserInfoData } from '../open-type-button';
import login, { LoginData } from '../login';
import ColorText from '../color-text';
import Image from '../image';
import styles from './index.module.less';

export interface Props {
  /**
   * 授权医院
   */
  hisName: React.ReactNode;
  /**
   * 医院code，web端授权会用到
   */
  hisCode?: string;
  /**
   * 授权事件
   */
  onAuthorization: (data: LoginData & GetUserInfoData) => Promise<any>;
  /**
   * 医院logo，设置后将不会显示用户头像
   */
  logo?: string;
  /**
   * 用户协议链接
   */
  agreementUrl?: string;
  /**
   * 首页链接，点击暂不授权将会跳到首页
   */
  homeUrl?: string;
}

export default ({
  hisName,
  onAuthorization,
  hisCode,
  logo,
  homeUrl,
  agreementUrl,
}: Props) => {
  const [check, setCheck] = useState(true);
  const [btnCheck, setBtcCheck] = useState(true);
  return (
    <View className={styles.page}>
      <View className={styles.title}>{hisName}授权</View>
      <View className={styles.subTitle}>需要您授权信息后才可以继续操作</View>
      <Space justify="center">
        {logo ? (
          <Image className={styles.img} mode="aspectFit" src={logo} />
        ) : (
          <View className={styles.avatar}>
            <OpenData type="userAvatarUrl" />
          </View>
        )}
      </Space>
      <Space vertical size={20}>
        <OpenTypeButton
          type={'getUserInfo'}
          onGetUserInfo={userInfo => {
            setCheck(false);
            login({ code: hisCode })
              .then(loginData => onAuthorization({ ...loginData, ...userInfo }))
              .then(() => {
                navigateBack();
              })
              .catch(() => {
                setCheck(true);
              });
          }}
        >
          <Button type={'primary'} disable={!check || !btnCheck}>
            立即登录
          </Button>
        </OpenTypeButton>
        <Button
          onTap={() => {
            if (homeUrl) {
              reLaunch({
                url: homeUrl,
              });
            }
          }}
          type="default"
        >
          暂不授权
        </Button>
        <Space />
        <Space justify="center" alignItems="center" className={styles.protocol}>
          <CheckBox
            checked={check}
            onChange={() => {
              setCheck(!check);
              setBtcCheck(!btnCheck);
            }}
          />
          授权登录视为您已阅读并同意
          <ColorText
            onTap={() => {
              if (agreementUrl) {
                navigateTo({
                  url: agreementUrl,
                });
              }
            }}
          >
            《用户授权协议》
          </ColorText>
        </Space>
      </Space>
    </View>
  );
};
