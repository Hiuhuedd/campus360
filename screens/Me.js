// import React, { useState,useEffect } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { COLORS, SIZES } from '../constants/theme';
// import TextAtom from '../components/Atoms/TextAtom';
// import { CheckBox, Divider, Icon } from 'react-native-elements';
// import ViewAtom from '../components/Atoms/ViewAtom';
// import { useSelector } from 'react-redux';
// import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
// import { Button } from '../components/Atoms/Button';
// import { ActivityIndicator } from 'react-native-paper';
// import LinearAtom from '../components/Atoms/LinearAtom';
// import BottomTabs from '../components/Molecules/BottomTabs';
// import { greet } from '../utils/helper';

// const Me= ({navigation}) => {
//     const user=useSelector(state => state.userReducer.user);
//    const [checking,setchecking]=useState(true)
//    useEffect(() => {
//   setTimeout(() => {
//     setchecking(false)
//   }, 5000);
//   }, []);
      
//   return (
//     <View style={styles.container}>
//     <LinearAtom   pv={5}  ph={10} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[COLORS.black,COLORS.dark]} >
//     <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>
     
//      </ViewAtom>
//     <ViewAtom  fd="column" jc="flex-start" ai="flex-start" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
     
//     <ViewAtom  fd="row" jc="space-between" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
//      <TextAtom text={greet()} f="Poppins"s={SIZES.h2} w={"500"}  ls={-2}c={COLORS.white} />
//         <ViewAtom  fd="row" jc="space-between" ai="center" w="30%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
//         <Icon name="information-circle" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h2} />
//         <Icon name="mail-unread" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h2} />
//         <Icon name="log-out" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h2} />

//           </ViewAtom>
//     </ViewAtom>
//           <TextAtom text={user.firstName} f="Poppins"s={SIZES.h3} w={"500"}  ls={-2}c={COLORS.white} />
//      </ViewAtom>
   
//         </LinearAtom>  

// <BottomTabs navigation={navigation} theme={COLORS.primary} />

// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// flex:1,
// backgroundColor:COLORS.dark,
// height:SIZES.height,
// paddingTop:0,
// },
 
//   pinDot: {
//     width: SIZES.h3,
//     height: SIZES.h3,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: COLORS.gray2,
//     marginHorizontal: 5,
//   },
//   pinDotFilled: {
//     backgroundColor:COLORS.gray2,
//   },
//   keypadContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   keypadButton: {
//     width: '30%',
//    aspectRatio:1.5,
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
 
// });

// export default Me;


import React, { useState,useEffect,useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image , ScrollView,  SafeAreaView,  Animated,  TextInput,} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import BottomTabs from '../components/Molecules/BottomTabs';
import LinearAtom from '../components/Atoms/LinearAtom';
import Upcoming from '../components/Molecules/Upcoming';
import { getTimeSpans } from '../utils/timeFunction';
import moment from 'moment';
import ProgressMic from '../components/Molecules/ProgressMic';
import CardAtom from '../components/Atoms/CardAtom';
import { greet } from '../utils/helper';
import { ProgramsArray } from '../constants/content/programs';
import Settings from '../components/Molecules/settings';


const AnimatedCard = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedTO = Animated.createAnimatedComponent(TouchableOpacity );


