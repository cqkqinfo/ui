import React from 'react';
import Space from '../../space';
import Icon from '../../icon';
import Shadow from '../../shadow';
import styles from './index.module.less';

export default () => {
  return (
    <Space
      vertical
      className={styles.wrap}
      justify={'center'}
      alignItems={'center'}
      size={50}
    >
      <Space>按住说话</Space>
      <Shadow>
        <Space className={styles.icon} justify={'center'} alignItems={'center'}>
          <Icon color={'#666'} name={'kq-voice'} />
        </Space>
      </Shadow>
    </Space>
  );
};
