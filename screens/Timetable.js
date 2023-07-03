import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { timetable, updateTimetableSlot } from '../utils/timetable';
import CardAtom from '../components/Atoms/CardAtom';
import { ScrollView } from 'react-native-gesture-handler';
import AddClass from '../components/Molecules/AddClass';
import { useDispatch, useSelector } from 'react-redux';
import BottomTabs from '../components/Molecules/BottomTabs';
import { getProgramByCode } from '../utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearAtom from '../components/Atoms/LinearAtom';


const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  

 
  
  const DayView = React.memo(({ dayObj,updatedTimetable,handleUpdateTimetable,navigation,}) => {
    const user=useSelector(state => state.userReducer.user);

  //==============================BOTTOM SHEET============================
  const [TappedSlot,setTappedSlot]=useState({})
  const closeSheet = (t) => {
   if (sheetRef.current) {
       sheetRef.current.close();
     }
  
   };
   const openSheet = () => {
     if (sheetRef.current) {
       sheetRef.current.open();
     }
    
   };
 
 const sheetRef = useRef(null);  
 
 const handleAddClass = () => {
  setTimeout(() => {
    closeSheet()
  }, 1000);
}


 const handleTap = (slot,day) => {
   if(slot.unitCode&&slot.unitName&&slot.professor){
navigation.navigate("UnitDetails",{slot:slot,day:day})
    }else{
     setTappedSlot({...slot,day:updatedTimetable.indexOf(dayObj)})
     openSheet()
    }
    
   }


  return (
    <View style={{marginTop:0,}}>
    
                  {/* <ViewAtom fd="row" jc="space-between" ai="flex-start" w="100%" bg="transparent" pv={0} br={0} mv={0} mh={0}>
          </ViewAtom> */}


     <TextAtom text={`${dayObj.day}s`} c={COLORS.white} f="Poppins" s={SIZES.h1} w="500" ls={-2} />
     <TextAtom text={'Tap on empty slots to add classes.'} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" ls={0} />

     <ScrollView style={{height:height-130}} showsVerticalScrollIndicator={false}  >
      {dayObj.slots.map((slot) => (
<TouchableOpacity onPress={()=>{handleTap(slot,dayObj)}} >

        <React.Fragment key={slot.index}>
          <ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
          <ViewAtom  fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
            <TextAtom text={`${slot.start}  `} c={COLORS.white} f="Roboto" s={SIZES.base} w="500" />
            <CardAtom fd="column" jc="center" ai="center" w={1}  pv={30} ph={0} bg={COLORS.green} br={3} mv={1} mh={1}   el={3} sh='#525252' >
          </CardAtom>
            <TextAtom text={`${slot.end}  `} c={COLORS.white} f="Roboto" s={SIZES.base} w="500" />
            
          </ViewAtom>
          <ViewAtom fd="row" jc="space-between" ai="center" w="90%" bg="transparent" pv={5} br={0} mv={0} mh={0}>

            <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
            <TextAtom text={slot.unitCode?slot.unitCode.toUpperCase():''} c={COLORS.white} f="Poppins" s={SIZES.h2} w="500" ls={-2}/>
            <TextAtom text={slot.unitName?slot.unitName:""} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />

          </ViewAtom>
            <ViewAtom fd="column" jc="center" ai="flex-end"  bg="transparent" pv={5} br={0} mv={0} mh={0}>

            <TextAtom text={slot.location?slot.location:""} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
            <TextAtom text={slot.professor?slot.professor:''} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
            </ViewAtom>
          </ViewAtom>
          </ViewAtom>
       
        </React.Fragment>
</TouchableOpacity>
      ))}
     </ScrollView>
     <AddClass slot={TappedSlot} handleAddClass={handleAddClass} ref={sheetRef} handleUpdateTimetable={handleUpdateTimetable} />

    </View>
  );
});

function Timetable({ navigation }) {
  const dispatch = useDispatch();
  // const [Loaded, setLoaded] = React.useState(false);

  const handleUpdateTimetable=  async(sd,si,obj)=>{
  
   const timetableUpdate=  await updateTimetableSlot(sd,si,obj)
   if(timetableUpdate){
     
     return  AsyncStorage.setItem('myTimetable', JSON.stringify(timetableUpdate)).then(()=>{
      setupdatedTimetable(timetableUpdate)
      dispatch({
        type: "MY_TIMETABLE",
        payload:timetableUpdate
      });
        return true
      })
     
 
    }else{
      return false
    }
    }
    // const timetableUpdate=useSelector(state => state.userReducer.timetable);

  const ref = useRef(null);
    const [activeIndex,setActiveIndex]=useState(0)
    const [updatedTimetable,setupdatedTimetable]=useState(timetable)


  useEffect(() => {
    ref.current?.scrollTo({ index: activeIndex });
  }, [activeIndex]);

  useEffect(() => {
  }, [updatedTimetable]);

  const bgs=[COLORS.primary,COLORS.amber,COLORS.green,COLORS.gold,COLORS.gray2,COLORS.rose,COLORS.fuschia,COLORS.blue,COLORS.green2,COLORS.chocolate,COLORS.pink]
  const [BgIndex,setBgIndex]=useState(0)
  const theme=bgs[BgIndex]
  return (
    <View style={{backgroundColor:COLORS.dark2,flex:1, paddingTop: 0, padding: 0,height,}}>
           <LinearAtom  ai="center"  pv={35}  ph={0} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[COLORS.black,COLORS.dark]} >


      <Carousel
        ref={ref}
        loop={true}
        width={width-10}
        height={height}
        autoPlay={false}
        data={updatedTimetable}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        renderItem={({ item: dayObj }) => <DayView dayObj={dayObj}  updatedTimetable={updatedTimetable} handleUpdateTimetable={handleUpdateTimetable} navigation={navigation} />}
      />
           </LinearAtom>

<BottomTabs navigation={navigation} />
    </View>
  );
}

export default Timetable;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '90%',
    color: '#fff',
  },
});