import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  
} from 'react-native';
import LinearAtom from '../components/Atoms/LinearAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { Icon } from 'react-native-elements';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { useSelector } from 'react-redux';
import CardAtom from '../components/Atoms/CardAtom';
import Carousel from 'react-native-snap-carousel'
const {width, height} = Dimensions.get('window');



const slides = [
  {
    id: '1',
    images: ["key","scan-outline","scan-outline","scan-outline"],
    title: 'Create your scan key',
    subtitle: 'Become Premium student, create your scan key, Join 360 student ambassador Community, earn',
  },
  {
    id: '2',
    images: ["scan","scan-outline","scan-outline","scan-outline"],
    title: 'Invite and earn',
    subtitle: "Scan your invites' QR code, Earn tokens.  ",
  },
  {
    id: '3',
    images: ["cash","scan-outline","scan-outline","scan-outline"],
    title: 'Convert your tokens to cash',
    subtitle: 'Redeem your 360 tokens to cash in your preferred payment method.',
  },
];

const Slide = ({item}) => {
  const theme=useSelector(state => state.userReducer.theme);

  return (
    <View style={{ alignItems: 'center',justifyContent:"center"}}>
     
     <TextAtom text={`Step ${item.id} of 3`}s={SIZES.h2} w={"500"} f="Poppins" ta="center" ls={-2}c={COLORS.white} />
                      <Image source={require('../assets/ob.png')} style={[styles.Icon]} />

    <CardAtom fd="column" jc="center"   ai="center" w="80%"  pv={0} ph={20}  br={15} mv={0}>   
    

      <CardAtom   pv={5} ph={5}  br={5} mv={0} bg={COLORS.black}>   
 <Icon name={item.images[0]} type="ionicon" color={COLORS.white} size={SIZES.largeTitle} onPress={() => {navigation.navigate('Me')}} />

     </CardAtom>
      <View>
      <TextAtom text={item?.title}s={SIZES.h2} w={"500"} f="Poppins" ta="center" ls={-1}c={COLORS.white} />

     <TextAtom text={item?.subtitle}s={SIZES.h5} w={"500"} f="Poppins"ta="center" ls={0}c={COLORS.gray4} />
      </View>
     </CardAtom>
    </View>
  );
};

const InvitesOnboarding = ({navigation}) => {
  const theme=useSelector(state => state.userReducer.theme);

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  

  const goToNextSlide = () => {
   
      ref?.current.scrollToOffset({currentSlideIndex});
      setCurrentSlideIndex(currentSlideIndex + 1);
    
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.30,
          // justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

       {/* Render buttons */}
       <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={{ 
                  flex: 1,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: theme.color,
                  justifyContent: 'center',
                  alignItems: 'center'}}
                onPress={() => navigation.navigate('Tokens')}>
                     <TextAtom text="get started"s={SIZES.h5} w={"500"} f="Poppins"ta="center" ls={0}c={COLORS.white} />

              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems:"center"}}>
             
              <View style={{}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={{ flex: 1,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: theme.color,
                  justifyContent: 'center',
                  alignItems: 'center'}}>
                     <TextAtom text="next"s={SIZES.h5} w={"500"} f="Poppins"ta="center" ls={0}c={COLORS.white} />

              </TouchableOpacity>
            </View>
          )}
      
       
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1,width}}>
 <LinearAtom   pv={5}  ph={20} bg={COLORS.white} br={0} mv={0} mh={0} w="100%" ai="center" jc="center" el={0} sh='#000' colors={[theme.color,COLORS.dark]} >
                <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>    
     </ViewAtom>

     <ViewAtom fd="row" width="100%" ph={10} pv={10} jc="space-between" >
        <Icon name={"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Me')}} />
      <ViewAtom fd="row"  ph={7} pv={5} bg={COLORS.dark} br={15} >
        <TouchableOpacity onPress={()=>{ }}>
          <TextAtom text={"skip"} f="Poppins"s={SIZES.h5} w={"500"} ls={0}c={COLORS.white} />
        </TouchableOpacity>
      </ViewAtom>
</ViewAtom>
 
<View style={{  }}>
      {/* <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height-200,alignItems:"center",justifyContent:"center"}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
      
        renderItem={({item}) => <Slide item={item} />}
       

      /> */}

<Carousel
            layout={"default"}
            ref={ref}
            data={slides}
            renderItem={({item}) => <Slide item={item} />}
            sliderWidth={width}
            itemWidth={width}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              // overflow: 'visible',
              // marginVertical: 10
            }}
            onSnapToItem = { index => setCurrentSlideIndex(index) }
            contentContainerCustomStyle={{
              height: height*.8,
            }}
            />

      <Footer />
      </View>
</LinearAtom>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },

  Icon: {
    width: "60%",
    height: '60%',
    borderRadius: 5,
        resizeMode:"contain",
        // backgroundColor:'yellow',
margin:-20  },

});
export default InvitesOnboarding;