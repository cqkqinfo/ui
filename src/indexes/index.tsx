import React, { useMemo, useRef, useState } from 'react';
import { View } from 'remax/one';
import { ScrollViewProps } from 'remax/wechat';
import styles from './index.module.less';
import classNames from 'classnames';
import ScrollView from '../scroll-view';
import Visible from '../visible';
import { pinyin } from 'pinyin-pro';
import { useEffectState } from 'parsec-hooks';

interface Props<D> extends ScrollViewProps {
  /**
   * 渲染列表项，index为需要索引的内容
   * @param data
   */
  renderItem: (data: D) => { index: string; node: React.ReactNode };
  /**
   * 列表
   */
  list: D[];
  /**
   * 索引的类名
   */
  indexCls?: string;
}

export default <D extends unknown>({
  renderItem,
  list,
  className,
  ...props
}: Props<D>) => {
  const indexs = useMemo(() => {
    const obj: { [key: string]: D[] } = {};
    list.forEach(item => {
      const {
        index: [first],
      } = renderItem(item);
      const [index] = pinyin(first, { pattern: 'initial', type: 'array' });
      if (!obj[index]) {
        obj[index] = [];
      }
      obj[index].push(item);
    });
    const obj2: typeof obj = {};
    Object.keys(obj)
      .sort()
      .forEach(i => {
        obj2[i.toUpperCase()] = obj[i];
      });
    return obj2;
  }, [list, renderItem]);
  const [current, setCurrent] = useEffectState(Object.keys(indexs)[0]);
  const [isHoverSlide, setIsHoverSlide] = useState(false);
  return (
    <ScrollView
      scrollY
      className={classNames(styles.wrap, className)}
      scrollIntoView={isHoverSlide ? `index${current}` : undefined}
      {...props}
    >
      <View
        className={styles.current}
        style={{ opacity: isHoverSlide ? 1 : 0 }}
      >
        {current}
      </View>
      <View
        className={styles.slide}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        onMouseEnter={() => {
          setIsHoverSlide(true);
        }}
        onMouseLeave={() => {
          setIsHoverSlide(false);
        }}
        onTouchStart={() => {
          setIsHoverSlide(true);
        }}
        onTouchCancel={() => {
          setIsHoverSlide(true);
        }}
      >
        {Object.keys(indexs).map(i => (
          <div
            onTouchStart={() => {
              setCurrent(i);
            }}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            onMouseMove={() => {
              setCurrent(i);
            }}
            className={classNames(
              styles.slideItem,
              current === i && styles.slideActive,
            )}
            key={i}
          >
            {i}
          </div>
        ))}
      </View>
      {Object.keys(indexs).map(i => (
        <React.Fragment key={i}>
          <Visible
            onVisible={() => {
              if (!isHoverSlide) {
                setCurrent(i);
              }
            }}
          >
            <View className={styles.index} id={`index${i}`}>
              {i}
            </View>
          </Visible>
          {indexs[i].map(data => renderItem(data).node)}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};
