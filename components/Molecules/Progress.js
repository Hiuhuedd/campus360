import React, { useState, useEffect } from 'react';
import { View, StyleSheet,} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS, SIZES } from '../../constants/theme';
import CardAtom from '../Atoms/CardAtom';
import ViewAtom from '../Atoms/ViewAtom';
import { Icon } from 'react-native-elements';

const Progress = ({ theme }) => {
  // const AnimatedCard = Animated.createAnimatedComponent(View);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + .1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <AnimatedCircularProgress
        size={60}
        width={3}
        fill={progress}
        padding={5}
        tintColor={theme}
        backgroundColor={COLORS.black}
      >
        {(fill) => (
          <>
            <ViewAtom jc="center" ai="center" bg={theme} pv={2} ph={2} br={50} mv={0} mh={0}>
              <CardAtom fd="row" jc="center" ai="center" pv={8} ph={8} bg={COLORS.dark2} br={50} mv={0} mh={0} el={30} sh={COLORS.amber}>
              
              <Icon name="mic" type="ioniconv4" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h3} />
              </CardAtom>
            </ViewAtom>
          </>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
 
});
