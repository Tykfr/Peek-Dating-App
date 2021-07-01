import React, {useEffect} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ContinueButton,
  InvertedLogo,
  OnboardingTitle,
  InputResponse,
} from "_atoms";
function OccupationEntryPage({ navigation, route }) {
  const { userData } = route.params;

  const [occupation, setOccupation] = React.useState("");

  const _locationHandler = () => {
    userData.Occupation = occupation;
    navigation.navigate("LocationEntryPage", {
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
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: "100%" }}>
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <InvertedLogo />
          </View>
          {/* Title Container */}
          <View style={styles.titleContainer}>
            <OnboardingTitle description={"What is your occupation?"} />
          </View>
          <View style={{ alignSelf: "center" }}>
            <InputResponse
              _keyboardType={"default"}
              _onChangeCallBack={setOccupation}
              _onChangeText={occupation}
              _placeHolder={"Enter occupation here"}
            />
          </View>
        </View>

        {/* Continue Button Container */}
        <View style={styles.continueButtonContainer}>
          <ContinueButton
            _onPress={() => _locationHandler()}
            _disabled={!occupation}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
export default OccupationEntryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  continueButtonContainer: {
    marginBottom: 40,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  titleContainer: {
    marginLeft: 16,
    marginBottom: 40,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
});
