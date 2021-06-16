import React from 'React';
import { View } from 'remax/one';
import ScrollView from '../scroll-view';
import styles from './index.less';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  return <ScrollView className={styles.chat}></ScrollView>;
};
