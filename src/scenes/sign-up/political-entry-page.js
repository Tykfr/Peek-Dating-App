import React, {useEffect} from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import {
  ContinueButton,
  OnboardingTitle,
  InputResponse,
  InvertedLogo,
} from "_atoms";
import { CheckBox } from "react-native-elements";

function PoliticalEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [liberal, setLiberal] = React.useState(false);
  const [moderate, setModerate] = React.useState(false);
  const [conservative, setConservative] = React.useState(false);
  const [progressive, setProgressive] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [result, setResult] = React.useState();

  const selectOption = (selection) => {
    setResult(selection);

    setLiberal(selection === "Liberal" ? true : false);
    setModerate(selection === "Moderate" ? true : false);
    setConservative(selection === "Conservative" ? true : false);
    setProgressive(selection === "Progressive" ? true : false);
    setOther(selection === "Other" ? true : false);
  };

  const _religionEntryPageHandler = () => {
    userData.PoliticalViews = result;

    navigation.navigate("ReligionEntryPage", {
      userData: userData,
    });
  };
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />

        <View
          style={{
            width: "100%",
          }}
        >
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <InvertedLogo />
          </View>
          {/* Onboarding Title Container */}
          <View style={styles.onboardingTitleContainer}>
            <OnboardingTitle description={"What are your political views ?"} />
          </View>

          <View style={{ width: "100%", flexShrink: 1 }}>
            {/*Row One Options  */}
            <View style={styles.rowOptions}>
              {/* Put a check box here */}
              <CheckBox
                title={"Liberal"}
                containerStyle={styles.optionStyle}
                textStyle={styles.optionTextStyle}
                checkedColor="#D99202"
                onPress={() => selectOption("Liberal")}
                checked={liberal}
              />
              <CheckBox
                title={"Moderate"}
                containerStyle={styles.optionStyle}
                textStyle={styles.optionTextStyle}
                checkedColor="#D99202"
                onPress={() => selectOption("Moderate")}
                checked={moderate}
              />
            </View>
            {/*Row Two Options  */}
            <View style={{ alignSelf: "center" }}>
              {/* Put a check box here */}
              <CheckBox
                title={"Conservative"}
                containerStyle={styles.optionStyle}
                textStyle={styles.optionTextStyle}
                checkedColor="#D99202"
                onPress={() => selectOption("Conservative")}
                checked={conservative}
              />
            </View>
            {/* Row Three Options */}
            <View style={styles.rowOptions}>
              {/* Put a check box here */}
              <CheckBox
                title={"Progressive"}
                containerStyle={styles.optionStyle}
                textStyle={styles.optionTextStyle}
                checkedColor="#D99202"
                onPress={() => selectOption("Progressive")}
                checked={progressive}
              />

              {/* Put a check box here */}
              <CheckBox
                title={"Other"}
                containerStyle={styles.optionStyle}
                textStyle={styles.optionTextStyle}
                checkedColor="#D99202"
                checked={true}
                onPress={() => selectOption("Other")}
                checked={other}
              />
            </View>
          </View>
        </View>
        {/* Continue Button Container */}
        <View style={styles.continueButtonContainer}>
          <ContinueButton
            _onPress={() => _religionEntryPageHandler()}
            _disabled={!result}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default PoliticalEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  continueButtonContainer: {
    marginBottom: 20,
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  onboardingTitleContainer: {
    marginBottom: 40,
    marginLeft: 16,
  },
  responseContainer: {
    alignSelf: "center",
    marginTop: 90,
  },

  optionTextStyle: {
    fontSize: 17,
  },
  rowOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  optionStyle: {
    borderWidth: 1,
    borderRadius: 23.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 15,
    borderColor: "#D99202",
    backgroundColor: "#FFFFFF",
  },
});
