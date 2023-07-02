import React, { useState,useEffect,useRef } from 'react';

import { View, TouchableOpacity, Text, StyleSheet,Image , ScrollView,  SafeAreaView,  Animated,  TextInput,} from 'react-native';

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
import LinearAtom from '../components/Atoms/LinearAtom';
import Upcoming from '../components/Molecules/Upcoming';
import Networks from '../components/Molecules/Networks';

import { getFeatureViewAnimation } from '../utils';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedCard = Animated.createAnimatedComponent(View);
const AnimatedHeader = Animated.createAnimatedComponent(SafeAreaView);
const AnimatedImage = Animated.createAnimatedComponent(Image);
// const AnimatedTextAtom = Animated.createAnimatedComponent(TextAtom);

const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 130;
const Home = ({navigation}) => {
  //==============SCROLL ANIMATION===========
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const depositViewAnimation = getFeatureViewAnimation(animatedValue, 36);
  const withdrawViewAnimation = getFeatureViewAnimation(animatedValue, -60);
  const qrViewAnimation = getFeatureViewAnimation(animatedValue, -56);
  const scanViewAnimation = getFeatureViewAnimation(animatedValue, -92);

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
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [1,0],
      extrapolate: 'clamp',
    }),
  };

  const textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };


  //==============SCROLL ANIMATION===========

    const user=useSelector(state => state.userReducer.user);
    const bgs=[COLORS.primary,COLORS.amber,COLORS.green,COLORS.gold,COLORS.gray2,COLORS.rose,COLORS.fuschia,COLORS.blue,COLORS.green2]
    const [BgIndex,setBgIndex]=useState(0)
    const theme=bgs[BgIndex]
   const [checking,setchecking]=useState(true)
   useEffect(() => {
  setTimeout(() => {
    setchecking(false)
  }, 5000);
  }, []);
  return (
    <View style={styles.container}>
<LinearAtom  ai="center"  pv={0}  ph={0} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[theme,COLORS.dark]} >
      


{/* <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView> */}

      {/* <AnimatedHeader style={[styles.header]}></AnimatedHeader> */}

        {/* <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../assets/360.png')}
              style={[styles.icon16, { marginLeft: 8 }]}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput, textInputAnimation]}
            />
          </View>

  <Icon name={"swap-vertical-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
  <Icon name={"swap-vertical-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
        </View> */}

      
          {/* <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../assets/360.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../assets/360.png')}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              NẠP TIỀN
            </Animated.Text>
          </Animated.View> */}


       
{/* <View style={{position:"relative",                                    
                    display:"flex",
                    flexDirection:"row",
                    justifyContent: "space-between",
                   alignItems:"center",
                    }}>
</View > */}
                <AnimatedCard 
                    style={[{
                      position:"absolute", 
                                          
                    display:"flex",
                    flexDirection:"row",
                    justifyContent: "space-between",
                    paddingVertical:10,
                    paddingHorizontal:10,
                    backgroundColor:COLORS.dark,
                   
                     elevation:3,
                    shadowColor:'#525252'
                    },featureNameAnimation]}>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={0}>
                <TouchableOpacity style={{display:"flex",flexDirection:"row"}} onPress={()=>{setBgIndex( Math.floor(Math.random() * 10))}}>
                <AnimatedImage source={require('../assets/360ai.png')} style={[styles.Icon]} />
                <TextAtom text={`   aska v1.0.12`} c={theme} f="Poppins" s={SIZES.base} w="500" />

                    </TouchableOpacity>
     <AnimatedCard style={[{               
                    },featureIconAnimation]}>

            <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" ph={0} br={0} mv={5} mh={0}>

            <ViewAtom fd="row" jc="space-between" ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

            <TextAtom text={`Usage`} c={theme} f="Poppins" s={SIZES.h5} w="500" />
            <TextAtom text={`   114 conversations`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            <ViewAtom fd="row" jc="space-between" ai="center"  bg="transparent" pv={0} br={0} mv={0} mh={0}>

            <TextAtom text={`Tokens`} c={theme} f="Poppins" s={SIZES.h5} w="500" />
            <TextAtom text={`  38k / 50k`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            <ViewAtom fd="row" jc="space-between" ai="center" bg="transparent" pv={0} br={0} mv={0} mh={0}>

            <TextAtom text={`Parameters`} c={theme} f="Poppins" s={SIZES.h5} w="500" />
            <TextAtom text={`  23`} c={COLORS.gray2} f="Poppins" s={SIZES.base} w="500" />
            </ViewAtom>
            </ViewAtom>
          </AnimatedCard>
            </ViewAtom>  
            <Progress theme={theme}/>
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
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }}
        scrollEventThrottle={1}
        style={{zIndex:120}}
      >
    
      


 <ViewAtom fd="row" jc="space-between"  ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
 <TextAtom text={`Upcoming`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
 <ViewAtom   fd="row" ai="center"  bg={theme} pv={3} ph={3} br={50} mv={0} mh={0}>
 <TextAtom text={`see all  `} c={COLORS.white} f="Poppins" s={SIZES.base} w="500" />

 <Icon name={"return-up-forward-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
</ViewAtom>
</ViewAtom>
<ViewAtom   bg="transparent" pv={0} br={0} mv={0} mh={10}>
<Upcoming/>
</ViewAtom>

<ViewAtom fd="row" jc="space-between" ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
<TextAtom text={`My networks`}  c={COLORS.white} f="Poppins" s={SIZES.h3} w="500" />
<ViewAtom fd="row" ai="center"  bg={theme} pv={3} ph={3} br={50} mv={0} mh={0}>
<TextAtom text={`newest  `} c={COLORS.white} f="Poppins" s={SIZES.base} w="500" />
 <Icon name={"swap-vertical-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />
</ViewAtom>
</ViewAtom>
<ViewAtom fd="column" jc="space-between"  ai="flex-start"  bg="transparent" pv={0} br={0} mv={0} mh={10}>
<Networks/>
<Networks/>
<Networks/>
<Networks/>
<Networks/>
<Networks/>

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

