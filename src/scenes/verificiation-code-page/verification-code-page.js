import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import OnboardingTitle from "_atoms/onboarding-page-title";
import InfoText from "_atoms/info-text";
import AssistButton from "_atoms/assist-button";
import ContinueButton from "_atoms/continueButton";
import NumberEntry from "_atoms/number-entry";
import * as firebase from "firebase";

function getUserID(phoneNumber) {
  fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/userIDLookUp.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    }
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const userID = JSON.parse(responseJson);
      return userID;
    });
}

function VerificationCodePage({ route, navigation }) {
  let { verificationId } = route.params;
  let { phoneNumber } = route.params;
  let userID = "";
  phoneNumber = JSON.parse(JSON.stringify(phoneNumber));
  const [verificationCode, setVerificationCode] = React.useState();
  verificationId = JSON.parse(JSON.stringify(verificationId));

  async function verifyCode() {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      Alert.alert("Phone authentication successful 👍");
      userID = getUserID(phoneNumber);
      //navigate to next page here
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.logoPos}>
        <Image
          style={styles.logo}
          source={require("_assets/images/Peek_Logo_Inverted.png")}
        />
      </View>
      <View style={styles.title}>
        <OnboardingTitle description="Enter your verification code." />

        <InfoText description="Code sent to:" extraInfo={phoneNumber} />

        <View style={styles.assist_Button}>
          <AssistButton description="Didn't recieve a code? " />
        </View>
        <View style={styles.inputResponse}>
          <NumberEntry
            _placeHolder="123456"
            _editable={!!verificationId}
            _number={verificationCode}
            _setNumber={setVerificationCode}
          />
        </View>
      </View>

      <View style={styles.continueButton}>
        <ContinueButton _disabled={!verificationId} _onPress={verifyCode} />
      </View>
    </SafeAreaView>
  );
}

export default VerificationCodePage;

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
    marginRight: 18,
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
  assist_Button: {
    marginTop: 32,
  },
  inputResponse: {
    marginTop: 50,

    //position: "absolute",
    alignItems: "center",
  },
  continueButton: {
    position: "absolute",
    bottom: 46,
  },
});
