import { RichTextProps } from 'remax/wechat';
import classNames from 'classnames';
import styles from '@/rich-text/index.less';

export default ({
  nodes = '',
  space = 'ensp',
  className,
  ...props
}: RichTextProps) => {
  return {
    ...props,
    className: classNames(className, styles.text),
    space,
    nodes:
      nodes +
      ''
        ?.replace(/\.(png)|(jpg)/gi, `.$1?x-oss-process=image/resize,w_${1080}`)
        ?.replace(
          /<img/,
          '<img style="width: 100%;margin-top: 20px;margin-bottom: 20px;"',
        ),
  };
};
