import { RichTextProps } from 'remax/wechat';

export default ({ nodes = '', ...props }: RichTextProps) => {
  return {
    ...props,
    nodes:
      nodes +
      ''
        ?.replace(/\.(png)|(jpg)/gi, `.$1?x-oss-process=image/resize,w_${1080}`)
        ?.replace(/<img/, '<img style="width: 100%"'),
  };
};
