import classNames from 'classnames';
import React from 'react';
import styles from './index.module.less';
import { Props } from './index';
import { useState } from 'react';
import { Animated, Easing } from 'react-native';
import { useEffect } from 'react';
import { View } from 'remax/one';

export default ({
  className,
  angle,
  run = true,
  children,
  style,
  ...props
}: Props) => {
  const [rotateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const toValue = run ? 1 : 0;
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: toValue,
        duration: angle === undefined ? 1000 : 300,
        easing: angle === undefined ? Easing.linear : undefined,
        useNativeDriver: true,
      }),
      { iterations: angle === undefined ? -1 : 1 },
    ).start();
  }, [angle, rotateValue, run]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${angle || 360}deg`],
  });
  return (
    <Animated.View
      style={[
        {
          transform: [{ rotate: spin }],
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      className={classNames(angle === undefined && styles.rotate, className)}
      {...(props as any)}
    >
      <View>{children}</View>
    </Animated.View>
  );
};