const Me = ({navigation}) => {
  const user=useSelector(state => state.userReducer.user);
  const theme=useSelector(state => state.userReducer.theme);

  //==============SCROLL ANIMATION===========
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const cardContainerAnimation = {
   marginTop: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [130, 130],
      extrapolate: 'clamp',
    }),
  };
  const featureNameAnimation = {

  //  opacity: animatedValue.interpolate({
  //     inputRange: [0, 100],
  //     outputRange: [1, 0],
  //     extrapolate: 'clamp',
  //   }),
   height: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 120],
      extrapolate: 'clamp',
    }),
   borderRadius: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [5, 0],
      extrapolate: 'clamp',
    }),

    left: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    }),
    right: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    }),
    top: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [25, 0],
      extrapolate: 'clamp',
    }),
    // backgroundColor: animatedValue.interpolate({
    //   inputRange: [0, 100],
    //   outputRange: [COLORS.dark2, theme],
    //   extrapolate: 'clamp',
    // }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 15],
      outputRange: [1,0],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 20],
          outputRange: [0, -150],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const aiAnimation3 = {
    opacity: animatedValue.interpolate({
       inputRange: [0, 25],
       outputRange: [0,1],
       extrapolate: 'clamp',
     }),
     transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 20],
          outputRange: [10, 10],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [-SIZES.width+50, -SIZES.width+50],
          extrapolate: 'clamp',
        }),
      },
    ],
 
   };

  //==============SCROLL ANIMATION===========
  const [program,setProgramName]=useState("")
  function getProgramByCode(programCode) {
    for (let i = 0; i < ProgramsArray.length; i++) {
      if (ProgramsArray[i].programCode === programCode) {
        setProgramName(ProgramsArray[i])
          return (ProgramsArray[i]) 
      }
    }
    return(null)
  }

  useEffect(() => {
    getProgramByCode(user.ProgramId)
  }, []);
  return (
    <View style={styles.container}>
<LinearAtom  ai="center"  pv={0}  ph={0} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[theme.color,COLORS.dark]} >
      
                <AnimatedCard 
                    style={[{
                      position:"absolute", 
                                          
                    display:"flex",
                    flexDirection:"row",
                    justifyContent: "space-between",
                    paddingVertical:10,
                    paddingHorizontal:10,
                    zIndex:4,
                   backgroundColor:COLORS.black,
                     elevation:3,
                    shadowColor:'#525252'
                    },featureNameAnimation]}>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start"  w={"100%"} pv={0} br={0} mv={0} mh={0}>
              
                <ViewAtom  fd="column" jc="flex-start" ai="flex-start" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>


                <AnimatedCard style={[{               
                    },featureIconAnimation]}> 

         <ViewAtom  fd="row" jc="space-between" ai="center" w="80%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
          <TextAtom text={greet()} f="Poppins"s={SIZES.h2} w={"500"}  ls={-2}c={COLORS.white} />
              <ViewAtom  fd="row" jc="space-around" ai="center" w="40%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
              <Icon name="create" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h2} />
              <Icon name="log-out" type="ionicon" ios="ios-lock" md="ios-lock" color={COLORS.white} size={SIZES.h2} />
     
               </ViewAtom>
          </ViewAtom>
               <TextAtom text={`${user.firstName} `} f="Poppins"s={SIZES.h5} w={"500"}  c={COLORS.gray4} />
               <TextAtom text={`${program.programName} `} f="Poppins"s={SIZES.base} w={"500"}  c={COLORS.gray4} />
             
         
          </AnimatedCard>
     
        </ViewAtom>
     
            </ViewAtom>  
            <AnimatedCard style={[{               
            },aiAnimation3 ]}>
               <ViewAtom  fd="row" jc="space-between" ai="center"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
                <Image source={require('../assets/user.jpg')} style={[styles.Icon]} />
              <ViewAtom  fd="column" jc="space-between" ai="flex-start" w="70%" bg="transparent" pv={1} br={0} mv={0} mh={0}>
              <TextAtom text={`${user.firstName} ${user.lastName}`} f="Poppins"s={SIZES.h3} w={"500"}  ls={-1}c={COLORS.white} />
              <ViewAtom  fd="row" jc="space-between" ai="center" w="100%" bg="transparent" pv={1} br={0} mv={0} mh={0}>
              <ViewAtom  fd="column" jc="center" ai="center" bg="transparent" pv={5} br={0} mv={0} mh={0}>
              <TextAtom text={`${user.Year}`} f="Poppins"s={SIZES.base} w={"500"}  c={COLORS.gray2} />
              <TextAtom text={`year`} f="Poppins"s={SIZES.h3} w={"500"}  ls={-1}c={COLORS.white} />
              </ViewAtom>
              <ViewAtom  fd="column" jc="center" ai="center" bg="transparent" pv={5} br={0} mv={0} mh={0}>
              <TextAtom text={`${user.Sem}`} f="Poppins"s={SIZES.base} w={"500"}  c={COLORS.gray2} />
              <TextAtom text={`Semester`} f="Poppins"s={SIZES.h3} w={"500"}  ls={-1}c={COLORS.white} />
              </ViewAtom>
              <ViewAtom  fd="column" jc="center" ai="center" bg="transparent" pv={5} br={0} mv={0} mh={0}>
              <TextAtom text={`${user.ProgramId}`} f="Poppins"s={SIZES.base} w={"500"}  c={COLORS.gray2} />
              <TextAtom text={`program`} f="Poppins"s={SIZES.h3} w={"500"}  ls={-1}c={COLORS.white} />
              </ViewAtom>
            
     
               </ViewAtom>
               </ViewAtom>
          </ViewAtom>

             </AnimatedCard>
         

            </AnimatedCard>
            <AnimatedCard style={[{display:"flex",zIndex:0
                    },cardContainerAnimation]}>
          </AnimatedCard >
  
    
<ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
    
        scrollEventThrottle={0}
        style={{zIndex:1}}
      >
    
    <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0}ph={15} mv={0} mh={0}>
    <TextAtom text={`Utilities &  Preferences`} c={COLORS.white} f="Roboto" s={SIZES.h3} w="500"  ls={-1}/>
  </ViewAtom>



<ViewAtom   bg="transparent" pv={0} br={0} mv={0} mh={5}>
   <Settings navigation={navigation} />
   {/* <Settings navigation={navigation} /> */}



</ViewAtom>

 </ScrollView>



</LinearAtom>
  <BottomTabs navigation={navigation} theme={theme} />
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.dark,
    height:SIZES.height,
    paddingTop:0,
    padding:0,
    // width:SIZES.width
    // alignItems:"center"
  },
  Icon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin:-10
  },

 
});

export default Me;


