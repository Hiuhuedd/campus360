import React from 'react';
import { View, Text } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import UpcomingAvatar from './UpcomingAvatar';
import ViewAtom from '../Atoms/ViewAtom';
import TextAtom from '../Atoms/TextAtom';
import { COLORS, SIZES } from '../../constants/theme';

export default Upcoming = ({ UpcomingArr}) => {
  
  alert(UpcomingArr.length);


  { UpcomingArr.map((event)=>{
    if (UpcomingArr.length===0 ) {
      return(
        
        <ViewAtom fd="row" jc="space-between" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
      <ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
   
       
     <UserAvatar size={40} style={{width:40,height:40, borderRadius:50}} name={`R`} bgColor="#000" />
     <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" ph={5} br={0} mv={0} mh={0}>
   
                 <TextAtom text={ ` Recharge`} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
                 <TextAtom text={` Chill`} c={COLORS.gray} f="Roboto" s={SIZES.base} w="500" />
                
        </ViewAtom>         
         </ViewAtom>
      <ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
   
       
     <ViewAtom fd="column" jc="flex-start" ai="flex-end"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
   
                 <TextAtom text={` `} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
                 <ViewAtom  ai="center" ph={3}pv={2}  bg={"transparent"}  br={5} mv={2} mh={0}>
                 <TextAtom text={`  From timetable`} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
                </ViewAtom>
                        </ViewAtom>         
         </ViewAtom>
         </ViewAtom>

      )
    }else{
      return(
     
        <UpcomingAvatar event={event} />
      )

    } 
  })   }
    
  };
  