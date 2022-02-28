import React, {useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { OnboardingTitle, ContinueButton, InputResponse } from "_atoms";
/**
 * NTS: Get current date and subtract it from the date the user input to determine their age...restrict access of ages
 * younger than 18
 *
 */
let flag = false;
let dob_split = [];
function calculateAge(dob) {
  const current = new Date();
   dob_split = dob.split("/");
  //The plus one is necesary because the months are counting from 0.
   let potentialAge = current.getUTCFullYear() - parseInt(dob_split[2]);
   if (current.getUTCMonth() + 1 < parseInt(dob_split[0])) {
    potentialAge = potentialAge - 1;
     return potentialAge;
   }
   if (current.getUTCMonth() === parseInt(dob_split[0])) {
    if (current.getUTCDate() +1 < parseInt(dob_split[1])) {
      potentialAge = potentialAge - 1;
     return potentialAge;
    }
  }
  return potentialAge;
}



function BirthdayEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [dob, setDoB] = React.useState("");
  const [age, setAge] = React.useState(age);
 

  const _genderIdentityPage = () => {
    userData.BirthYear = parseInt(dob_split[2]);
    userData.BirthMonth = parseInt(dob_split[0]); //The plus one is necesary because the months are counting from 0.
    userData.BirthDate =parseInt(dob_split[1]);
    navigation.navigate("GenderIdentityPage", {
      userData: userData,
    });
  };



  useEffect(() => {

    StatusBar.setBarStyle("dark-content");
    switch(dob.length){
      case 2 :
        if(flag === false){
          setDoB(dob + "/");
          break;
        }
      case 5:
        if( flag === false){
          setDoB(dob + "/");
          break;
        }
        case 10:{
        setAge(calculateAge(dob));
          break;
        }
      default:
        setDoB(dob);
        flag = false;
        break;
    }

  })
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={{ width: "100%",}}>
        <View style={styles.logoContainer}>
          <Image source={require("_assets/images/Peek_Logo_Inverted.png")} />
        </View>

        <View style={styles.titleContainer}>
          <OnboardingTitle description={"What is your date of birth ?"} />
        </View>
        <View style={styles.datePickerContainer}>
          <InputResponse _autoCapitalize = {"none"} _placeHolder = {"MM/DD/YYYY"}
          _onChangeText = {dob}
          _onChangeCallBack = {setDoB}
          _keyboardType ={"numeric"}
          _editable = {true}
          _value = {dob}
          _maxLength ={10}
          _onKeyPress = { ({nativeEvent})=>{
             if(nativeEvent.key === 'Backspace'){
               flag = true;             
            }
          }} />
        </View>
        {/* { age !== null && <View>
          <Text> Your age is {age}</Text>
        </View>} */}
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton _disabled = {dob.length !== 10 } _onPress={() => _genderIdentityPage() }/>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default BirthdayEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
     backgroundColor: "#FFFFFF",

  },

  test:{
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },

  continueButtonContainer: {
    marginBottom: 40,
    flexShrink:1,
    alignItems:"center"
    
  },
  titleContainer: {
    marginLeft: 16,
    marginBottom: 10,
  },
  datePickerContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30
  },
});


