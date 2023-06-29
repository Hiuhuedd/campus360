import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import ViewAtom from '../Atoms/ViewAtom';
import TextAtom from '../Atoms/TextAtom';
import { COLORS, SIZES } from '../../constants/theme';
import { StyleSheet, View } from 'react-native';
const PopUp=({arr,handleSetItem})=>{
 
const [selectedItem, setSelectedItem]=useState('')
    return(
  
        <View style={styles.input}   >

        <Picker
        // selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) =>
            handleSetItem(itemValue)
        }>
           { arr.map(i=>{
            return(
                <Picker.Item label={i.location} value={i.location} style={{color:COLORS.gray2,fontSize:SIZES.h5}} />
            )
            })}
        </Picker>
      </View>
       
    )
}
export default PopUp
const styles = StyleSheet.create({
    input: {
      height: 50,
      width: '25%',
    },
  });