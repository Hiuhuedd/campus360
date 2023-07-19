import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import QRCode from 'react-native-qrcode-svg';
import LinearAtom from '../components/Atoms/LinearAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { COLORS, SIZES } from '../constants/theme';
import { Icon } from 'react-native-elements';
import TextAtom from '../components/Atoms/TextAtom';
const ReferralScreen = ({navigation}) => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
  
  return (
    <View style={{flex:1,marginTop:0,display:"flex",flexDirection:"column",}}>
      {/* Section for generating QR code signature */}
      <LinearAtom   pv={5}  ph={20} bg={COLORS.white} br={0} mv={0} mh={0}   el={0} sh='#000' colors={[COLORS.black,COLORS.dark]} >
                <ViewAtom fw="wrap" fd="row" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={20} mh={0}>    
     </ViewAtom>

     <ViewAtom fd="row" width="100%" ph={10} pv={10} jc="space-between" >
        <Icon name={"arrow-back-outline"} type="ionicon" color={COLORS.white} size={SIZES.h2} onPress={() => {navigation.navigate('Me')}} />
      <ViewAtom fd="row"  ph={7} pv={5} bg={COLORS.dark} br={15} >
        <TouchableOpacity onPress={()=>{ setIsScanning(!isScanning)}}>
          <TextAtom text={isScanning?"Generate QR":"Scan QR"} f="Poppins"s={SIZES.h5} w={"500"} ls={0}c={COLORS.white} />
        </TouchableOpacity>
      </ViewAtom>
</ViewAtom>
  <TextAtom text={"Invites"} f="Poppins"s={SIZES.h1} w={"500"} ta="left" ls={-2}c={COLORS.white} />
  <TextAtom text={"Lets you keep track of your campus activities and much more.."} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={0}c={COLORS.gray2} />
 
                <ViewAtom  fd="column" jc="center" ai="center" w="100%" bg="transparent" pv={5} br={0} mv={10} mh={0}>
                <Icon name={"scan"} type="ionicon" color={COLORS.white} size={SIZES.largeTitle} onPress={() => {navigation.navigate('Me')}} />

     
     {!isScanning&& <QRCode value='https://www.github.com/chelseafarley' logo={require('../assets/360.png')}
      logoSize={30}
      logoBackgroundColor='transparent' size={200}/>}

      {/* Section for scanning QR code */}
      {hasPermission && !qrCodeData && (
        <View>
          {isScanning &&(
            <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
          )}
           <TextAtom text={text} f="Poppins"s={SIZES.h5} w={"500"} ta="left" ls={0}c={COLORS.gray2} />

{scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
        </View>
      )}
     </ViewAtom>
     </LinearAtom>
    </View>
  );
};
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
      maintext: {
        fontSize: 16,
        margin: 20,
      },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'tomato'
      }
  });
export default ReferralScreen;