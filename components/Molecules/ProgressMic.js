import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS, SIZES } from '../../constants/theme';
import CardAtom from '../Atoms/CardAtom';
import ViewAtom from '../Atoms/ViewAtom';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import TextAtom from '../Atoms/TextAtom';
import { Audio } from 'expo-av';
import axios from "axios"

import {  ref,  uploadBytes,  getDownloadURL,  listAll,  list,} from "firebase/storage";
import { storage } from "../../firebase";
const ProgressMic = ({ theme }) => {
  const user = useSelector(state => state.userReducer.user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);


  const playAudio = async (uri) => {
    try {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        { uri: uri },
        { shouldPlay: true }
      );
  
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };
  const handlePlay = async () => {
    const apiUrl = 'https://three60server.onrender.com/text-to-speech'; // Replace with your server URL
  
    const text = `Hey ${user.firstName}! Buckle up for an exhilarating ride as a three sixty student, where you'll experience personal growth, unforgettable experiences, and a touch of digital wizardry. Create a student profile that grabs attention, showcase your skills, passions, and ambitions. Dive into a world of knowledge with our calendar feature, unlocking exciting events and forging connections. Ignite your competitive spirit with curated competitions and scholarships. Stay organized with a well-synced timetable system and conquer your classes. Be the captain of your own ship, guided by performance reports and analytics. Chat with our virtual assistant for advice and personalized recommendations. Conquer the job market with our support for resumes and job applications. Discover personalized learning recommendations tailored to your unique needs. Share your voice through feedback and ratings, shaping the future for fellow students. Uncover the "why" behind every endeavor, aligning your efforts with your dreams. Fasten your seatbelt, embrace the opportunities, connect with like-minded individuals, and let the remarkable journey of a three sixty student begin!  `;
    const voiceSettings = {
      stability: 0.5,
      similarity_boost: 0.5
    };
  
    try {
      const response = await axios.post(apiUrl, {
        text: text,
        voiceSettings: voiceSettings,
        voiceId:"21m00Tcm4TlvDq8ikWAM"
      });
  
      if (response.data) {
        playAudio(response.data);
      }
    } catch (error) {
      console.error('An error occurred while making the request:', error);
    }
  };
  



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
            <TouchableOpacity onPress={()=>{handlePlay()}}>
              <ViewAtom jc="center" ai="center" bg={theme.name==="Dark"?COLORS.white:theme.color} pv={2} ph={2} br={50} mv={0} mh={0}>
                <CardAtom fd="row" jc="center" ai="center" pv={8} ph={8} bg={COLORS.dark2} br={50} mv={0} mh={0} el={30} sh={COLORS.amber}>
                  <Icon name="mic" type="ioniconv4" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h3} />
                </CardAtom>
              </ViewAtom>
            </TouchableOpacity>
        
          </>
        )}
      </AnimatedCircularProgress>
      {/* <Modal isVisible={false}>
        <View style={{}}>
          <Image source={require('../../assets/360aimodel.gif')} style={styles.Icon} resizeMode="cover" />
        </View>
      </Modal> */}
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
