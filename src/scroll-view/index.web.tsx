import { ScrollViewProps } from 'remax/wechat';
import React, {
  PropsWithChildren,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';
import classNames from 'classnames';
import styles from './index.module.less';
import Visible from '../visible';
import Space from '../space';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  (
    {
      scrollIntoView,
      onTap,
      onScrollToLower,
      onScrollToUpper,
      children,
      className,
      scrollWithAnimation,
      showScrollbar = true,
      onScroll,
      scrollLeft,
      scrollY,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      const target =
        scrollIntoView && document.querySelector(`#${scrollIntoView}`);
      if (target) {
        target.scrollIntoView(
          scrollWithAnimation ? { behavior: 'smooth', block: 'center' } : false,
        );
      }
    }, [scrollIntoView, scrollWithAnimation]);
    const domRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useImperativeHandle(ref, () => domRef.current as any, [domRef.current]);
    useEffect(() => {
      domRef.current?.scrollTo({
        left: scrollLeft as any,
        behavior: scrollWithAnimation ? 'smooth' : undefined,
      });
    }, [scrollLeft, scrollWithAnimation]);
    return (
      <div
        className={classNames(
          className,
          styles.scroll,
          !showScrollbar && styles.hideBar,
        )}
        children={children}
        onMouseUp={props.onTouchEnd}
        onMouseDown={props.onTouchStart}
        {...(props as any)}
        onScroll={({ target }) => onScroll?.({ detail: target } as any)}
        onClick={onTap}
        ref={domRef}
      >
        <Space
          flex={1}
          justify={scrollY ? undefined : 'space-between'}
          vertical={scrollY}
        >
          <Visible onVisible={() => onScrollToUpper?.({} as any)} />
          {children}
          <Visible onVisible={() => onScrollToLower?.({} as any)} />
        </Space>
      </div>
    );
  },
);
