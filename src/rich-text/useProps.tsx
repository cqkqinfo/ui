import { RichTextProps } from 'remax/wechat';
import classNames from 'classnames';
import styles from './index.module.less';

export default ({
  nodes = '',
  space = 'nbsp',
  className,
  ...props
}: RichTextProps) => {
  return {
    ...props,
    className: classNames(className, styles.text),
    space,
    nodes: (nodes + '')
      ?.replace(/\.png/gi, `.png?x-oss-process=image/resize,w_${1080}`)
      ?.replace(/\.jpg/gi, `.jpg?x-oss-process=image/resize,w_${1080}`)
      ?.replace(/<img/g, '<img style="width: 100%"')
      ?.replace(/<p/g, '<p style="margin-top: 10px;margin-bottom: 10px;"'),
  };
};
