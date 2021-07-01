import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform
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
  require("firebase/firestore");

  let { verificationId } = route.params;
  let { PhoneNumber } = route.params;
  console.log(PhoneNumber)
  PhoneNumber = JSON.parse(JSON.stringify(PhoneNumber));
  const [verificationCode, setVerificationCode] = React.useState("");
  verificationId = JSON.parse(JSON.stringify(verificationId));

  useEffect(() =>{
    StatusBar.setBarStyle('dark-content');
   
  })

  /**
   *  @author - William Phillips
   *  @description - takes users inputted verifcation code and their verification ID and
   *               - authenticates if the verifcation code is valid
   */
  async function verifyCode() {
   
      const credential = firebase.auth.PhoneAuthProvider.credential( verificationId,verificationCode);

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then( async function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
        await firebase.auth().signInWithCredential(credential);
        let userID = await firebase.auth().currentUser.uid;
        let db = await firebase.firestore();
       await retrieveUserIDFromDB(db, userID, PhoneNumber, navigation);
    }).catch(function(error)  {
    // Handle Errors here.
      Alert.alert("Invalid verification code. Please try again.");

  });

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
                <InfoText description="Code sent to:" extraInfo={PhoneNumber} />
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
            _maxLength={6}
          />
        </View>

        <View style={styles.continueButton}>
          <ContinueButton
            _disabled={verificationCode.length !== 6}
            _onPress={verifyCode}
          />
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
    backgroundColor: "#FFFFFFFF",
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

// This function checks to see if this userID is in the cloud firestore
//  if it is, login...otherwise signup
async function retrieveUserIDFromDB(db, userID, PhoneNumber, navigation) {

  let userRef = db.collection("users").doc(userID);

  userRef.get().then((doc) => {
      if (doc.exists) {
        try {
          AsyncStorage.setItem("userID", JSON.stringify(userID));
          navigation.navigate("MainNavigation");
        } catch (e) {
          // error reading value
          console.log("Error: " + e);
        }
      } else {
          // doc.data() will be undefined in this case
          navigation.navigate("NameEntryPage", {
            userData: { PhoneNumber: PhoneNumber },
          });
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}
