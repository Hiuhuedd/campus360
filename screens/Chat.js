import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView ,TextInput} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { CheckBox, Divider, Icon } from 'react-native-elements';
import ViewAtom from '../components/Atoms/ViewAtom';
import { useSelector } from 'react-redux';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Button } from '../components/Atoms/Button';
import { ActivityIndicator } from 'react-native-paper';
import LinearAtom from '../components/Atoms/LinearAtom';
import BottomTabs from '../components/Molecules/BottomTabs';

const Chat = ({navigation}) => {
    const user=useSelector(state => state.userReducer.user);
    const theme=useSelector(state => state.userReducer.theme);
   const [checking,setchecking]=useState(true)
   useEffect(() => {
  setTimeout(() => {
    setchecking(false)
  }, 5000);
  }, []);
  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        userId: 'user1',
        name: 'John',
        message: inputText,
        imageUrl: 'https://example.com/user1.jpg',
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }),
      };

      setChatMessages([...chatMessages, newMessage]);
      setInputText('');
    }
  };

  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'Hello there!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:01 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'Hi John!',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:03 PM',
    },
    {
      userId: 'user2',
      name: 'Jane',
      message: 'How are you?',
      imageUrl: 'https://example.com/user2.jpg',
      time: '12:04 PM',
    },
    {
      userId: 'user1',
      name: 'John',
      message: 'I\'m good, thanks!',
      imageUrl: 'https://example.com/user1.jpg',
      time: '12:05 PM',
    },
    // Add more messages as needed
  ])
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    messageContainer: {
      marginVertical: 4,
      padding: 5,
      borderRadius: 8,
      maxWidth: '80%',
    },
    sentMessageContainer: {
      alignSelf: 'flex-end',
      backgroundColor: '#DCF8C6',
    },
    receivedMessageContainer: {
      alignSelf: 'flex-start',
      backgroundColor: '#F3F3F3',
    },
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      // borderTopWidth: 1,
      // borderColor: '#DADADA',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom:5
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: '#F9F9F9',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginRight: 8,
    },
    sendButton: {
      backgroundColor:theme.color,
      borderRadius: 8,
      padding: 7,
      paddingVertical: 8,
      marginHorizontal:3,
    },
    sendButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });
  return (
    <View style={{ flexGrow: 1,}}>
                <LinearAtom    pv={5}  ph={10} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[COLORS.black,COLORS.dark]} >
  <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>
     
</ViewAtom>
  <ViewAtom fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mh={0}>
     
  <TextAtom text={"Chat.ai"} f="Poppins"s={SIZES.h1} w={"500"} ta="left" ls={-2}c={COLORS.white} />
</ViewAtom>
  <ScrollView contentContainerStyle={styles.container}>

{chatMessages.map((message, index) => (
  <View
    key={index}
    style={[
      styles.messageContainer,
      message.userId === 'user1' ? styles.sentMessageContainer : styles.receivedMessageContainer,
    ]}
  >
      <TextAtom text={message.message}f="Poppins"s={SIZES.h5} w={"500"} c={COLORS.black} />

  </View>
))}

</ScrollView>
<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Icon name="send" type="ionicon" color={COLORS.white} size={SIZES.h2}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Icon name="mic" type="ionicon" color={COLORS.white} size={SIZES.h2}  />
        </TouchableOpacity>
      </View>
</LinearAtom>  
            
  <BottomTabs navigation={navigation} theme={COLORS.primary} />

    </View>
  );
};



export default Chat;

