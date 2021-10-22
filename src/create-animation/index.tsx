import { createAnimation } from 'remax/wechat';
import { useCallback, useMemo, useRef, useState } from 'react';

export default (option: WechatMiniprogram.StepOption = {}) => {
  const [animation, setAnimation] = useState<any>({});
  const { current: fns } = useRef<any>([]);
  const timer = useRef<any>();
  const addFn = useCallback(
    (fn, newAnimation) => {
      clearInterval(timer.current);
      fns.push(fn);
      timer.current = setTimeout(() => {
        fns.forEach((fn: any) => fn());
        setAnimation(newAnimation);
      }, 1);
    },
    [fns],
  );
  const cbRef = useRef(() => {});
  return useMemo(() => {
    const newAnimation = createAnimation(option);
    const obj = {
      ...animation,
      onAnimationEnd: () => {
        cbRef.current();
      },
      translateX: (option: any) => {
        addFn(() => newAnimation.translateX(option), newAnimation);
        return obj;
      },
      translateY: (option: any) => {
        addFn(() => newAnimation.translateY(option), newAnimation);
        return obj;
      },
      opacity: (option: any) => {
        addFn(() => newAnimation.opacity(option), newAnimation);
        return obj;
      },
      end: (cb: () => void) => {
        cbRef.current = cb;
        return obj;
      },
    };
    return obj;
  }, [addFn, animation, option]);
};
