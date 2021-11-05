import { requirePlugin, usePageEvent } from 'remax/macro';
import { createInnerAudioContext } from 'remax/wechat';
import { useCallback, useState } from 'react';
import showToast from '../show-toast';

/** 微信同声转译文档： https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx069ba97219f66d99&token=&lang=zh_CN#- */
const plugin = requirePlugin('WechatSI');

export interface TextSpeechType {
  /** 语音合成链接超时时间戳 如1525930552，超时后无法播放，可使用时间为3小时 */
  expired_time: number;
  /** 语音合成返回的语音地址，可自行下载使用 */
  filename: string;
  /** 原始文本 */
  origin: string;
  /** retcode == 0 时请求成功 */
  retcode: number;
}

export interface errorType {
  /** -20001语音合成语言格式出错, -20002输入的待合成格式不正确, -20003语音合成内部错误, -20005网络错误, -40001接口调用频率达到限制，请联系插件开发者*/
  retcode: -20001 | -20002 | -20003 | -20005 | -40001;
  /** 错误信息 */
  msg: string;
}

let audioContext: any;
let stopFn: any;

export default () => {
  const [TTSpaying, setPaying] = useState(false);
  const closeTTS = useCallback(() => {
    setPaying(false);
    audioContext?.stop();
    audioContext?.destroy();
  }, []);
  const textAudioStatus = useCallback(
    (src: string) => {
      closeTTS();
      audioContext = createInnerAudioContext();
      audioContext.src = src; //设置音频地址
      audioContext.play(); //播放音频
      setPaying(true);
      audioContext.onEnded(() => {
        // 播放停止，销毁该实例,不然会出现多个语音重复执行的情况
        // console.log('播放结束');
        closeTTS();
      });
      audioContext.onStop(() => {
        // console.log('播放停止');
        closeTTS();
      });
      audioContext.onError((e: any) => {
        console.error(e);
        closeTTS();
      });
    },
    [closeTTS],
  );
  const playTTS = useCallback(
    (text: string) => {
      stopFn?.();
      stopFn = () => setPaying(false);
      plugin.textToSpeech({
        lang: 'zh_CN', //代表中文
        tts: true, //是否对翻译结果进行语音合成，默认为false，不进行语音合成
        content: text, //要转为语音的文字
        success: (res: TextSpeechType) => {
          closeTTS();
          // console.log('succ tts', res);
          if (res.filename) {
            textAudioStatus(res.filename); //将文字转为语音后的路径地址
          }
        },
        fail: (res: errorType) => {
          showToast({
            icon: 'none',
            title: res.msg || '语音播放失败，请稍后重试!',
          });
        },
      });
    },
    [closeTTS, textAudioStatus],
  );
  usePageEvent('onHide', closeTTS);
  return {
    TTSpaying,
    playTTS,
    closeTTS,
    TTSImg: TTSpaying
      ? 'https://tihs.cqkqinfo.com/patients/p40009-his/images/home/ear.gif'
      : 'https://tihs.cqkqinfo.com/patients/p40009-his/images/home/ear.png',
    toggleTTS: useCallback(
      (text: string) => {
        if (TTSpaying) {
          closeTTS();
        } else {
          playTTS(text);
        }
      },
      [TTSpaying, closeTTS, playTTS],
    ),
  };
};
