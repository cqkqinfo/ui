import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View } from 'remax/one';
import { ScrollViewProps } from 'remax/wechat';
import styles from './index.module.less';
import classNames from 'classnames';
import ScrollView from '../scroll-view';
import Visible from '../visible';
import { pinyin } from 'pinyin-pro';
import { useEffectState } from 'parsec-hooks';
import setUserSelect from './setUserSelect';
import rpxToPx from '../rpx-to-px';

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
   * 索引标识的类名
   */
  indexCls?: string;
  /**
   * 侧边项类名
   */
  slideItemCls?: string;
  /**
   * 侧边类名
   */
  slideCls?: string;
  /**
   * 索引分割线类名
   */
  indexLineCls?: string;
}

export default <D extends unknown>({
  renderItem,
  list,
  className,
  slideItemCls,
  slideCls,
  indexLineCls,
  indexCls,
  ...props
}: Props<D>) => {
  const indexs = useMemo(() => {
    const obj: { [key: string]: D[] } = {};
    list.forEach(item => {
      const {
        index: [first],
      } = renderItem(item);
      let [index] = pinyin(first, {
        pattern: 'first',
        type: 'array',
        toneType: 'none',
      });
      if (!/[a-z]/.test(index)) {
        index = '#';
      }
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
    if (obj2['#']) {
      const old = obj2['#'];
      delete obj2['#'];
      obj2['#'] = old;
    }
    return obj2;
  }, [list, renderItem]);
  const [current, setCurrent] = useEffectState(Object.keys(indexs)[0]);
  const [isHoverSlide, setIsHoverSlide] = useState(false);
  const [showCurrentIndex, setShowCurrentIndex] = useState(false);
  useEffect(() => {
    if (isHoverSlide) {
      setShowCurrentIndex(isHoverSlide);
    }
    const timer = setTimeout(() => {
      setShowCurrentIndex(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [isHoverSlide]);
  setUserSelect(!isHoverSlide);
  const scrollSetRef = useRef(false);
  const renderSlid = (bg = false) => (
    <View
      className={classNames(slideCls, styles.slide)}
      onTouchStart={e => {
        e.stopPropagation();
        scrollSetRef.current = false;
      }}
    >
      {Object.keys(indexs).map(i => (
        <View
          onTouchStart={() => {
            setIsHoverSlide(true);
            setCurrent(i);
          }}
          onTouchEnd={() => {
            setIsHoverSlide(false);
          }}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          onMouseEnter={() => {
            // setIsHoverSlide(true);
          }}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          onMouseMove={() => {
            setCurrent(i);
          }}
          onMouseLeave={() => {
            setIsHoverSlide(false);
          }}
          className={classNames(
            styles.slideItem,
            slideItemCls,
            current === i && styles.slideActive,
          )}
          style={
            bg
              ? {
                  borderStyle: 'solid',
                  borderWidth: rpxToPx(5),
                  boxSizing: 'content-box',
                  opacity: 0,
                  marginBottom: 0,
                }
              : undefined
          }
          key={i}
        >
          {i}
        </View>
      ))}
    </View>
  );
  return (
    <ScrollView
      scrollY
      className={classNames(styles.wrap, className)}
      scrollIntoView={
        isHoverSlide ? `index${current === '#' ? '0' : current}` : undefined
      }
      {...props}
    >
      <View
        className={classNames(styles.current, indexCls)}
        style={{ opacity: showCurrentIndex ? 1 : 0 }}
      >
        {current}
      </View>
      {renderSlid()}
      {renderSlid(true)}
      <View
        onTouchStart={e => {
          scrollSetRef.current = true;
        }}
      >
        {useMemo(
          () =>
            Object.keys(indexs).map(i => (
              <React.Fragment key={i}>
                <Visible
                  onVisible={() => {
                    if (scrollSetRef.current) {
                      setCurrent(i);
                    }
                  }}
                >
                  <View
                    className={classNames(styles.index, indexLineCls)}
                    id={`index${i === '#' ? '0' : i}`}
                  >
                    {i}
                  </View>
                </Visible>
                {indexs[i].map(data => renderItem(data).node)}
              </React.Fragment>
            )),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [indexs, setCurrent],
        )}
      </View>
    </ScrollView>
  );
};
