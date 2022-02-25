import React, { useCallback, useMemo, useRef, useState } from 'react';
import styles from './index.module.less';
import Space from '../space';
import Button from '../button';
import Textarea from '../re-textarea';
import Icon from '../icon';
import Native, { NativeInstance } from '../native';
import { useConfig } from '../config-provider';
import { selectFiles } from 'parsec-hooks';
import InfoCardCom, { Props as InfoCardProps } from './InfoCard';
import Voice from './voice';
import Emoji from './emoji';
import useSafeArea from '../use-safe-area';
import Header, { Props as HeaderProps } from './Header';
import Message, { Props as MessageProps } from './message';
import { Props as MessageData } from './message/Item';

export const patInfo = ({}: InfoCardProps) => {};

export const header = ({}: Omit<HeaderProps, 'isDoctor'>) => {};

export const message = ({}: MessageProps) => {};

export const messageInitData = ({}: Omit<
  MessageData,
  'before' | 'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'
>) => {};

export interface Props {
  /**
   * 类名
   */
  className?: string;
  /**
   * 是否是医生，医生显示的内容跟患者不同
   */
  isDoctor?: boolean;
  /**
   * 患者信息
   */
  patInfo?: InfoCardProps;
  /**
   * 头部信息
   */
  header?: HeaderProps;
  /**
   * 消息内容
   */
  message?: MessageProps;
}

export default ({ className, header, patInfo, isDoctor, message }: Props) => {
  const mainRef = useRef<NativeInstance>(null);
  const mainStyle: React.CSSProperties = useMemo(
    () => ({
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      transition: 'all .3s',
      position: 'relative',
      overflow: 'hidden',
    }),
    [],
  );
  const [active, setActive] = useState<number>();
  const { brandPrimary } = useConfig();
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
        style: {
          ...mainStyle,
          ...(visible
            ? {
                overflow: 'visible',
                transform: `translateY(-261.5PX)`,
              }
            : {}),
        },
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
    [active, mainStyle],
  );
  //================输入控制================//
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { bottomHeight } = useSafeArea();
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Space
      vertical
      className={styles.chat}
      style={{ borderBottom: `${bottomHeight}PX solid #fff` }}
    >
      {header && (
        <Header
          isDoctor={isDoctor}
          {...header}
          onDownTimeEnd={() => {
            setIsEnd(true);
            header?.onDownTimeEnd?.();
          }}
        />
      )}
      <Native
        initData={{
          style: mainStyle,
        }}
        flex
        ref={mainRef}
        onTap={() => setMoreVisible(undefined)}
      >
        <Message
          before={patInfo && isDoctor && <InfoCardCom {...patInfo} />}
          {...message}
        />
        {!isEnd && (
          <>
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
                  (item, index) =>
                    item === 'kq-voice' && !isDoctor ? null : (
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
              {isDoctor && (
                <Native ref={voiceMore} initData={{ visible: false }}>
                  <Voice />
                </Native>
              )}
              <Native ref={emojiMore} initData={{ visible: false }}>
                <Emoji
                  onChange={value => setInputValue((inputValue || '') + value)}
                />
              </Native>
              <Native ref={plusMore} initData={{ visible: false }}>
                更多
              </Native>
            </Space>
          </>
        )}
      </Native>
    </Space>
  );
};
