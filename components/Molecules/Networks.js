import React from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import ViewAtom from '../Atoms/ViewAtom';
import TextAtom from '../Atoms/TextAtom';
import { COLORS, SIZES } from '../../constants/theme';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import CardAtom from '../Atoms/CardAtom';

export default Networks = ({ navigation }) => {
 const NetworksArr = [
    {
      img: "https://lever-client-logos.s3.us-west-2.amazonaws.com/9db6eb00-4e20-4977-8145-359ed01c2eee-1614024984718.png",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb_YGQTv75mWpeRYN-ctCVShdBMDnMPYWjODnBH7PiLVkwT03LdXbXOb1N8QbA1b_hIE&usqp=CAU",
      title: "Expo Workshop",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Tech Lounge",
      location: "San Francisco, CA",
      description: "Exploring Modern Apps",
      peers: ["Michael", "Grace"],
      theme: "Mobile First",
      id: "1a1a1a",
      inquiry:{deskName:"Expo support",email:"inquiry.expo.io"}
    },
    {
      img: "data:image/png;base64,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",
      cover: "https://example.com/cover1.png",
      title: "Web Development Conference",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Convention Center",
      location: "New York, NY",
      description: "A conference focused on web development trends and best practices",
      peers: ["Sarah", "John", "Emily"],
      theme: "Web Development",
      id: "2b2b2b",
      inquiry:{deskName:"Eqty support",email:"inquiry.eqty.io"}

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2oU5cyBHOZlVBKW1T10PKUgIS5tP6_wJMw&usqp=CAU",
      cover: "https://example.com/cover2.png",
      title: "Data Science Symposium",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Data Science Institute",
      location: "Chicago, IL",
      description: "Bringing together experts to discuss the latest advancements in data science",
      peers: ["David", "Sophia", "Alex"],
      theme: "Data Science",
      id: "3c3c3c",
      inquiry:{deskName:"Forum support",email:"inquiry.forum.io"}

    },
    {
      img: "data:image/png;base64,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",
      cover: "https://example.com/cover3.png",
      title: "UX/UI Design Workshop",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Design Hub",
      location: "Seattle, WA",
      description: "Hands-on workshop for UX/UI designers to enhance their skills",
      peers: ["Olivia", "Daniel"],
      theme: "UX/UI Design",
      id: "4d4d4d",
      inquiry:{deskName:"saf. Teams",email:"inquiry.safaricom.io"}

    },
    {
      img: "data:image/png;base64,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",
      cover: "https://example.com/cover4.png",
      title: "Marketing Summit",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Marketing Center",
      location: "Los Angeles, CA",
      description: "Gathering marketing professionals to discuss strategies and trends",
      peers: ["Emma", "William", "Sophie"],
      theme: "Marketing",
      id: "5e5e5e",
      inquiry:{deskName:"microsoft support",email:"inquiry.microsoft.io"}

    },
    {
      img: "https://example.com/image5.png",
      cover: "https://example.com/cover5.png",
      title: "Blockchain Conference",
      date: {date:14,month:"August",day:"Monday",start:"11:00am",end:"4:00pm"},
      venue: "Blockchain Center",
      location: "San Francisco, CA",
      description: "Exploring the potential of blockchain technology across industries",
      peers: ["James", "Lily"],
      theme: "Blockchain",
      id: "6f6f6f",
      inquiry:{deskName:"microsoft support",email:"inquiry.microsoft.io"}

    }
  ];
    return (
        <>
  {  NetworksArr.map((network)=>{
    return(
<TouchableOpacity onPress={()=>{navigation.navigate("Events",{event:network})}}>

   <ViewAtom fd="row" jc="space-between" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={0} mh={0}>
      <ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
      <CardAtom fd="row"  jc="space-between" ai="flex-start" pv={0} ph={0} bg={COLORS.black} br={15} mv={0} mh={0}   el={3} sh='#525252' >

      <Image source={{ uri: network.img }} style={styles.Icon}  resizeMode="contain"/>


        </CardAtom>
   
     <ViewAtom fd="column" jc="flex-start" ai="flex-start"  bg="transparent" pv={5} br={0} mv={0} mh={5}>
   
                 <TextAtom text={`${network.title}`} c={COLORS.white} f="Roboto" s={SIZES.h5} w="500" />
                 <TextAtom text={` ${network.date.date}th ${network.date.month}`} c={COLORS.gray4} f="Roboto" s={SIZES.base} w="500" />
                 {/* <TextAtom text={` Two Rivers`} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" /> */}

                 <ViewAtom  ai="center" ph={3}pv={2}  bg={COLORS.black}  br={5} mv={2} mh={0}>
                <TextAtom text={`${network.venue} .  ${network.location}`} c={COLORS.gray2} f="Roboto" s={SIZES.base} w="500" />
                </ViewAtom>
        </ViewAtom>         
         </ViewAtom>
      <ViewAtom fd="row" jc="flex-start" ai="center"  bg="transparent" pv={5} br={0} mv={0} mh={0}>
      <Icon name={"chevron-forward-outline"} type="ionicon" color={COLORS.white} size={SIZES.h3} onPress={() => {}} />

       
         </ViewAtom>
         </ViewAtom>
</TouchableOpacity>
    )

  }) 
         }
      
        </>
   
    );
  };
  const styles = StyleSheet.create({
    Icon:{
      width:60,
      height: 60,
      borderRadius:5,

      
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