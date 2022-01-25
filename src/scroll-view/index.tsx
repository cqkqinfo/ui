import { ScrollView } from 'remax/wechat';
import { ScrollViewProps } from '@remax/wechat/esm/hostComponents/ScrollView';
import React from 'react';
import classNames from 'classnames';
import styles from './index.module.less';

export default ({ className, showScrollbar, ...props }: ScrollViewProps) => (
  <ScrollView
    {...props}
    className={classNames(className, showScrollbar === false && styles.hideBar)}
    showScrollbar={showScrollbar}
  />
);
