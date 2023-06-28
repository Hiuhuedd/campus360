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


const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  

  
  
  const DayView = React.memo(({ dayObj,updatedTimetable }) => {
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
     closeSheet()
   }
 const handleTap = (slot) => {
   if(slot.unitCode&&slot.unitName&&slot.professor){
      // alert("true")
    }else{
     setTappedSlot({...slot,day:updatedTimetable.indexOf(dayObj)})
     openSheet()
    }
    
   }


   


  return (
    <View style={{marginTop:10}}>
     <TextAtom text={`${dayObj.day}s`} c={COLORS.white} f="Poppins" s={SIZES.h1} w="500" ls={-2} />
     <TextAtom text={'Tap on empty slots to add classes.'} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" ls={0} />

     <ScrollView style={{height:height-130}}  >
      {dayObj.slots.map((slot) => (
<TouchableOpacity onPress={()=>{handleTap(slot)}} >

        <React.Fragment key={slot.index}>
          <ViewAtom fd="row" jc="flex-start" ai="center" w="90%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
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
            <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={0}>

            <TextAtom text={slot.location?slot.location:""} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
            <TextAtom text={slot.professor?slot.professor:''} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
            </ViewAtom>
          </ViewAtom>
          </ViewAtom>
       
        </React.Fragment>
</TouchableOpacity>
      ))}
     </ScrollView>
     <AddClass slot={TappedSlot} handleAddClass={handleAddClass} ref={sheetRef}/>

    </View>
  );
});

function Timetable({ navigation }) {
    const user=useSelector(state => state.userReducer.user);

  const ref = useRef(null);
    const [activeIndex,setActiveIndex]=useState(0)
    const [updatedTimetable,setupdatedTimetable]=useState(timetable)

  useEffect(() => {
    ref.current?.scrollTo({ index: activeIndex });
  }, [activeIndex]);

     
  return (
    <View style={{backgroundColor:COLORS.black,flex:1, paddingTop: 45, padding: 15,height,}}>
             <TextAtom text={user.programCode} c={COLORS.gray4} f="Poppins" s={SIZES.h3} w="500" ls={-1} />
      <View   style={{height:25,}}>

           {/* <CardAtom fd="column" jc="center" ai="center" w={width/8}  pv={2} ph={0} bg={COLORS.green} br={7} mv={0} mh={1}   el={3} sh='#525252' >

              

             
           </CardAtom> */}
      </View>


      <Carousel
        ref={ref}
        loop={true}
        width={width}
        height={height-100}
        autoPlay={false}
        data={updatedTimetable}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        renderItem={({ item: dayObj }) => <DayView dayObj={dayObj}  updatedTimetable={updatedTimetable} />}
      />

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