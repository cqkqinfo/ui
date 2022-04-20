import React from 'react';
import { navigateTo } from 'remax/one';
import { Props } from './index';
import getAccountInfoSync from '../get-account-info-sync';
import { isWXAppInstalled, launchMiniProgram } from 'react-native-wechat-lib';
import showToast from '../show-toast';

export default ({
  appId = getAccountInfoSync().miniProgram.appId,
  path,
  onLaunch,
  children,
  style,
  username,
  ...props
}: Props) => {
  return children
    ? React.cloneElement(children, {
        ...children.props,
        ...props,
        style: {
          ...children.props?.style,
          ...style,
        },
        onTap: (e: any) => {
          props.onTap?.(e);
          children.props.onTap?.(e);
          if (path) {
            if (appId === getAccountInfoSync().miniProgram.appId) {
              navigateTo({ url: path }).then(onLaunch);
            } else if (username) {
              isWXAppInstalled().then(installed => {
                if (installed) {
                  launchMiniProgram({
                    userName: username,
                    miniProgramType: 0, // 拉起小程序的类型. 0-正式版 1-开发版 2-体验版
                    path,
                  });
                } else {
                  showToast({
                    title: '请先安装微信',
                    icon: 'none',
                  });
                }
              });
            }
          }
        },
      })
    : children;
};
