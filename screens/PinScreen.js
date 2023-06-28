import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const PinScreen = ({navigation}) => {
    const user=useSelector(state => state.userReducer.user);
    const showAlert = (type, title, msg) => {
        Toast.show({
          type: type,
          title: title,
          textBody: msg,
        });
      };
    const keyArray = [
        { digit: 1, label: '~' },
        { digit: 2, label: 'abc' },
        { digit: 3, label: 'def' },
        { digit: 4, label: 'ghi' },
        { digit: 5, label: 'jkl' },
        { digit: 6, label: 'mno' },
        { digit: 7, label: 'pqrs' },
        { digit: 8, label: 'tuv' },
        { digit: 9, label: 'wxyz' },
        { digit: '*', label: '' },
        { digit: 0, label: '+' },
     
      ]
  const [pin, setPin] = useState('');

  const handleKeyPress = (digit) => {
    if (pin.length < 3) {
      setPin(pin + digit);
    }else if(pin.length===3){
        if (user.pin===pin+ digit) {
          navigation.navigate("THook")
        }else{
            showAlert(ALERT_TYPE.WARNING,"", 'Incorrect pin!');
        }
    }
  };

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };

  const renderKey = (digit, label) => (
    <TouchableOpacity
      key={digit}
      style={styles.keypadButton}
      onPress={() => handleKeyPress(digit)}
    >
          <TextAtom text={digit} f="Poppins"s={SIZES.h1} w={"500"} ta="center" ls={0}c={COLORS.white} />
          <TextAtom text={label} f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.white} />


    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        
  <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={20} mh={0}>
     
</ViewAtom>
  <TextAtom text={"Enter your pin code"} f="Poppins"s={SIZES.h1} w={"500"} ta="center" ls={-2}c={COLORS.white} />
  <TextAtom text={"Lets you encrypt your account to ensure privacy of your academic data"} f="Poppins"s={SIZES.h5} w={"500"} ta="center" ls={0}c={COLORS.gray2} />
  <ViewAtom  fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>
  <Icon name="lock" type="ioniconv4" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.largeTitle} />
  </ViewAtom>
  <ViewAtom  fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={[styles.pinDot, index < pin.length && styles.pinDotFilled]} />
        ))}

  </ViewAtom>
  <TextAtom text={"Forgot pin"} f="Poppins"s={SIZES.h5} w={"500"} ta="center" ls={0}c={COLORS.primary} />


  <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={20} mh={0}>
        {keyArray.map(({ digit, label }) => renderKey(digit, label))}
        <TouchableOpacity style={styles.keypadButton} onPress={handleDeletePress}>
            
        <Icon name="backspace" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h1} style={{marginBottom:20}} />

        </TouchableOpacity>
</ViewAtom>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:50
  },
 
  pinDot: {
    width: SIZES.h3,
    height: SIZES.h3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    marginHorizontal: 5,
  },
  pinDotFilled: {
    backgroundColor:COLORS.gray2,
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"center",
    justifyContent:"center",
  },
  keypadButton: {
    width: '30%',
   aspectRatio:1.5,
    alignItems: 'center',
    justifyContent: 'center',

  },
 
});

export default PinScreen;

