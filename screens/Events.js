import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Button } from '../components/Atoms/Button';
import { ActivityIndicator } from 'react-native-paper';
import LinearAtom from '../components/Atoms/LinearAtom';
import BottomTabs from '../components/Molecules/BottomTabs';
import { ProgramsArray } from '../constants/content/programs';
import { ImageBackground } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { getShade } from '../utils/colorShade';

const Events = ({navigation,route}) => {
    const { event } = route.params;

    const theme=useSelector(state => state.userReducer.theme);
    const user=useSelector(state => state.userReducer.user);
   useEffect(() => {
  console.log(event);
  }, []);
  const companies = [
    'Apple Inc.',
    'Microsoft Corporation',
    'Amazon.com, Inc.',
    'Alphabet Inc. (Google)',
    'Facebook, Inc.',
    'Tesla, Inc.',
    'Netflix, Inc.',
    'Intel Corporation',
    'Adobe Inc.',
    'Salesforce.com, Inc.',
    'Oracle Corporation',
    'IBM Corporation',
  ];
  return (
    <View style={styles.container}>
                
                 <LinearAtom    w="100%"  pv={0}  ph={0} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[theme.color,COLORS.dark]} >
              
     <ImageBackground source={{ uri: event.img }} style={{width:SIZES.width,}}resizeMode='cover' >
     <ViewAtom  fd="column" jc="center"  w="100%" bg={getShade(theme.color,0.8)} pv={25} ph={20} br={0} mv={0} mh={0}>
     <ViewAtom fd="row" width="100%" ph={0} pv={10} jc="space-between" ai="center" >
        <Icon name={"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Home')}} />
      <ViewAtom fd="row"  ph={7} pv={5}  bg={COLORS.white} br={15} >
        <TouchableOpacity onPress={()=>{}}>
          <TextAtom text={"Attend"} f="Poppins"s={SIZES.h5} w={"500"} ls={0}c={theme.color} />
        </TouchableOpacity>
      </ViewAtom>
</ViewAtom>
<TextAtom text={event.title} f="Poppins"s={SIZES.h1} w={"700"} ta="left" ls={-1}c={COLORS.white} />
     

     </ViewAtom>
     </ImageBackground>
     <ScrollView
        showsVerticalScrollIndicator={false}
       
      >
     <ViewAtom  fd="column" jc="center"  w="100%"  pv={20} ph={15} br={0} mv={0} mh={0}>
     <TextAtom text={'Event details'} f="Poppins"s={SIZES.h2} w={"500"} ta="left" ls={-1}c={COLORS.white} />
     <ViewAtom fd="column" jc="flex-start" ai="flex-start" bg="transparent" pv={0} ph={10} br={0} >
     <ViewAtom fd="row" jc="space-between" ai="center"  bg="transparent" pv={0} br={0} mv={20} mh={0}>
     <Icon name={"calendar"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Home')}} />
       
 
   <ViewAtom fd="column"  jc="center"  w="80%"   bg="transparent"  ph={0} br={0} mv={0} mh={20}>
   <ViewAtom fd="row" jc="space-between"  ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

               <TextAtom text={`${event.date.date}th`} c={COLORS.white} f="Roboto" s={SIZES.h3} w="700" />
               <TextAtom text={event.date.day} c={COLORS.gray} f="Roboto" s={SIZES.h3} w="700" />
              
      </ViewAtom>         
   <ViewAtom fd="row" jc="space-between"  ai="center"  pv={0} br={0} mv={10} mh={0}>

               <TextAtom text={event.date.month} c={COLORS.gray2} f="Roboto" s={SIZES.h5} w="500" />
               <TextAtom text={`Start ${event.date.start} - End ${event.date.end}`} c={COLORS.gray2} f="Roboto" s={SIZES.h5} w="500" />
              
      </ViewAtom>         
      </ViewAtom>   
       
      {/* <ViewAtom fd="row"  ph={8} pv={8} bg={theme.color} br={3} mh={10} >
      </ViewAtom>       */}
       </ViewAtom>
<ViewAtom fd="row"  ph={0} pv={10}  ai="center" >
        <Icon name={"location"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Home')}} />

        <TouchableOpacity onPress={()=>{}} style={{paddingHorizontal:20}}>
        <TextAtom text={`${event.venue}, ${event.location}`} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={-.5}c={COLORS.white} />
        </TouchableOpacity>
</ViewAtom>
<ViewAtom fd="row"   bg="transparent" pv={0} br={0} mv={20} mh={0}>
   
       

<Icon name={"mail"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Home')}} />
   <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" ph={20} br={0} mv={0} mh={0}>
 
               <TextAtom text={event.inquiry.deskName} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
               <TextAtom text={event.inquiry.email} c={COLORS.gray} f="Roboto" s={SIZES.base} w="500" />
              
      </ViewAtom>         
       </ViewAtom>
       </ViewAtom>

<TextAtom text={"About this event"} f="Poppins"s={SIZES.h2} w={"500"} ta="left" ls={-1}c={COLORS.white} />
<ViewAtom fd="column"   ai="flex-start"jc="flex-start"  pv={0} br={0} mv={10} mh={15}>

<TextAtom text={'Theme  '} c={COLORS.gray} f="Roboto" s={SIZES.h5} w="500" />
<TextAtom text={`${event.theme} `} c={COLORS.gray2} f="Roboto" s={SIZES.h5} w="500" />

</ViewAtom>  
<ViewAtom fd="column"   ai="flex-start"jc="flex-start"  pv={0} br={0} mv={10} mh={15}>

<TextAtom text={'Description '} c={COLORS.gray} f="Roboto" s={SIZES.h5} w="500" />
<TextAtom text={`${event.description} `} c={COLORS.gray2} f="Roboto" s={SIZES.h5} w="500" />

</ViewAtom>  
<TextAtom text={"Sponsored by"} f="Poppins"s={SIZES.h2} w={"500"} ta="left" ls={-1}c={COLORS.white} />
<ViewAtom fd="column"   ai="flex-start"jc="flex-start"  pv={0} br={0} mv={10} mh={10}>

<FlatList
      data={companies}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.companyContainer}>
          <TextAtom text={item} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={0}c={COLORS.white} />

        </View>
      )}
    />
</ViewAtom>  
<TextAtom text={"Peers attending"} f="Poppins"s={SIZES.h2} w={"500"} ta="left" ls={-1}c={COLORS.white} />
<ViewAtom fd="row"   ai="flex-start"  pv={0} br={0} mv={10} mh={10}>
<Icon name={"people"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Home')}} />
<TextAtom text={"     32 students"} f="Poppins"s={SIZES.h3} w={"500"} ta="left" ls={-1}c={COLORS.white} />

     </ViewAtom>
     </ViewAtom>
     </ScrollView>
             
     
    
        </LinearAtom>  
            
  <BottomTabs navigation={navigation} theme={COLORS.primary} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:0,
    width:SIZES.width
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
  companyContainer: {
    margin: 5,

  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:COLORS.white
  },
 
});

export default Events;

