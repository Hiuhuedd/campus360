import { ActivityIndicator, Image, View ,StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { promptFunction } from '../utils/360ai';


function IntroScreen({navigation}) {
  const dispatch = useDispatch();

  const [loader, setloader] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setloader(true)
      navigation.navigate('PinScreen')

    }, 2000);
    AsyncStorage.getItem('Student').then(value => {
            if (value !== null) {
              dispatch({
                type: "ON_USER",      
                payload:JSON.parse(value)
              });
              AsyncStorage.getItem('myTimetable').then(value => {
                if (value !== null) {
                  dispatch({
                    type: "MY_TIMETABLE",
                    payload:JSON.parse(value)
                  });
            
                  setTimeout(() =>{
                      navigation.navigate('PinScreen')
                  }, 3000)
                  
                }
                })

            }else{
              setTimeout(() =>{
                  navigation.navigate('AuthScreen')
              }, 6000)
              
            }
          });
    }, [])
  
      return (
        <View  style={styles.screen}>
             <Image source={require('../assets/360.gif')}  style={styles.Icon} />
            { loader? 
              <ActivityIndicator size="small" color="#fff" />
                    :<></>
                    }
        </View>
    
      );
    }
  
  export default IntroScreen;
  const styles = StyleSheet.create({
      Icon:{
        width:"35%",
        height: "18%",
        marginBottom:"5%"
    },
   
    screen:{
      backgroundColor:"#000",
      flex: 1,
      display:"flex",
      flexDirection:"column",
      alignItems: 'center',
      justifyContent:"center",
  
    }
  })
  