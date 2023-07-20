import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList
} from 'react-native';

// Install These Packages
import SlidingUpPanel from 'rn-sliding-up-panel'
import Carousel from 'react-native-snap-carousel'
import UserAvatar from 'react-native-user-avatar';

// From Expo
import {MaterialIcons} from '@expo/vector-icons'
import CardAtom from '../components/Atoms/CardAtom';
import TextAtom from '../components/Atoms/TextAtom';
import { COLORS, SIZES } from '../constants/theme';
import { useSelector } from 'react-redux';
import LinearAtom from '../components/Atoms/LinearAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { Icon } from 'react-native-elements';

const Tokens = ({navigation}) => {

  // Users Data

  const Users = [
    {
      key: '1',
      userImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jessica',
      transactionDate: '25 April 20',
      amount: '$350',
      credit: true
    },
    {
      key: '2',
      userImage: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Micela',
      transactionDate: '16 April 20',
      amount: '$150',
      credit: false
    },
    {
      key: '3',
      userImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Gabriel',
      transactionDate: '05 April 20',
      amount: '$364',
      credit: false
    },
    {
      key: '4',
      userImage: 'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jasmine',
      transactionDate: '28 March 20',
      amount: '$100',
      credit: true
    },
    {
      key: '5',
      userImage: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Alex',
      transactionDate: '14 March 20',
      amount: '$450',
      credit: true
    },
    {
      key: '6',
      userImage: 'https://images.pexels.com/photos/1548164/pexels-photo-1548164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Mark',
      transactionDate: '05 March 20',
      amount: '$288',
      credit: true
    },
    {
      key: '7',
      userImage: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Daria',
      transactionDate: '03 March 20',
      amount: '$350',
      credit: false
    },
    {
      key: '8',
      userImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'George',
      transactionDate: '01 March 20',
      amount: '$350',
      credit: true
    },
  ]

  // Carousel data

  const Images= [
    {
        image: require("../assets/bella.jpg"),
    },
    {
      image: require("../assets/360.png"),
    },
    {
      image: require("../assets/bella.jpg"),
    },
    {
      image: require("../assets/user.jpg"),
    },
  ];

  const {width,height} = Dimensions.get('window')
  const carouselRef = useRef(null)

  const RenderItem = ({item}) => {
    return(
      <TouchableWithoutFeedback>
        <Image source={item.image} style={{width: 360, height: 240, borderRadius: 10}} />
      </TouchableWithoutFeedback>
    )
  }




  // SLIDING PANEL

  const [dragRange,setDragRange] = useState({
    top:height - 80,
    bottom: 300
  })

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);
  const theme=useSelector(state => state.userReducer.theme);

  

  return (

    <View style={styles.container}>
        <LinearAtom   pv={5}  ph={0} br={0} mv={0} mh={0}el={0} sh='#000' colors={[theme.color,COLORS.dark]} >

        <View style={{paddingTop: 30,paddingHorizontal:14}}>
        <ViewAtom fd="row" width="100%" ph={10} pv={10} jc="space-between" >
        <Icon name={"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Me')}} />
      <ViewAtom fd="row" ai="center"  ph={7} pv={5} bg={COLORS.green} br={15} >
        <TouchableOpacity onPress={()=>{}}>
          <TextAtom text={"Withdraw to M-Pesa"} f="Poppins"s={SIZES.h5} w={"500"} ls={-1}c={COLORS.white} />
        </TouchableOpacity>
        <Icon name={"phone-portrait-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />

      </ViewAtom>
</ViewAtom>

          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize:26,color: '#fff'}}>Welcome Back,</Text>
              <Text style={{fontSize:26,color: '#fff', opacity: 0.6}}>James Murray</Text>
            </View>
            <View>
              <Image
               source={{uri: 'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }}
              style={styles.ProfileImage}
              />
              <View style={styles.ProfileImageNotification}></View>
            </View>
          </View> */}

          <View>
        
          <CardAtom fd="column" jc="flex-start"  ai="flex-start" pv={20} ph={20} bg={theme.color}  br={15} mv={3} mh={0} el={30} sh={COLORS.black}>

          {/* <TextAtom text={"Balances"} f="Poppins"s={SIZES.h1} w={"500"} ta="center" ls={-2}c={COLORS.white} /> */}

          <ViewAtom fd="row" ai="center" w={"100%"} ph={0} pv={-3} jc="space-between" >
       
          <TextAtom text={"My Wallet "} f="Poppins"s={SIZES.h2} w={"500"} ta="center" ls={-2}c={COLORS.white} />
          <Icon name={"wallet-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {}} />
      </ViewAtom>
          <ViewAtom fd="column" ai="flex-start" ph={0} pv={-3} jc="space-between" >
          <TextAtom text={"Available Tokens"} f="Poppins"s={SIZES.h5} w={"500"} ta="center" ls={-1}c={COLORS.white} />
          <ViewAtom fd="row" ai="flex-start" ph={0} pv={-3} jc="space-between" >
          <TextAtom text={"35,460"} f="Poppins"s={SIZES.largeTitle} w={"500"} ta="center" ls={0}c={COLORS.gray4} />
          <Icon name={"disc-outline"} type="ionicon" color={COLORS.white} size={SIZES.h5} onPress={() => {}} />
          
         </ViewAtom>
        
      </ViewAtom>
 <ViewAtom fd="row" ai="flex-start" ph={0} pv={-3} w="100%" jc="space-between" >
          <ViewAtom fd="column" ai="flex-start" ph={0} pv={3} jc="space-between" >
          <TextAtom text={"Redeemable Tokens"} f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.gray} />

         <ViewAtom fd="row" ai="flex-start" ph={0} pv={-3} jc="space-between" >
          <TextAtom text={"30,460"} f="Poppins"s={SIZES.h2} w={"500"} ta="center" ls={0}c={COLORS.white} />
          <Icon name={"disc-outline"} type="ionicon" color={COLORS.white} size={SIZES.base} onPress={() => {}} />
          
         </ViewAtom>
      </ViewAtom>
          <ViewAtom fd="column" ai="flex-start" ph={0} pv={3} jc="space-between" >
          <TextAtom text={"Cash equivalent value"} f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.gray} />
          <TextAtom text={"Ksh 1,460/="} f="Poppins"s={SIZES.h2} w={"500"} ta="center" ls={0}c={COLORS.white} />
        
      </ViewAtom>
      </ViewAtom>
        
   

          </CardAtom>
          </View>

          <View>
            <Text style={{color: '#fff',opacity: 0.6,marginBottom: 10}}>New invite</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[{backgroundColor:COLORS.black},styles.AddUser]} onPress={()=>{navigation.navigate("ReferralScreen")}} >
                  <View style={styles.AddUserIconbg}>
                  <MaterialIcons name='add' color='white' size={28} style={{alignSelf: 'center'}} />
                  </View>
                  <Text style={{color: '#fff'}}>Invite Student</Text>
              </TouchableOpacity>
              <FlatList 
              inverted
              horizontal
              data={Users}
              renderItem={({item}) => {
                return(
                  <View style={[{backgroundColor:COLORS.black},styles.AddUser]}>
     <UserAvatar size={40} style={{width:50,height:50, borderRadius:50, marginBottom:5}} name={item.userName.slice(0,1)} bgColor={theme.color} />
     <TextAtom text={item.userName}f="Poppins"s={SIZES.h5} w={"500"} ta="center" ls={0}c={COLORS.white} />
     <TextAtom text={item.transactionDate}f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.white} />
                     
                  </View>
                )
              }}
              />
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
            <SlidingUpPanel 
            ref={ModalRef}
            draggableRange={dragRange}
            animatedValue={_draggedValue}
            backdropOpacity={0}
            snappingPoints={[360]}
            height={height + 20}
            friction={0.9}
            >

            <View style={{flex: 1, backgroundColor: COLORS.black, borderRadius: 24, padding: 14}}>
              <View style={styles.PanelHandle}></View>
              <View>
                <Text style={{marginVertical: 16, color: '#fff'}}>Recent Transactions</Text>
              </View>

              <View style={{height: 500, paddingBottom: 10}}>
                <FlatList 
                data={Users}
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                  return(
                    <View style={styles.PanelItemContainer}>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                          <View style={{marginRight: 10}}>
                          <UserAvatar size={40} style={{width:40,height:40, borderRadius:50, }} name={item.userName.slice(0,1)} bgColor="#000" />
                          </View>
                          <View>
                            <Text style={{fontSize: 14, color: '#fff'}}>{item.userName}</Text>
                            <Text style={{fontSize: 10, color: '#fff', opacity: 0.6}}>{item.transactionDate}</Text>
                          </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{fontSize: 16, color: '#fff', marginHorizontal: 2}}>{item.amount}</Text>

                          {item.credit ? (
                            <MaterialIcons name='arrow-drop-up' size={22} color='green' />
                          ) : (
                            <MaterialIcons name='arrow-drop-down' size={22} color='#ff3838' />
                          )}
                        </View>
                    </View>
                  )
                }}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.PanelButton}>
                  <Text style={styles.PanelButtonText}>View Full History</Text>
                </TouchableOpacity>
              </View>

            </View>
            </SlidingUpPanel>
        </View>
        </LinearAtom>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000'
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 10
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    // borderColor: COLORS.white,
    padding: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 40
  },
  PanelButton: {
    padding:14,
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10
  },
  PanelButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center'
  }
});

export default Tokens;