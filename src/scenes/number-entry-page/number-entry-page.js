import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";

import OnboardingTitle from "_atoms/onboarding-page-title";
import NumberEntry from "_atoms/number-entry";
import ContinueButton from "_atoms/continueButton";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";

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
      console.error(err.message);
    }
  }
  const _verificationHandler = (verificationId, phoneNumber) => {
    navigation.navigate("VerificationPage", {
      verificationId: verificationId,
      phoneNumber: phoneNumber,
    });
  };

  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();

  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  return (
    //<KeyboardAvoidingView behavior="padding">
    <SafeAreaView style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.logoPos}>
        <Image
          style={styles.logo}
          source={require("_assets/images/Peek_Logo_Inverted.png")}
        />
      </View>
      <View style={styles.title}>
        <OnboardingTitle description="What is your phone number ?" />
        <View style={styles.numberInput}>
          <NumberEntry
            // isConfigValid={isConfigValid}
            _placeHolder="+1 999 999 9999"
            _number={phoneNumber}
            _setNumber={setPhoneNumber}
          />
        </View>
      </View>

      <View style={styles.continueButton}>
        <ContinueButton
          _onPress={sendVerificationCode}
          _disabled={!phoneNumber}
        />
      </View>
    </SafeAreaView>
    //</KeyboardAvoidingView>
  );
}

export default NumberEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    position: "absolute",
    top: 100,
    left: 16,
    marginRight: 56,
  },
  numberInput: {
    position: "absolute",
    top: 148,
    justifyContent: "center",
  },
  continueButton: {
    position: "absolute",
    bottom: 46,
  },
  logo: {
    height: 50,
    width: 50,
  },
  logoPos: {
    position: "absolute",
    top: 37,
    right: 18,
  },
});
