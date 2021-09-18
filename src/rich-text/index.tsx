import React from 'react';
import { RichTextProps } from 'remax/wechat';
import useProps from './useProps';
import classNames from 'classnames';
import styles from './index.module.less';

export default (props: RichTextProps) => {
  const { nodes, className, ...newProps } = useProps(props);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: nodes as string }}
      {...(newProps as any)}
      className={classNames(className, styles.wrap)}
    />
  );
};
