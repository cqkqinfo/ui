/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
// @ts-ignore
import Iconfont_wechat from './wechat/wechat';

interface Props {
  name:
    | 'kq-bukanjian'
    | 'kq-kanjian'
    | 'kq-jiankang'
    | 'kq-rili'
    | 'kq-zhibo'
    | 'kq-chuangzuo'
    | 'kq-yisheng'
    | 'kq-weixin'
    | 'kq-eye'
    | 'kq-zan'
    | 'kq-shoucang'
    | 'kq-shuaxin'
    | 'kq-tongzhi'
    | 'kq-home'
    | 'kq-yiyuan'
    | 'kq-keshi'
    | 'kq-mobile'
    | 'kq-left'
    | 'kq-filter'
    | 'kq-jia'
    | 'kq-album'
    | 'kq-biaoqing'
    | 'kq-voice'
    | 'kq-xiangji'
    | 'kq-xingxing'
    | 'kq-tip'
    | 'kq-jianshao'
    | 'kq-zengjia'
    | 'kq-right'
    | 'kq-home-solid'
    | 'kq-monitor'
    | 'kq-notice'
    | 'kq-add'
    | 'kq-clear'
    | 'kq-clear2'
    | 'kq-yes'
    | 'kq-search'
    | 'kq-down'
    | 'kq-loading2'
    | 'kq-loading';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = props => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  // @ts-ignore
  return <Iconfont_wechat name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
