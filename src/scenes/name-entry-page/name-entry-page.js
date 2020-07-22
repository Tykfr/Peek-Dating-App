import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Alert } from "react-native";
import {
  OnboardingTitle,
  InfoText,
  ContinueButton,
  InputResponse,
} from "_atoms";

function NameEntryPage({ route, navigation }) {
  const { userData } = route.params;
  const [name, setName] = React.useState();

  function recordUserName() {
    userData.push({ name: name });
    navigation.navigate("EmailEntryPage", {
      userData: userData,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoPos}>
        <Image
          style={styles.logo}
          source={require("_assets/images/Peek_Logo_Inverted.png")}
        />
      </View>
      <View style={styles.title}>
        <OnboardingTitle description={"What is your name?"} />
        <View style={styles.input}>
          <InputResponse
            _placeHolder={"John Doe"}
            _keyboardType={"default"}
            editable={true}
            _onChangeText={name}
            _onChangeCallBack={setName}
          />
        </View>
        <View style={styles.infoText}>
          <InfoText
            description={"Your name will be displayed on your profile."}
          />
        </View>
      </View>
      <View style={styles.continueButton}>
        <ContinueButton _onPress={recordUserName} _disabled={!name} />
      </View>
    </SafeAreaView>
  );
}
export default NameEntryPage;
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
});
