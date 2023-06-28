import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
 const ViewAtom=(props)=>{
    const {fd,w,jc,ai,pv,ph,bg,br,mv,mh}=props
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
        marginHorizontal:mh
        }}>
      {props.children}
      </View>
   

    )
}
export default ViewAtom