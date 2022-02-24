import styles from './index.module.less';
import Space from '../space';
import ColorText from '../color-text';
import DownTime from '../down-time';
import Button from '../button';
import React, { useState } from 'react';
import showActionSheet from '../show-action-sheet';
import rpxToPx from '../rpx-to-px';
import { useConfig } from '../config-provider';

export interface Props {
  /**
   * 问诊结束日期
   */
  endDate?: string;
  /**
   * 问诊倒计时结束事件
   */
  onDownTimeEnd?: () => void;
  /**
   * 剩余条数
   */
  remainder?: string;
  /**
   * 跳转就诊记录
   */
  onToRecord?: () => void;
  /**
   * 点击结束问诊事件
   */
  onClickEnd?: () => void;
  /**
   * 是否是医生
   */
  isDoctor?: boolean;
  /**
   * 问诊结束后的更多功能
   */
  endMoreActions?: { text: string; onTap: () => void }[];
}

export default ({
  endDate,
  onDownTimeEnd,
  remainder,
  isDoctor,
  onToRecord,
  onClickEnd,
  endMoreActions = [],
}: Props) => {
  const [isEnd, setIsEnd] = useState(false);
  const { brandPrimary } = useConfig();
  return isEnd ? (
    <Space justify={'center'} alignItems={'center'} className={styles.end}>
      <Space flex={1} />
      问诊已结束
      <Space flex={1} justify={'flex-end'}>
        {!!endMoreActions?.length && (
          <ColorText
            onTap={() =>
              showActionSheet({
                itemList: endMoreActions?.map(({ text }) => text),
              }).then(({ tapIndex }) => endMoreActions[tapIndex].onTap())
            }
            fontSize={rpxToPx(30) + ''}
          >
            更多功能
          </ColorText>
        )}
      </Space>
    </Space>
  ) : (
    <Space size={20} className={styles.header}>
      <Space vertical size={18} flex={1} className={styles.headerText}>
        <Space size={17}>
          剩余时间
          <DownTime
            style={{ color: brandPrimary }}
            targetDate={endDate}
            format={({ h, m, s, isEnd, d }) => {
              if (isEnd) {
                setIsEnd(true);
                onDownTimeEnd?.();
              }
              return `${d !== '00' ? `${d}天` : ''}${h}:${m}:${s}`;
            }}
          />
        </Space>
        <Space size={17}>
          剩余条数<ColorText>{remainder}条</ColorText>
        </Space>
      </Space>
      {isDoctor && onToRecord && (
        <Button
          block={false}
          className={styles.actionBtn}
          size={'action'}
          onTap={onToRecord}
        >
          就诊记录
        </Button>
      )}
      {!isEnd && onClickEnd && (
        <Button
          block={false}
          className={styles.actionBtn}
          size={'action'}
          onTap={onClickEnd}
        >
          结束问诊
        </Button>
      )}
    </Space>
  );
};
