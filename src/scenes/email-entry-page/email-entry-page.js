/**
 * @author William Phillips
 * NTS: CheckBox will need to call a function to set up email notifications in the future!
 */

import React from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  StatusBar,
  Alert,
} from "react-native";

import {
  OnboardingTitle,
  InputResponse,
  ContinueButton,
  InfoText,
} from "_atoms";

/**
 * @author William Phillips
 * @param {*} url - string directed to the php script to write users email to the database
 * @param {*} email - users inputted email
 * @param {*} userID - users unique ID
 * @description this function writes the users inputted email to their userID entry in the users table
 */
async function writeUserEmail(url, email, userID, navigation) {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      userID: userID,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(responseJson);

      navigation.navigate("BirthdayEntryPage", {
        userID: userID,
      });
    });
}

/**
 *
 * @param {*} param0
 */

function EmailEntryPage({ route, navigation }) {
  const { userID } = JSON.parse(JSON.stringify(route.params));

  const [checked, setCheck] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const url =
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/writeUserEmail.php";
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
        <OnboardingTitle description={"What is your email?"} />
        <View style={styles.input}>
          <InputResponse
            _placeHolder={"johndoe@peek.com"}
            _editable={true}
            _onChangeText={email}
            _onChangeCallBack={setEmail}
            _keyboardType={"email-address"}
            _autoCapitalize={"none"}
          />
        </View>
        <View style={styles.infoText}>
          <InfoText description={"Will be used for account recovery."} />
        </View>
        <View style={styles.optIn}>
          <CheckBox
            title="Opt-in for email notifications"
            checkedColor="#D99202"
            checked={checked}
            onPress={() => setCheck(!checked)} //This is key to calling function with parameters without it invoking on render
            containerStyle={styles.checkBox}
          />
        </View>
      </View>

      <View style={styles.continueButton}>
        <ContinueButton
          _onPress={() => writeUserEmail(url, email, userID, navigation)}
          _disabled={!email}
        />
      </View>
    </SafeAreaView>
  );
}

export default EmailEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
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
  title: {
    position: "absolute",
    top: 100,
    left: 16,
    marginRight: 18,
  },
  input: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 18,
  },
  infoText: {
    marginTop: 15,
    marginLeft: 18,
  },
  continueButton: {
    position: "absolute",
    bottom: 46,
  },
  optIn: {
    marginTop: 20,
  },
  checkBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
  },
});
