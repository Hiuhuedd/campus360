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
import CardAtom from '../components/Atoms/CardAtom';
import BottomTabs from '../components/Molecules/BottomTabs';
import Progress from '../components/Molecules/Progress';

const Home = ({navigation}) => {
    const user=useSelector(state => state.userReducer.user);
   const [checking,setchecking]=useState(true)
   useEffect(() => {
  setTimeout(() => {
    setchecking(false)
  }, 5000);
  }, []);
  return (
    <View style={styles.container}>

     <CardAtom fd="row"  jc="space-between" ai="flex-start" pv={3} ph={10} bg={COLORS.white} br={5} mv={5} mh={3}   el={3} sh='#525252' >
     <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<TextAtom text={`Attendance`}  c={COLORS.black} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<ViewAtom fd="column" jc="space-between" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<TextAtom text={`Attended`} c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500" />
<TextAtom text={`14 classes`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
</ViewAtom>
</ViewAtom>
</ViewAtom>  
<Progress/>
 </CardAtom>
  <BottomTabs navigation={navigation} />
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:30,
    padding:10
    // alignItems:"center"
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

export default Home;

