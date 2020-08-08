import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import OnboardingTitle from "_atoms/onboarding-page-title";
import InfoText from "_atoms/info-text";
import AssistButton from "_atoms/assist-button";
import ContinueButton from "_atoms/continueButton";
import * as firebase from "firebase";
import InputResponse from "_atoms/input-response";
import AsyncStorage from "@react-native-community/async-storage";

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

      await retrieveUserIDFromDB(phoneNumber, navigation);
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  }

  function editNumber() {
    navigation.navigate("NumberEntryPage");
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />

        <View style={{ width: "100%" }}>
          <View style={styles.logoPos}>
            <Image
              style={styles.logo}
              source={require("_assets/images/Peek_Logo_Inverted.png")}
            />
          </View>

          <View style={styles.title}>
            <OnboardingTitle description="Enter your verification code." />
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <View>
                <InfoText description="Code sent to:" extraInfo={phoneNumber} />
              </View>
              <View style={styles.assist_Button}>
                <AssistButton
                  _description="Edit"
                  _onPress={() => editNumber()}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.inputResponse}>
          <InputResponse
            _placeHolder="123456"
            _editable={!!verificationId}
            _onChangeText={
              verificationCode !== undefined ? verificationCode : ""
            }
            _onChangeCallBack={setVerificationCode}
            _keyboardType={"numeric"}
          />
        </View>

        <View style={styles.continueButton}>
          <ContinueButton _disabled={!verificationId} _onPress={verifyCode} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default VerificationCodePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginLeft: 16,
  },
  logo: {
    height: 50,
    width: 50,
  },
  logoPos: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  assist_Button: {
    marginLeft: 15,
  },
  inputResponse: {},
  continueButton: {
    marginBottom: 20,
  },
});

async function retrieveUserIDFromDB(phoneNumber, navigation) {
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
      const userID = JSON.parse(JSON.stringify(responseJson)); //The userID needs to be a string so that it can be stored in async storage
      if (userID !== "-1") {
        try {
          AsyncStorage.setItem("userID", JSON.stringify(userID));
          navigation.navigate("MainNavigation");
        } catch (e) {
          // error reading value
        }
      } else {
        navigation.navigate("NameEntryPage", {
          userData: { phoneNumber: phoneNumber },
        });
      }

      //naviagation that navigate will be called her to go to the main stack.
    })
    .catch((error) => {
      console.error(error);
    });
}
