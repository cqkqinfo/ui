import React from 'react';
import { View } from 'remax/one';
// import styles from './index.less';

export interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return <View>{children}</View>;
};
