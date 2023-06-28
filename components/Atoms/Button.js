import {  Text,  TouchableOpacity,  } from 'react-native';
import appTheme from '../../constants/theme';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
const {COLORS, SIZES,WEIGHT, FONTS}=appTheme
export const Button=({text,width,bg,navigation,screen, onMethodSelected,borderRadius,s,pv,ph,tc})=>{
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    Poppins1: require('../../assets/fonts/Poppins-Black.ttf'),
    Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    Lob: require('../../assets/fonts/Lobster-Regular.ttf')
              });
  
  
  if (!loaded) {
    return <AppLoading/>
  }
  const fontsize=s?s:SIZES.h5
  const fontcolor=tc?tc:COLORS.white
  const padv=pv?pv:13
  const padh=ph?ph:13
  const vText=text?text:"hi"
  const HandleOnPress=()=>{
    if(navigation){
      onMethodSelected(vText);
      navigation.navigate(screen);
    }else{
      onMethodSelected(vText);
    }
  }
    return(
        <TouchableOpacity
        style={{
          backgroundColor: bg,
          alignItems: "center",
          borderRadius: borderRadius,
          width: width,
          paddingHorizontal: padh,
          paddingVertical: padv,
          elevation: 1,
          shadowColor: COLORS.gray2,
          fontFamily:"Poppins"
        }}
        onPress={ ()=>{ HandleOnPress()} }
      >
        <Text style={{fontFamily:"Poppins", color: fontcolor, fontSize: fontsize}}>{text}</Text>
   
      </TouchableOpacity>
    )
}