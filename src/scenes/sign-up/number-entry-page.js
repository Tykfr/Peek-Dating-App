import React, {useEffect} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
Alert
} from "react-native";

import { OnboardingTitle, NumberEntry, ContinueButton } from "_atoms";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import { number } from "prop-types";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyAjBXrAls5vRG5xb9X_VkY5iInliP4-66Y",
    authDomain: "peek-365d4.firebaseapp.com",
    databaseURL: "https://peek-365d4.firebaseio.com",
    projectId: "peek-365d4",
    storageBucket: "peek-365d4.appspot.com",
    messagingSenderId: "933581565982",
    appId: "1:933581565982:web:b88ac323361ff9f1d7fe0f",
    measurementId: "G-E8TT38XSQV",
  });
} catch (err) {
  console.error("Error" + err);
}

function NumberEntryPage({ navigation }) {

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })


  async function sendVerificationCode() {
    // The FirebaseRecaptchaVerifierModal ref implements the
    // FirebaseAuthApplicationVerifier interface and can be
    // passed directly to `verifyPhoneNumber`.

    //Preforem textInput edge cases before sending it off to firebase
    //Verify Phone number is propery lenght before sending it to firebase
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      _verificationHandler(verificationId, phoneNumber);
    } catch (err) {
      console.log(err);

    }


    
     
    
   




  }
  const _verificationHandler = (verificationId, phoneNumber) => {
    navigation.navigate("VerificationPage", {
      verificationId: verificationId,
      PhoneNumber: phoneNumber,
    });
  };

  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();

  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <StatusBar barStyle={"dark-content"} />
        <View>
          <View style={styles.logoPos}>
            <Image
              style={styles.logo}
              source={require("_assets/images/Peek_Logo_Inverted.png")}
            />
          </View>
          <View>
            <View style={styles.titleContainer}>
              <OnboardingTitle description="What is your phone number ?" />
            </View>
            <View>
              <NumberEntry _number={phoneNumber} _setNumber={setPhoneNumber} />
            </View>
          </View>
        </View>
        <View style={styles.continueButtonContainer}>
          <ContinueButton
            _onPress={sendVerificationCode}
            _disabled={!phoneNumber}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default NumberEntryPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  titleContainer: {
    marginBottom: 15,
  },
  continueButtonContainer: {
    justifyContent: "flex-end",
    flexGrow: 1,
    marginBottom: 20,
  },
  logo: {
    height: 50,
    width: 50,
  },
  logoPos: {
    alignSelf: "flex-end",
    marginVertical: 20,
  },
});
