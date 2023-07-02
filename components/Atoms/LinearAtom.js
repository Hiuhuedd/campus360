import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LinearAtom = (props) => {
  const {fd,w,jc,ai,pv,ph,bg,br,mv,mh,el,sh,children,colors}=props
  return (
    <LinearGradient colors={colors} style={{  
       flex: 1,
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
      // elevation:el,
      // shadowColor:sh
      }}>
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
 
  content: {
    flex: 1,
    // padding: 16,
  },
});

export default LinearAtom;
