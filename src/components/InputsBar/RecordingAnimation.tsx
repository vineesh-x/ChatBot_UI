import React, {memo, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {styles} from './styles';
import Animated, {
  ReduceMotion,
  SlideInRight,
  ZoomIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const RecordingAnimation = () => {
  const animationArray = Array(112).fill(0);

  return (
    <View style={styles.recordingAnimationContainer}>
      <Animated.View style={styles.recordingAnimatedViewContainer}>
        <Animated.View
          entering={SlideInRight}
          style={styles.recordingAnimatedView}>
          {animationArray.map((_, index) => {
            return <MemoizedAnimatedBar index={index} key={index} />;
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const AnimatedBar = ({index = 0}) => {
  const height = useSharedValue(10);
  const time = useRef(0);

  const getHeight = (i: number) => {
    'worklet';
    return 18 * Math.sin((i / 100) * 14 * Math.PI + time.current) + 25;
  };

  const customEasing = (value: number) => {
    'worklet';
    return value;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      height.value = getHeight(index);
      time.current += 1;
    }, 200);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const combinedStyles = StyleSheet.compose(styles.animatedVerticalBar, {
    backgroundColor: index < 37 || index > 75 ? '#D9D9D9' : 'black',
  });

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(
        height.value,
        {
          duration: 200,
          easing: customEasing,
          reduceMotion: ReduceMotion.Never,
        },
        () => {},
      ),
    };
  });
  return (
    <Animated.View
      entering={ZoomIn}
      style={[combinedStyles, style]}
    />
  );
};

const MemoizedAnimatedBar = memo(AnimatedBar);
