import React ,{useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen ({navigation}){

    function test (){
        setTimeout(()=>{
            firebase.auth().onAuthStateChanged(async function(user) {
                const userID = await AsyncStorage.getItem("userID");
                if (user && userID !== null) {
                    navigation.reset({
                        index:0,
                        routes:[{name:"MainNavigation"}]
                    })
                 // navigation.navigate("MainNavigation");
                // User is signed in.
                }else{
                  navigation.reset({
                      index:0,
                      routes:[{name:"SignUpNavigator"}]
                  })
                    // navigation.navigate("SignUpNavigator");
                }
              });
        }, 1000);
    }

    useEffect(()=>{
        test();
  })
    return(
        
    <LinearGradient
    style={{ flex: 1 }}
    colors={[
      "#D99202",
      "rgba(215, 144, 2, 0.989603)",
      "rgba(240, 171, 30, 0.78) ",
      "rgba(247, 169, 9, 0.54)",
    ]}>
  

 
        <SafeAreaView style = {style.container}>
            
            <View>
                 <View style={{width:"100%", height:100,}}/>  
                <View style={style.logoPos}>
                    <Image style ={style.logo}source={require("_assets/images/Splash_Peek_Logo.png")}/> 
                </View>
                
            </View>
        </SafeAreaView>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container:{
        flexGrow:1,        

    },
    logo:{ 
        width: 100,
        height:100,
        
    },
    logoPos:{
        alignItems:"center",
          
    },
      
    
})

export default SplashScreen;