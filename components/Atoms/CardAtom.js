import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
 const CardAtom=(props)=>{
    const {fd,w,jc,ai,pv,ph,bg,br,mv,mh,el,sh}=props
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    Poppins1: require('../../assets/fonts/Poppins-Black.ttf'),
    Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    Lob: require('../../assets/fonts/Lobster-Regular.ttf')
              });
  
  
  if (!loaded) {
    return <AppLoading/>
  }
    return(
        <View  
         style={{
        alignItems: ai,
        display:"flex",
        width:w,
        flexDirection:fd,
        justifyContent: jc,
        paddingVertical:pv,
        paddingHorizontal:ph,
        backgroundColor:bg,
        borderRadius:br,
        marginVertical:mv,
        marginHorizontal:mh,
        elevation:el,
        shadowColor:sh
        }}>
      {props.children}
      </View>
   

    )
}
export default CardAtom