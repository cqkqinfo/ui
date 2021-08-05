/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import KqShijian from './KqShijian';
import KqZhuanlan from './KqZhuanlan';
import KqZhizhen from './KqZhizhen';
import KqTime from './KqTime';
import KqBukanjian from './KqBukanjian';
import KqKanjian from './KqKanjian';
import KqJiankang from './KqJiankang';
import KqRili from './KqRili';
import KqZhibo from './KqZhibo';
import KqChuangzuo from './KqChuangzuo';
import KqYisheng from './KqYisheng';
import KqWeixin from './KqWeixin';
import KqEye from './KqEye';
import KqZan from './KqZan';
import KqShoucang from './KqShoucang';
import KqShuaxin from './KqShuaxin';
import KqTongzhi from './KqTongzhi';
import KqHome from './KqHome';
import KqYiyuan from './KqYiyuan';
import KqKeshi from './KqKeshi';
import KqMobile from './KqMobile';
import KqLeft from './KqLeft';
import KqFilter from './KqFilter';
import KqJia from './KqJia';
import KqAlbum from './KqAlbum';
import KqBiaoqing from './KqBiaoqing';
import KqVoice from './KqVoice';
import KqXiangji from './KqXiangji';
import KqXingxing from './KqXingxing';
import KqTip from './KqTip';
import KqJianshao from './KqJianshao';
import KqZengjia from './KqZengjia';
import KqRight from './KqRight';
import KqHomeSolid from './KqHomeSolid';
import KqMonitor from './KqMonitor';
import KqNotice from './KqNotice';
import KqAdd from './KqAdd';
import KqClear from './KqClear';
import KqClear2 from './KqClear2';
import KqYes from './KqYes';
import KqSearch from './KqSearch';
import KqDown from './KqDown';
import KqLoading2 from './KqLoading2';
import KqLoading from './KqLoading';

export type IconNames =
  | 'kq-shijian'
  | 'kq-zhuanlan'
  | 'kq-zhizhen'
  | 'kq-time'
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

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'kq-shijian':
      return <KqShijian {...rest} />;
    case 'kq-zhuanlan':
      return <KqZhuanlan {...rest} />;
    case 'kq-zhizhen':
      return <KqZhizhen {...rest} />;
    case 'kq-time':
      return <KqTime {...rest} />;
    case 'kq-bukanjian':
      return <KqBukanjian {...rest} />;
    case 'kq-kanjian':
      return <KqKanjian {...rest} />;
    case 'kq-jiankang':
      return <KqJiankang {...rest} />;
    case 'kq-rili':
      return <KqRili {...rest} />;
    case 'kq-zhibo':
      return <KqZhibo {...rest} />;
    case 'kq-chuangzuo':
      return <KqChuangzuo {...rest} />;
    case 'kq-yisheng':
      return <KqYisheng {...rest} />;
    case 'kq-weixin':
      return <KqWeixin {...rest} />;
    case 'kq-eye':
      return <KqEye {...rest} />;
    case 'kq-zan':
      return <KqZan {...rest} />;
    case 'kq-shoucang':
      return <KqShoucang {...rest} />;
    case 'kq-shuaxin':
      return <KqShuaxin {...rest} />;
    case 'kq-tongzhi':
      return <KqTongzhi {...rest} />;
    case 'kq-home':
      return <KqHome {...rest} />;
    case 'kq-yiyuan':
      return <KqYiyuan {...rest} />;
    case 'kq-keshi':
      return <KqKeshi {...rest} />;
    case 'kq-mobile':
      return <KqMobile {...rest} />;
    case 'kq-left':
      return <KqLeft {...rest} />;
    case 'kq-filter':
      return <KqFilter {...rest} />;
    case 'kq-jia':
      return <KqJia {...rest} />;
    case 'kq-album':
      return <KqAlbum {...rest} />;
    case 'kq-biaoqing':
      return <KqBiaoqing {...rest} />;
    case 'kq-voice':
      return <KqVoice {...rest} />;
    case 'kq-xiangji':
      return <KqXiangji {...rest} />;
    case 'kq-xingxing':
      return <KqXingxing {...rest} />;
    case 'kq-tip':
      return <KqTip {...rest} />;
    case 'kq-jianshao':
      return <KqJianshao {...rest} />;
    case 'kq-zengjia':
      return <KqZengjia {...rest} />;
    case 'kq-right':
      return <KqRight {...rest} />;
    case 'kq-home-solid':
      return <KqHomeSolid {...rest} />;
    case 'kq-monitor':
      return <KqMonitor {...rest} />;
    case 'kq-notice':
      return <KqNotice {...rest} />;
    case 'kq-add':
      return <KqAdd {...rest} />;
    case 'kq-clear':
      return <KqClear {...rest} />;
    case 'kq-clear2':
      return <KqClear2 {...rest} />;
    case 'kq-yes':
      return <KqYes {...rest} />;
    case 'kq-search':
      return <KqSearch {...rest} />;
    case 'kq-down':
      return <KqDown {...rest} />;
    case 'kq-loading2':
      return <KqLoading2 {...rest} />;
    case 'kq-loading':
      return <KqLoading {...rest} />;
  }

  return null;
};

export default IconFont;
