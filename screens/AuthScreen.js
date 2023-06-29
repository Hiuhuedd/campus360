import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { COLORS, SIZES } from '../constants/theme';
import { BackHandler } from 'react-native';
import TextAtom from '../components/Atoms/TextAtom';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewAtom from '../components/Atoms/ViewAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import MyInput from '../components/Atoms/MyInput';
import { Button } from '../components/Atoms/Button';
import CardAtom from '../components/Atoms/CardAtom';
import { useDispatch } from 'react-redux';
import InputCarousel from '../components/Molecules/InputCarousel';

const AuthScreen = () => {
   
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [UserData, setUserData] = useState({});
  const [txt, settxt] = useState("next");

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const showAlert = (type, title, msg) => {
    Toast.show({
      type: type,
      title: title,
      textBody: msg,
    });
  };

  const handleSignUp = async (u) => {
    setError('');
    if (!validateEmail(u.email)) {
      setError('Invalid email address');
      return;
    }

    try {
      setLoading(true)
     
      dispatch({
        type: "ON_USER",
        payload:u
      });
     AsyncStorage.setItem('Student', JSON.stringify(u)).then(res=>{
      //  navigation.navigate('PinScreen')
      alert("done")
       setLoading(false)

     })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      showAlert(ALERT_TYPE.WARNING, 'Oops!', error);
    }
  }, [error]);

  const handleBackPress = () => {
    navigation.navigate('AuthScreen');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  const handleNext = () => { 
    if(activeIndex<4){
      settxt("next")
      setActiveIndex(activeIndex + 1);
    }else{
      setActiveIndex(activeIndex+1);
      settxt("finish")
    }
    if(activeIndex>4){
      setLoading(true)
      handleSignUp(UserData)
      setActiveIndex(activeIndex);
    }
  };
  const btnColors=[COLORS.primary,COLORS.amber,COLORS.green,COLORS.gold,COLORS.gray2,COLORS.rose]
  const titles=["Student Name","Student Contact","Student Bio","Student Program","Kenyatta University","Authentication"]
  return (
    <View style={{ backgroundColor:COLORS.dark,flex:1,paddingTop:30,width:SIZES.width}}>
      <ViewAtom fd="row" width="100%" ph={10} pv={10} jc="space-between" >
        <Icon name={activeIndex<1?"":"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => setActiveIndex(activeIndex-1)} />
      <ViewAtom fd="row"  ph={7} pv={5} bg={btnColors[activeIndex]} br={15} >
        <TouchableOpacity onPress={()=>{}}>
          <TextAtom text={"Sign in"} f="Poppins"s={SIZES.h5} w={"500"} ls={0}c={COLORS.white} />
        </TouchableOpacity>
      </ViewAtom>
      </ViewAtom>
      <ViewAtom fd="column"  ph={10} pv={0} >
      <TextAtom text={"Set up your profile"} f="Poppins"s={SIZES.h1} w={"500"} ta="left" ls={-2}c={COLORS.white} />
      <TextAtom text={"Create a student profile to personalize 360"} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={0}c={COLORS.gray2} />
      <TextAtom text={"student to your career goals."} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={0}c={COLORS.gray2} />


      </ViewAtom>
      <ViewAtom fd="column"  ph={10} pv={0} >
      <TextAtom text={titles[activeIndex]} f="Poppins"s={SIZES.h2} w={"500"} ta="left" ls={-2}c={COLORS.white} />
      <InputCarousel  activeIndex={activeIndex} setActiveIndex={setActiveIndex} setUserData={setUserData} />

      <ViewAtom fd="column" ai="center" pv={10} >
          <Text style={styles.policyText}>By signing up, you agree to our </Text>
          <TouchableOpacity style={styles.policyLinks}>
              <Text style={styles.policyLink}>Terms of Service</Text>
              <Text style={styles.policyText}> and </Text>
              <Text style={styles.policyLink}>Privacy</Text><Text style={styles.policyLink}>Policy</Text>
          </TouchableOpacity>
       
   
      
        </ViewAtom>
  
        <ViewAtom ai="center"  pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                  {!Loading? <Button text={txt} width="100%" bg={btnColors[activeIndex]} borderRadius={10} screen="BookingTwo" onMethodSelected={handleNext} />:
                   <CardAtom fd="column" jc="center" ai="center" w="100%" pv={15} ph={10} bg={btnColors[activeIndex]} br={10} mv={0} mh={0}   el={3} sh='#525252' >
                   <ActivityIndicator size="small" color="#fff" />

                    </CardAtom>
                   }
              </ViewAtom>
      </ViewAtom>
    </View>
  );
};
export default AuthScreen;
const styles = StyleSheet.create({
  policyContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    },
    policyLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:5,
    },
    policyText: {
    fontSize: 12,
    color: COLORS.white,
    },
    policyLink: {
    fontSize: 12,
    color: COLORS.white,
    textDecorationLine: 'underline',
    },
})
