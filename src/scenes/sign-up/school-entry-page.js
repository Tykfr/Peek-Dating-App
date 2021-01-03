import React, {useEffect} from "react";
import {
 Platform,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { OnboardingTitle, InputResponse, ContinueButton } from "_atoms";

function SchoolEntryPage({ navigation, route }) {
  const { userData } = route.params;

  const [school, setSchool] = React.useState("");

  const _polticalEntryPageHandler = () => {
    userData.school = school;

    navigation.navigate("PoliticalEntryPage", {
      userData: userData,
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.container}>
        <View style={{ width: "100%" }}>
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <Image source={require("_assets/images/Peek_Logo_Inverted.png")} />
          </View>
          <View>
            {/* Title Container */}
            <View style={styles.titleContainer}>
              <OnboardingTitle description={"Where did you attend school?"} />
            </View>
            {/* Response Container */}
            <View style={styles.inputResponseContainer}>
              <InputResponse
                _onChangeText={school}
                _onChangeCallBack={setSchool}
                _keyboardType={"default"}
              />
            </View>
          </View>
        </View>

        {/* Continue Button Container */}
        <View style={styles.continueButtonContainer}>
          <ContinueButton
            _onPress={() => _polticalEntryPageHandler()}
            _disabled={!school}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
export default SchoolEntryPage;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  continueButtonContainer: {
    marginBottom: 46,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  inputResponseContainer: { alignSelf: "center" },
  titleContainer: {
    marginBottom: 33,
    marginLeft: 16,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
});
