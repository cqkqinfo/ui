import styles from './index.module.less';
import PartTitle from '../part-title';
import Space, { Props as SpaceProps } from '../space';
import ColorText from '../color-text';
import Form from '../form';
import FormItem from '../form-item';
import React from 'react';

export interface Props {
  /**
   * 患者姓名
   */
  patName?: string;
  /**
   * 患者年龄
   */
  patAge?: string;
  /**
   * 患者性别
   */
  patSex?: string;
  /**
   * 是否是复诊
   */
  isFollowUp?: boolean;
  /**
   * 当次就诊，设置isFollowUp后会显示为复诊记录
   */
  visit?: string;
  /**
   * 患者主述
   */
  illnessDesc?: string;
  /**
   * 主要诊断
   */
  diagnosisDesc?: string;
  /**
   * 查看详情
   */
  onToDetail?: () => void;
}

export default ({
  patName,
  patAge,
  patSex,
  isFollowUp,
  visit,
  illnessDesc,
  onToDetail,
  diagnosisDesc,
  ...props
}: SpaceProps & Props) => {
  return (
    <Space {...props} className={styles.infoCard} vertical size={24}>
      <PartTitle
        offsetX={-20}
        action={
          onToDetail && (
            <ColorText underline style={{ fontWeight: 400 }} onTap={onToDetail}>
              查看详情
            </ColorText>
          )
        }
      >
        患者信息
      </PartTitle>
      <Form
        labelStyle={{ color: '#666' }}
        itemChildrenStyle={{ color: '#333' }}
      >
        <Space size={26} vertical>
          <Space justify={'space-between'}>
            {patName && <FormItem label={'姓名'}>{patName}</FormItem>}
            {patAge && <FormItem label={'年龄'}>{patAge}</FormItem>}
            {patSex && <FormItem label={'性别'}>{patSex}</FormItem>}
          </Space>
          {visit && (
            <FormItem label={isFollowUp ? '复诊记录' : '当次就诊'}>
              {visit}
            </FormItem>
          )}
          {illnessDesc && <FormItem label={'患者主述'}>{illnessDesc}</FormItem>}
          {diagnosisDesc && (
            <FormItem label={'主要诊断'}>{diagnosisDesc}</FormItem>
          )}
        </Space>
      </Form>
    </Space>
  );
};
