import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { OnboardingTitle, InvertedLogo, ContinueButton } from "_atoms";

function BioEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [bio, setBio] = React.useState("");

  const _selectPhotoHander = () => {
    userData.bio = bio;

    navigation.navigate("PhotoSelectionPage", {
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
        <View style={{ width: "100%", height: "100%" }}>
          {/* Logo Container */}
          <View style={styles.invertedLogoContainer}>
            <InvertedLogo />
          </View>
          {/* Title Container */}
          <View style={styles.titleContainer}>
            <OnboardingTitle description={"Write a short bio"} />
          </View>
          {/* Text Input Container */}
          <View style={styles.textInputContainer}>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder={
                  "Looking for some positive moments, adventures and fun."
                }
                onChangeText={(bio) => setBio(bio)}
                multiline={true}
                textAlignVertical={"top"}
                maxLength={100}
                keyboardType="default"
                returnKeyType="done"
                autoFocus={true}
              />
            </View>
            <View style={styles.characterCountContainer}>
              <Text> Characters Left: {bio.length}/100</Text>
            </View>
          </View>

          {/* Continue Button Container */}
          <View style={styles.continueButtonContainer}>
            <ContinueButton _onPress={_selectPhotoHander} _disabled={!bio} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default BioEntryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },
  continueButtonContainer: {
    marginBottom: 40,
    flexGrow: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  titleContainer: {
    marginLeft: 16,
    marginBottom: 40,
    flexShrink: 1,
  },
  invertedLogoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
    flexShrink: 1,
  },
  textInputStyle: {
    width: 300,
    fontSize: 20,
    textAlign: "left",
    flexShrink: 1,
  },
  textInputContainer: {
    width: 330,
    height: 160,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    borderWidth: 2,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 20,
    flexShrink: 1,
  },
  textContainer: {
    alignSelf: "center",
    marginRight: 20,
    flexShrink: 1,
  },
  characterCountContainer: {
    justifyContent: "flex-end",
    // backgroundColor: "green",
    flexGrow: 1,
  },
});
