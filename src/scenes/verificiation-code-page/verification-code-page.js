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
import * as firebase from "firebase";
import InputResponse from "_atoms/input-response";

/**
 * @author - William Phillips
 * @param {*} route - route is a prop that allows me to recieve data passed from a previous page
 * @param {*} navigation - prop that allows me to navigate to other pages and send data to those pages
 * @description - functions displays the screen of the of the Verification code page
 *              - it displays a text input box which requires the user to enter the security code sent to them via SMS
 */

function VerificationCodePage({ route, navigation }) {
  let { verificationId } = route.params;
  let { phoneNumber } = route.params;
  phoneNumber = JSON.parse(JSON.stringify(phoneNumber));
  const [verificationCode, setVerificationCode] = React.useState();
  verificationId = JSON.parse(JSON.stringify(verificationId));

  /**
   *  @author - William Phillips
   *  @description - takes users inputted verifcation code and their verification ID and
   *               - authenticates if the verifcation code is valid
   */
  async function verifyCode() {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);

      await getUserID(phoneNumber);
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  }

  /**
   * @author - William Phillips
   * @param {*} phoneNumber - user inputted phone number
   * @description - calls database api to create an entry of a user via phone number and returns back their userID
   *              - function then navigates to name entry page
   */
  async function getUserID(phoneNumber) {
    await fetch(
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
        navigation.navigate("NameEntryPage", {
          userID: userID,
        });
      });
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
          <InputResponse
            _placeHolder="123456"
            _editable={!!verificationId}
            _onChangeText={verificationCode}
            _onChangeCallBack={setVerificationCode}
            _keyboardType={"numeric"}
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
