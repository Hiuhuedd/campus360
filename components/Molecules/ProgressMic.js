import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS, SIZES } from '../../constants/theme';
import CardAtom from '../Atoms/CardAtom';
import ViewAtom from '../Atoms/ViewAtom';
import { Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";
import TextAtom from '../Atoms/TextAtom';

const ProgressMic = ({ theme }) => {
  const user = useSelector(state => state.userReducer.user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pitchIndex, setPitchIndex] = useState(0);
  const [rateIndex, setRateIndex] = useState(0);
  const [volumeIndex, setVolumeIndex] = useState(0);

  const pitchValues = [0.92, 0.95, 0.81, 1.17, 1.03, 0.92, 0.98, 1.13, 1.07, 1.14]

  const rateValues = [0.85, 1.1, 0.9, 0.95, 0.97, 0.84, 1.12, 0.89, 1.06, 0.94]

  const volumeValues = [1.11, 0.98, 1.0, 1.09, 1.01, 0.92, 1.05, 0.82, 1.17, 1.07]


  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    // console.log(voices);
  };

  const handleOnboarding = () => {
    const greeting = `Hi ${user.firstName}, welcome to three sixty AI. I'm your personal assistant. Ask me anything`;
    const options = {
      voice: "en-gb-x-gbc-local", // Experiment with different voice options
      language: "en-US",
      pitch: pitchValues[pitchIndex],
      rate: rateValues[rateIndex],
      volume: 1,
      quality: "enhanced",
      onStart: () => {
        // Handle speech start event
        setModalVisible(true);
        handlePlay(2);
      },
      onDone: () => {
        // Handle speech completion event
        setModalVisible(false);
        // handlePlay(-4);
      },
      onError: (error) => {
        // Handle speech error event
        console.log("Speech synthesis error:", error);
      }
    };

    Speech.speak(greeting, options);
  };

  const handlePlay = (v) => {
    listAllVoiceOptions();
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + v);
      
      setPitchIndex((pitchIndex + 1) % pitchValues.length);
      setRateIndex((rateIndex + 1) % rateValues.length);
      setVolumeIndex((volumeIndex + 1) % volumeValues.length);
      console.log(pitchValues[pitchIndex],rateValues[rateIndex])
    }, 10);

    return () => {
      clearInterval(interval);
    };
  };

  // const handleNextValues = () => {
  //   setPitchIndex((pitchIndex + 1) % pitchValues.length);
  //   setRateIndex((rateIndex + 1) % rateValues.length);
  //   setVolumeIndex((volumeIndex + 1) % volumeValues.length);
  // };

  return (
    <View>
      <AnimatedCircularProgress
        size={60}
        width={3}
        fill={progress}
        padding={5}
        tintColor={theme.name==="Dark"?COLORS.white:theme.color}
        backgroundColor={theme.name==="Dark"?COLORS.white:theme.color}
      >
        {(fill) => (
          <>
            <TouchableOpacity onPress={handleOnboarding}>
              <ViewAtom jc="center" ai="center" bg={theme.name==="Dark"?COLORS.white:theme.color} pv={2} ph={2} br={50} mv={0} mh={0}>
                <CardAtom fd="row" jc="center" ai="center" pv={8} ph={8} bg={COLORS.dark2} br={50} mv={0} mh={0} el={30} sh={COLORS.amber}>
                  <Icon name="mic" type="ioniconv4" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h3} />
                </CardAtom>
              </ViewAtom>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleNextValues}>
              <ViewAtom>
                <TextAtom color={COLORS.gray} align="center" ff="Poppins-Medium" fs={SIZES.body4} mv={1}>
                  Next Values
                </TextAtom>
              </ViewAtom>
            </TouchableOpacity> */}
          </>
        )}
      </AnimatedCircularProgress>
      <Modal isVisible={false}>
        <View style={{}}>
          <Image source={require('../../assets/360aimodel.gif')} style={styles.Icon} resizeMode="cover" />
        </View>
      </Modal>
    </View>
  );
};

export default ProgressMic;

const styles = StyleSheet.create({
  Icon: {
    width: SIZES.width - 40,
    height: SIZES.height - 500,
    borderRadius: 15,
  },
});
