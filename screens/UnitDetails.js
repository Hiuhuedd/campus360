import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Switch } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Button } from '../components/Atoms/Button';
import { ActivityIndicator } from 'react-native-paper';
import CardAtom from '../components/Atoms/CardAtom';
import { myUnitsInfo } from '../constants/content/unitDetails';

const UnitDetails = ({navigation,route}) => {
    const { slot,day } = route.params;
    const user=useSelector(state => state.userReducer.user);
   const [unitObj,setunitObj]=useState({})
//    useEffect(() => {
//   setTimeout(() => {
//     setchecking(false)
//   }, 5000);
//   }, []);
  function findUnitInfo(unitName) {
    for (let i = 0; i < myUnitsInfo.length; i++) {
      if (myUnitsInfo[i].name === unitName) {
          setunitObj(myUnitsInfo[i])
        return myUnitsInfo[i];
      }
    }
    // setunitObj(myUnitsInfo[i])
    return null; // Unit not found
  }
  
  
  useEffect(() => {
    findUnitInfo(slot.unitName)
  }, []);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
        
  {/* <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={20} mh={0}>
     
</ViewAtom> */}
  <ViewAtom fd="row"  jc="space-between" ai="center" bg="transparent"  pv={5} br={0} mv={0} mh={0}>
        <Icon name={"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {}} />
      <ViewAtom fd="row"  ph={7} pv={5} bg={COLORS.amber} br={15} >
        <TouchableOpacity onPress={()=>{}}>
          <TextAtom text={"Edit"} f="Poppins"s={SIZES.h5} w={"500"} ls={0}c={COLORS.white} />
        </TouchableOpacity>
      </ViewAtom>
      </ViewAtom>
<ViewAtom fd="row" jc="space-between" ai="flex-end" w="100%" bg="transparent" ph={0}pv={5} br={0} mv={0} mh={0}>

<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent"  pv={5} br={0} mv={0} mh={0}>
<TextAtom text={slot.unitCode?slot.unitCode.toUpperCase():''} c={COLORS.white} f="Poppins" s={SIZES.largeTitle} w="500" ls={-2}/>
<TextAtom text={`${day.day}s`} c={COLORS.white} f="Poppins" s={SIZES.h2} w="500" ls={-2} />

<TextAtom text={slot.unitName?slot.unitName:""} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />

</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>

<TextAtom text={slot.professor?slot.professor:''} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
<TextAtom text={slot.location?slot.location:""} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
</ViewAtom>
</ViewAtom>
<CardAtom fd="column" jc="center" ai="center"   pv={.3} ph="48%" bg={COLORS.green} br={3} mv={1} mh={1}   el={3} sh='#525252' >
          </CardAtom>

<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={15} br={0} mv={0} mh={0}>

<TextAtom text={`About ${slot.unitName}`} c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<TextAtom text={`${unitObj.about}`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500" />
</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={10} br={0} mv={0} mh={0}>

<TextAtom text={`How is ${slot.unitName} relevant`} c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<TextAtom text={`${unitObj.why}`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500" />
</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start" w={"100%"} bg="transparent" pv={10} br={0} mv={0} mh={0}>

<TextAtom text={`Attendance`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
<ViewAtom fd="row" jc="space-between" ai="center" w="100%"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<TextAtom text={`Attending`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500" />
<Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /></ViewAtom>
<ViewAtom fd="row" jc="space-between" ai="center" w="100%"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<TextAtom text={`Attended`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500" />
<TextAtom text={`14 classes`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
</ViewAtom>
</ViewAtom>
</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start" w={"100%"} bg="transparent" pv={10} br={0} mv={0} mh={0}>

<TextAtom text={`Performance`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
<ViewAtom fd="row" jc="space-between" ai="center" w="100%"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

<TextAtom text={`Ranking`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500" />
<ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
<CardAtom fd="column" jc="center" ai="center"   pv={2} ph={2} bg={COLORS.green} br={50}  mh={1}   el={3} sh='#525252' >
          </CardAtom>
<TextAtom text={` Unavailable`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
</ViewAtom>
</ViewAtom>

</ViewAtom>
</ViewAtom>
<ViewAtom fd="column" jc="flex-start" ai="flex-start" w={"100%"} bg="transparent" pv={10} br={0} mv={0} mh={0}>

<TextAtom text={`Peer Aid Community`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="column" jc="center" ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
<Icon name={"add-circle"} type="ionicon" color={COLORS.white} size={SIZES.largeTitle} onPress={() => {navigation.navigate("")}} />
<TextAtom text={`Peer aid community features require that you update your class performance to get started`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
<TextAtom text={`Your peers are waiting for you`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />


</ViewAtom>
</ViewAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:SIZES.width,
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:30,
    padding:20
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

export default UnitDetails;

