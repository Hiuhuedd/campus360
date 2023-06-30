import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Button } from '../components/Atoms/Button';
import { ActivityIndicator } from 'react-native-paper';

const UnitDetails = ({navigation,route}) => {
    const { slot } = route.params;
    console.log(slot);
    const user=useSelector(state => state.userReducer.user);
   const [checking,setchecking]=useState(true)
   useEffect(() => {
  setTimeout(() => {
    setchecking(false)
  }, 5000);
  }, []);
  return (
    <View style={styles.container}>
        
  <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={20} mh={0}>
     
</ViewAtom>
<ViewAtom fd="row" jc="space-between" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>

<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
<TextAtom text={slot.unitCode?slot.unitCode.toUpperCase():''} c={COLORS.white} f="Poppins" s={SIZES.h2} w="500" ls={-2}/>
<TextAtom text={slot.unitName?slot.unitName:""} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />

</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>

<TextAtom text={slot.location?slot.location:""} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
<TextAtom text={slot.professor?slot.professor:''} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
</ViewAtom>
</ViewAtom>
  <TextAtom text={"Smart Timetable"} f="Poppins"s={SIZES.h1} w={"500"} ta="center" ls={-2}c={COLORS.white} />
  <TextAtom text={"Lets you keep track of your classes, acdemics, attendance and much more.."} f="Poppins"s={SIZES.h5} w={"500"} ta="center" ls={0}c={COLORS.gray2} />
  {checking?             
  <ViewAtom  fd="column" jc="center" ai="center" w="100%" bg="transparent" pv={50} br={0} mv={5} mh={0}>
     
      <ActivityIndicator size="small" color={COLORS.amber} style={{marginBottom:20}} />
      <TextAtom text={"Checking your program timetable"} f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.gray2} />

  </ViewAtom>
  
  :
    <>
  <ViewAtom  fd="column" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={40} mh={0}>
     
  <TextAtom text={"Oops!"} f="Poppins"s={SIZES.h2} w={"500"} ta="center" ls={-2}c={COLORS.gray2} />
     
  <TextAtom text={"Looks like your program timetable is not updated yet "} f="Poppins"s={SIZES.h3} w={"500"} ta="center" ls={-1}c={COLORS.gray2} />
</ViewAtom>
               
        <Button text={"Update now"}width={"90%"}bg={COLORS.amber} navigation={navigation} screen={"Timetable"} onMethodSelected={()=>{}}borderRadius={10}s={SIZES.h5}pv={0}ph={0} tc={COLORS.white} />
  <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={5} mh={0}>
     
     </ViewAtom>
        <Button text={"Update later"}width={"90%"}bg={COLORS.gray2} navigation={navigation} screen={"Timetable"} onMethodSelected={()=>{}}borderRadius={10}s={SIZES.h5}pv={0}ph={0} tc={COLORS.white} />
      
      </> } 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:50,
    alignItems:"center"
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

export default UnitDetails;

