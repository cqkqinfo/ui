import React, { useCallback, useRef, useState } from 'react';
import ScrollView from '../scroll-view';
import styles from './index.module.less';
import Space from '../space';
import Button from '../button';
import ColorText from '../color-text';
import Divider from '../divider';
import Textarea from '../re-textarea';
import Icon from '../icon';
import Native, { NativeInstance } from '../native';
import ConfigProvider from '../config-provider';
import { selectFiles } from 'parsec-hooks';
import InfoCard from './InfoCard';
import Voice from './voice';
import Emoji from './emoji';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const mainRef = useRef<NativeInstance>(null);
  const mainStyle =
    'display:flex;flex:1;flex-direction: column;transition: all 0.3s;position: relative;overflow: hidden;';
  const [active, setActive] = useState<number>();
  const { brandPrimary } = ConfigProvider.useContainer();
  //================"更多"模块的ref================//
  const voiceMore = useRef<NativeInstance>(null);
  const emojiMore = useRef<NativeInstance>(null);
  const plusMore = useRef<NativeInstance>(null);
  const setMoreVisible = useCallback(
    (index?: number) => {
      if (index === 1) {
        return selectFiles({ multiple: true, accept: 'image/*' });
      }
      const visible = index !== undefined && index !== active;
      mainRef.current?.setData({
        style:
          mainStyle +
          (visible ? 'overflow: visible;transform: translateY(-523rpx);' : ''),
      });
      if (index === active) {
        setActive(undefined);
      } else {
        setActive(index);
      }
      //================设置"更多"模块的显示================//
      const moreRefArr = [voiceMore, undefined, emojiMore, plusMore];
      moreRefArr.forEach((item, i) => {
        if (i === index && visible) {
          item?.current?.setData({ visible: true });
        } else {
          item?.current?.setData({ visible: false });
        }
      });
    },
    [active],
  );
  //================输入控制================//
  const [inputValue, setInputValue] = useState<string | undefined>('');
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
        <Button block={false} className={styles.actionBtn} size={'action'}>
          就诊记录
        </Button>
        <Button block={false} className={styles.actionBtn} size={'action'}>
          结束问诊
        </Button>
      </Space>
      <Native
        initData={{
          style: mainStyle,
        }}
        flex
        ref={mainRef}
      >
        <ScrollView
          className={styles.scroll}
          onTap={() => setMoreVisible(undefined)}
        >
          <Space vertical alignItems={'center'} size={20}>
            <Space />
            <InfoCard />
            <Space />
            <Divider style={{ fontWeight: 400 }}>查看历史消息</Divider>
          </Space>
        </ScrollView>
        <Space className={styles.footer} vertical size={17}>
          <Space className={styles.inputWrap} justify={'space-between'}>
            <Textarea
              className={styles.textarea}
              autoHeight
              flex
              cursorSpacing={20}
              onFocus={(e: any) => {
                setMoreVisible(undefined);
              }}
              // onBlur={() => footerRef.current?.setData({ style: '' })}
              value={inputValue}
              onChange={setInputValue}
              showConfirmBar={false}
              disableDefaultPadding
              confirmHold
              confirmType={'send'}
            />
            <Button block={false} className={styles.send} size={'action'}>
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
        <Space className={styles.more}>
          <Native ref={voiceMore} initData={{ visible: false }}>
            <Voice />
          </Native>
          <Native ref={emojiMore} initData={{ visible: false }}>
            <Emoji onChange={value => setInputValue(inputValue + value)} />
          </Native>
          <Native ref={plusMore} initData={{ visible: false }}>
            更多
          </Native>
        </Space>
      </Native>
    </Space>
  );
};
