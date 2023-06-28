import {  Text  } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
 const TextAtom=({text,c,f,s,w,ta,ls})=>{
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
        <Text  
         style={{
            fontSize:s,
            color:c,
            fontFamily:f,
            fontWeight:w,
            textAlign:ta,
            letterSpacing:ls,
        }}>
      {text}
      </Text>
   

    )
}
export default TextAtom