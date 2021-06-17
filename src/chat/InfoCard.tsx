import styles from './index.module.less';
import PartTitle from '../part-title';
import Space, { Props as SpaceProps } from '../space';
import ColorText from '../color-text';
import Form from '../form';
import FormItem from '../form-item';
import React from 'react';

export default (props: SpaceProps) => {
  return (
    <Space {...props} className={styles.infoCard} vertical size={24}>
      <PartTitle offsetX={-20}>
        <Space justify={'space-between'}>
          患者信息
          <ColorText underline style={{ fontWeight: 400 }}>
            查看详情
          </ColorText>
        </Space>
      </PartTitle>
      <Form
        labelStyle={{ color: '#666' }}
        itemChildrenStyle={{ color: '#333' }}
      >
        <Space size={26} vertical>
          <Space justify={'space-between'}>
            <FormItem label={'姓名'}>xxxx</FormItem>
            <FormItem label={'年龄'}>18岁</FormItem>
            <FormItem label={'性别'}>男</FormItem>
          </Space>
          <FormItem label={'当次就诊'}>xxxx</FormItem>
          <FormItem label={'患者主述'}>18岁</FormItem>
          <FormItem label={'主要诊断'}>男</FormItem>
        </Space>
      </Form>
    </Space>
  );
};
