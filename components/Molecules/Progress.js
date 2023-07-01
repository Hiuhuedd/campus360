import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import ViewAtom from '../Atoms/ViewAtom';
import TextAtom from '../Atoms/TextAtom';
import { COLORS, SIZES } from '../../constants/theme';
import { StyleSheet, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Progress=({arr,handleSetItem})=>{
     return(
  
        <View style={styles.input}   >

<AnimatedCircularProgress
  size={200}
  width={3}
  fill={100}
  tintColor="#00e0ff"
  backgroundColor="#3d5875">
  {
    (fill) => (
      <Text>
        { 100 }
      </Text>
    )
  }
</AnimatedCircularProgress>
      </View>
       
    )
}
export default Progress
const styles = StyleSheet.create({
    input: {
      height: 50,
      width: '25%',
    },
  });