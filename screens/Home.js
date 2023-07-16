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
import Networks from '../components/Molecules/Networks';
import { getTimeSpans } from '../utils/timeFunction';
import { timetable } from '../utils/timetable';
import moment from 'moment';
import ProgressMic from '../components/Molecules/ProgressMic';
import CardAtom from '../components/Atoms/CardAtom';


const AnimatedCard = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedTO = Animated.createAnimatedComponent(TouchableOpacity );

const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 130;
const Home = ({navigation}) => {
  const user=useSelector(state => state.userReducer.user);
 
  const theme=useSelector(state => state.userReducer.theme);
  console.log(theme);
  //==============SCROLL ANIMATION===========
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const cardContainerAnimation = {
   marginTop: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [200, 130],
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
      outputRange: [150, 100],
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
      outputRange: [40, 0],
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

  const aiAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, 160],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [5, 20],
          extrapolate: 'clamp',
        }),
      },
    ],

  };
  const aiAnimation2 = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [-10, -25],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, 10],
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
          outputRange: [0, 34],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -140],
          extrapolate: 'clamp',
        }),
      },
    ],
 
   };

  //==============SCROLL ANIMATION===========
 
const [UpcomingArr,setUpcomingArr]=useState([])

const returnTTDay=(day)=>{
  for (const dayObject of timetable) {
    if (dayObject.day ===day) {
      const currentTime = new Date();

      const filteredSlots = dayObject.slots.filter((slot) => {
        const convertedDate = moment( slot.start, 'h:mm A').format();
const date1 = new Date(currentTime);
const date2 = new Date(convertedDate);
        return  date1<= date2 && slot.unitCode!==null
      });
    setUpcomingArr(filteredSlots)
    }
  }
  return null; // Day object not found
}
   
   const [checking,setchecking]=useState(true)
   useEffect(() => {
    returnTTDay(getTimeSpans().today.day.trim().replace(",", ""))
  setTimeout(() => {
    setchecking(false)
  }, 5000);
  }, []);


  const params=63
  const defaultParams=180
  const tokens=36
  const defaultTokens=50
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
          
                   backgroundColor:COLORS.dark2,
                     elevation:3,
                    shadowColor:'#525252'
                    },featureNameAnimation]}>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start"  w={"45%"} pv={0} br={0} mv={0} mh={0}>
                <AnimatedTO style={[{display:"flex",flexDirection:"row"},aiAnimation]} onPress={()=>{}}>
                <AnimatedImage source={require('../assets/360ai.png')} style={[styles.Icon]} />
                <TextAtom text={`   aska v1.0.12`} c={theme} f="Poppins" s={SIZES.base} w="500" />

                    </AnimatedTO>
     <AnimatedCard style={[{               
                    },featureIconAnimation]}>

            <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" ph={0} br={0} mv={5} mh={0}>

            <ViewAtom fd="column" jc="space-between" ai="flex-start"   bg="transparent" pv={0} br={0} mv={0} mh={0}>
            <TextAtom text={`0 conversations`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            <ViewAtom fd="column" jc="space-between" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

            <TextAtom text={`Tokens`} c={theme.name==="Dark"?COLORS.white:theme.color} f="Poppins" s={SIZES.base} w="500" />

            <CardAtom fd="row" jc="flex-start" w={"100%"}  ai="center" pv={0} ph={0}  br={5} mv={-3} mh={0} el={30} sh={COLORS.black}>
                <CardAtom fd="row" jc="flex-start" w={`${(tokens/defaultTokens)*100}%`}  ai="flex-start" pv={1} ph={0} bg={theme.name==="Dark"?COLORS.white:theme.color} br={2} mv={0} mh={0} el={30} sh={COLORS.black}></CardAtom>
                <TextAtom text={` ${Math.floor((tokens/defaultTokens)*100)}%`} c={theme.name==="Dark"?COLORS.white:theme.color} f="Poppins" s={SIZES.base} w="500" />

           </CardAtom>


            <TextAtom text={`${tokens}k / ${defaultTokens}k`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            <ViewAtom fd="column" jc="space-between" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

            <TextAtom text={`Parameters`} c={theme.name==="Dark"?COLORS.white:theme.color} f="Poppins" s={SIZES.base} w="500" />
            <CardAtom fd="row" jc="flex-start" w={"100%"}  ai="center" pv={0} ph={0}  br={5} mv={-3}  mh={0} el={30} sh={COLORS.black}>
                <CardAtom fd="row" jc="flex-start" w={`${(params/defaultParams)*100}%`}  ai="flex-start" pv={1} ph={0} bg={theme.name==="Dark"?COLORS.white:theme.color} br={2} mv={0} mh={0} el={30} sh={COLORS.black}></CardAtom>
                <TextAtom text={` ${Math.floor((params/defaultParams)*100)}%`} c={theme.name==="Dark"?COLORS.white:theme.color} f="Poppins" s={SIZES.base} w="500" />

           </CardAtom>
            <TextAtom text={`${params}k / ${defaultParams}k`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            </ViewAtom>
          </AnimatedCard>
            </ViewAtom>  
            <AnimatedCard style={[{               
            },aiAnimation3 ]}>
       <TextAtom text={`${getTimeSpans().today.date} `} c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />

             </AnimatedCard>
            <AnimatedCard style={[{              
            },aiAnimation2 ]}>
            <ProgressMic theme={theme}/>
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
        // onScrollEndDrag={() => {
        //   scrollViewRef.current?.scrollTo({
        //     y: scrollDirection.current === 'down' ? 0 : 0,
        //     animated: true,
        //   });
        // }}
        scrollEventThrottle={0}
        style={{zIndex:120}}
      >
    
      


 <ViewAtom fd="row" jc="space-between"  ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
 <TextAtom text={`Coming up`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
 <ViewAtom   fd="row" ai="center"  bg={theme} pv={3} ph={3} br={50} mv={0} mh={0}>
 <TextAtom text={`see all  `} c={COLORS.white} f="Poppins" s={SIZES.base} w="500" />

 <Icon name={"return-up-forward-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
</ViewAtom>
</ViewAtom>
<ViewAtom   bg="transparent" pv={0} br={0} mv={0} mh={10}>
<Upcoming UpcomingArr={UpcomingArr}/>
</ViewAtom>

<ViewAtom fd="row" jc="space-between" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
<TextAtom text={`My networks`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="row" ai="center"  bg={theme} pv={3} ph={3} br={50} mv={0} mh={0}>
<TextAtom text={`newest  `} c={COLORS.white} f="Poppins" s={SIZES.base} w="500" />
 <Icon name={"swap-vertical-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
</ViewAtom>
</ViewAtom>
<ViewAtom fd="column" jc="space-between"  ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
<Networks navigation={navigation} />
<Networks navigation={navigation} />


</ViewAtom>
{/* <View style={styles.scrollViewContent} /> */}
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
    width: 60,
    height: 60,
    borderRadius: 50,
    margin:-10
  },

  icon16: {
    width: 16,
    height: 16,
  },
  icon32: {
    width: 32,
    height: 32,
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP,
  },
  header: {
    // position: 'absolute',
    width: SIZES.width,
   alignItems:"center"
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP,
    
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  searchInput: {
    color: 'green',
    marginLeft: 8,

  },

  
  feature: {
    alignItems: 'center',
    width: LOWER_HEADER_HEIGHT,
  },
  featureName: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 8,
  },
  spaceForHeader: {
    height: UPPER_HEADER_HEIGHT + LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    height: 1200,
    backgroundColor: '#111',
  },
});

export default Home;

