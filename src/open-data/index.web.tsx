import { OpenDataProps } from '@remax/wechat/esm/hostComponents/OpenData';
import { Image } from 'remax/one';
import commonImg from '../common-img';
import React from 'react';

export default ({ type, ...props }: OpenDataProps) => {
  if (type === 'userAvatarUrl') {
    return (
      <Image
        {...(props as any)}
        style={{ width: '100%', height: '100%' }}
        src={commonImg.mrtx}
      />
    );
  }
  return null;
};
