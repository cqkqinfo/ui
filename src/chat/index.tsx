import React, { useCallback, useRef, useState } from 'react';
import ScrollView from '../scroll-view';
import styles from './index.module.less';
import Space from '../space';
import Button from '../button';
import ColorText from '../color-text';
import PartTitle from '../part-title';
import FormItem from '../form-item';
import Form from '../form';
import Divider from '../divider';
import Textarea from '../re-textarea';
import Icon from '../icon';
import Native, { NativeInstance } from '../native';
import ConfigProvider from '../config-provider';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const mainRef = useRef<NativeInstance>(null);
  const [active, setActive] = useState<number>();
  const { brandPrimary } = ConfigProvider.useContainer();
  //================"更多"模块的ref================//
  const voiceMore = useRef<NativeInstance>(null);
  const albumMore = useRef<NativeInstance>(null);
  const emojiMore = useRef<NativeInstance>(null);
  const plusMore = useRef<NativeInstance>(null);
  const setMoreVisible = useCallback(
    (index?: number) => {
      const visible = index !== undefined && index !== active;
      mainRef.current?.setData(
        {
          className: classNames(styles.main, visible && styles.showMore),
        },
        () => {
          if (index === active) {
            setActive(undefined);
          } else {
            setActive(index);
          }
        },
      );
      //================设置"更多"模块的显示================//
      const moreRefArr = [voiceMore, albumMore, emojiMore, plusMore];
      moreRefArr.forEach(({ current }, i) => {
        if (i === index && visible) {
          current?.setData({ visible: true });
        } else {
          current?.setData({ visible: false });
        }
      });
    },
    [active],
  );
  return (
    <Space vertical className={styles.chat}>
      <Space size={20} className={styles.header}>
        <Space vertical size={18} flex={1} className={styles.headerText}>
          <Space size={17}>
            剩余时间<ColorText>56:76:08</ColorText>
          </Space>
          <Space size={17}>
            剩余条数<ColorText>4条</ColorText>
          </Space>
        </Space>
        <Button className={styles.actionBtn} size={'action'}>
          就诊记录
        </Button>
        <Button className={styles.actionBtn} size={'action'}>
          结束问诊
        </Button>
      </Space>
      <Native initData={{ className: styles.main }} ref={mainRef}>
        <ScrollView
          className={styles.scroll}
          onTap={() => setMoreVisible(undefined)}
        >
          <Space vertical alignItems={'center'} size={20}>
            <Space />
            <Space className={styles.infoCard} vertical size={24}>
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
            <Space />
            <Divider style={{ fontWeight: 400 }}>查看历史消息</Divider>
          </Space>
        </ScrollView>
        <Space className={styles.footer} vertical>
          <Space vertical size={17}>
            <Space className={styles.inputWrap} justify={'space-between'}>
              <Textarea className={styles.textarea} autoHeight />
              <Button className={styles.send} size={'action'}>
                发送
              </Button>
            </Space>
            <Space justify={'space-between'} alignItems={'center'}>
              {['kq-voice', 'kq-album', 'kq-biaoqing', 'kq-jia'].map(
                (item, index) => (
                  <Icon
                    color={active === index ? brandPrimary : '#BBBBBB'}
                    size={40}
                    className={styles.footerIcon}
                    name={item as any}
                    onTap={() => {
                      if (active === index) {
                        setMoreVisible(undefined);
                      } else {
                        setMoreVisible(index);
                      }
                    }}
                    key={item}
                  />
                ),
              )}
            </Space>
          </Space>
        </Space>
        <Space className={styles.more}>
          <Native ref={voiceMore} initData={{ visible: false }}>
            点击录音
          </Native>
          <Native ref={albumMore} initData={{ visible: false }}>
            表情
          </Native>
          <Native ref={emojiMore} initData={{ visible: false }}>
            表情
          </Native>
          <Native ref={plusMore} initData={{ visible: false }}>
            更多
          </Native>
        </Space>
      </Native>
    </Space>
  );
};
