import React from 'react';
import { RichTextProps } from 'remax/wechat';
import useProps from './useProps';
import RenderHtml from 'react-native-render-html';
import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';
import styles from './index.module.less';

export default (props: RichTextProps) => {
  const { nodes, style } = useProps(props);
  return (
    <RenderHtml
      source={{
        html: `<div style='${plainStyle({
          // ...style,
          ...styles.wrap,
          ...styles.text,
        })}'>${nodes}</div>`,
      }}
    />
  );
};
