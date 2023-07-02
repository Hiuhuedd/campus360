import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS } from '../../constants/theme';
import CardAtom from '../Atoms/CardAtom';
import ViewAtom from '../Atoms/ViewAtom';

const Progress = ({ theme }) => {
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
    <View style={styles.inputj}>
      <AnimatedCircularProgress
        size={100}
        width={4}
        fill={progress}
        padding={5}
        tintColor={theme}
        backgroundColor={COLORS.black}
      >
        {(fill) => (
          <>
            <ViewAtom jc="center" ai="center" bg={theme} pv={2} ph={2} br={50} mv={0} mh={0}>
              <CardAtom fd="row" jc="center" ai="center" pv={8} ph={8} bg={COLORS.dark} br={50} mv={0} mh={0} el={30} sh={COLORS.amber}>
                <Image source={require('../../assets/360ai.gif')} style={styles.Icon} />
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
  Icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  
  screen: {
    backgroundColor: '#000',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
