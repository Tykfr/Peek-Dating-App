/**
 * @author William Phillips
 * NTS: CheckBox will need to call a function to set up email notifications in the future!
 */

import React ,{useEffect}from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import {
  OnboardingTitle,
  InputResponse,
  ContinueButton,
  InfoText,
} from "_atoms";

/**
 *
 * @param {*} param0
 */

function EmailEntryPage({ route, navigation }) {
  const { userData } = route.params;

  const [checked, setCheck] = React.useState(false);
  const [email, setEmail] = React.useState("");

  function recordUserEmail() {
    userData.Email = email;
    navigation.navigate("BirthdayEntryPage", {
      userData: userData,
    });
  }

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />

        <View style={{ width: "100%" }}>
          <View style={styles.logoPos}>
            <Image source={require("_assets/images/Peek_Logo_Inverted.png")} />
          </View>

          <View style={styles.title}>
            <OnboardingTitle description={"What is your email?"} />
            <View style={styles.infoText}>
              <InfoText
                description={"Email will be used for account recovery."}
              />
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
        </View>

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

        <View style={styles.continueButton}>
          <ContinueButton
            _onPress={() => recordUserEmail()}
            _disabled={!email}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default EmailEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },

  logoPos: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
    // backgroundColor: "orange",
  },
  title: {
    // backgroundColor: "purple",
    marginLeft: 16,
  },
  input: {
    // backgroundColor: "red",
  },
  infoText: {
    // backgroundColor: "brown",
    marginTop: 10,
  },
  continueButton: {
    // backgroundColor: "yellow",
    marginBottom: 20,
  },
  optIn: {
    width: "100%",
    // backgroundColor: "blue",
  },
  checkBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    marginLeft: 0,
  },
});
