import { View, Text, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser"
import { Colors } from '../constants/Colors'
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser"
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"});

    const onPress = React.useCallback(async() => {
      try{
        const {createdSessionID, signIN, signUp, setActive } =
          await startOAuthFlow();

        if (createdSessionID) {
          setActive({ session: createdSessionID });
        }  else {

        }

        } catch (err) {
            console.error("OAuth error", err);
        }
      },[] );

  return (
    <View>
        <View style={{
          display:'flex',
          alignItems:'center',
          marginTop:50  

        }}>
        <Image source={require('D:/React Native/9MTA/assets/images/login.png')}
          style={{
            with:5,
            height:340,
            //borderRadius:1,
            //borderWidth:2,
            borderColor:'#000',
            resizeMode:'contain'
          }}
        />
        </View>

        <View style={{backgroundColor:'#fff',padding:20, alignItems:'center'}}>
          <Text style={{
            fontSize:30,
            fontFamily:'outfit-B',
            textAlign:'center',
          }}> <Text>Community Services</Text> 
            </Text>
        <Text style={{ 
              fontsize:20,
              fontFamily:'outfit-R',
              textAlign:'center',
              marginVertical:20,
            }}>Welcome to the 9MTA community SuperApp 
            
        </Text>
        <TouchableOpacity style={[style.btn,{ width:200}]}
        onPress={onPress}>
            <Text style={{
              textAlign:'center',
              color:'#fff',
              fontFamily:'outfit-R'
            }}>Registaration</Text>
        </TouchableOpacity>    
        </View>
    </View>
  )
}
const style = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-110,
  },
  btn:{
    backgroundColor:Colors.PRIMARY,
    padding:10,
    borderRadius:99,
  }
  
})