import Animated from '../animated';
import Easing from '../animated/Easing';
import { useCallback, useMemo, useRef } from 'react';
import { useRefState } from 'parsec-hooks';

export default ({
  duration = 400,
  timingFunction = 'linear',
  delay,
}: WechatMiniprogram.StepOption = {}) => {
  const [style, setStyle, styleRef] = useRefState<any>({});
  const { current: values } = useRef<any>({});
  const cbRef = useRef(() => {});
  const timerRef = useRef<any>();
  const start = useCallback(
    (
      toValue: number,
      animationValue,
      getStyle: (animationValue: any) => any,
    ) => {
      setStyle(getStyle(animationValue));
      Animated.timing(animationValue, {
        toValue,
        delay,
        duration,
        easing: (Easing as any)[timingFunction.replace('ease-', '')],
        useNativeDriver: true,
      }).start(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          cbRef.current();
        }, 1);
      });
    },
    [delay, duration, setStyle, timingFunction],
  );
  const animation = useMemo(() => {
    return {
      translateX: (v: number) => {
        const style = styleRef.current;
        values['translateX'] = values['translateX'] || new Animated.Value(0);
        start(v, values['translateX'], animationValue => ({
          ...style,
          transform: [{ ...style.transform?.[0], translateX: animationValue }],
        }));
        return animation;
      },
      translateY: (v: number) => {
        const style = styleRef.current;
        values['translateY'] = values['translateX'] || new Animated.Value(0);
        start(v, values['translateY'], animationValue => ({
          ...style,
          transform: [{ ...style.transform?.[0], translateY: animationValue }],
        }));
        return animation;
      },
      opacity: (v: number) => {
        const style = styleRef.current;
        values['opacity'] = values['opacity'] || new Animated.Value(1);
        start(v, values['opacity'], animationValue => ({
          ...style,
          opacity: animationValue,
        }));
        return animation;
      },
      end: (cb: () => void) => {
        cbRef.current = cb;
      },
    };
  }, [start, styleRef, values]);
  return { ...animation, style, onAnimationEnd: cbRef.current };
};
