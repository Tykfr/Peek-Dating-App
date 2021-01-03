import React , {useEffect}from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import {
  OnboardingTitle,
  InfoText,
  ContinueButton,
  InputResponse,
} from "_atoms";

function NameEntryPage({ route, navigation }) {
  const { userData } = route.params;
  const [name, setName] = React.useState("");

  function recordUserName() {
    userData.name = name;
    navigation.navigate("EmailEntryPage", {
      userData: userData,
    });
  }

  useEffect(()=>{
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
            <OnboardingTitle description={"What is your name?"} />
            <View style={styles.infoText}>
              <InfoText
                description={"Your name will be displayed on your profile."}
              />
            </View>
          </View>
        </View>

        <View style={styles.input}>
          <InputResponse
            _placeHolder={"John Doe"}
            _keyboardType={"default"}
            editable={true}
            _onChangeText={name}
            _onChangeCallBack={setName}
          />
        </View>

        <View style={styles.continueButton}>
          <ContinueButton _onPress={recordUserName} _disabled={!name} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
export default NameEntryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  logo: {},
  logoPos: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  title: {
    marginLeft: 16,
  },
  input: {
    alignSelf: "center",
  },
  infoText: {
    marginTop: 10,
  },
  continueButton: {
    marginBottom: 20,
  },
});
