import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import appTheme from "../../constants/theme";
import ViewAtom from "../Atoms/ViewAtom";
const {COLORS, SIZES, FONTS}=appTheme
export default function BottomTabs({navigation}) {

  // const badge= cartItems>0? <Badge  containerStyle={{ position: 'absolute', top: -12, right: -9 }} value={cartItems} status="success" />:<></>
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      

      }}
    >
      <Icon icon="home" text="Home" screen="Home" navigation={navigation} badge={<></>}  size={20}/>
      <Icon icon="bookmark" text="Cart"  screen="Appointments" navigation={navigation} badge={{}}  size={20}v />
      <Icon icon="plus" text="plu"  screen="BookingOne" navigation={navigation} badge={{}}  size={30} />
      <Icon icon="message-square" text="Orders" screen="Consultation" navigation={navigation} badge={<></>}  size={20}/>
      <Icon icon="user" text="Account" screen="AccountScreen"  navigation={navigation} badge={<></>}   size={20}/>
    </View>
  );
}

const Icon = ({ icon, text,screen,navigation,badge,size }) => (
  <TouchableOpacity  onPress={() => {navigation.navigate(screen) }} >

 { size>20? 
   <ViewAtom  jc="flex-start" ai="flex-start"  pv={12} ph={15} bg={COLORS.primary} br={50} mv={0} mh={0} >
   <Feather 
    name={icon}
      size={size}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}   color={COLORS.white}/>
   </ViewAtom>:

    <Feather
      name={icon}
      size={size}
      style={{
        marginTop: 20,
        alignSelf: "center",
      }}
      />}
    
    
  </TouchableOpacity>
);
const styles =StyleSheet.create({



});