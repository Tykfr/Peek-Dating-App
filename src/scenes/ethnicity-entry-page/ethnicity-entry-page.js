import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { OnboardingTitle, InvertedLogo, ContinueButton } from "_atoms";
import { CheckBox } from "react-native-elements";

function EthnicityEntryPage({ navigation, route }) {
  const { userData } = route.params;
  //console.log(userData);
  const [black, setBlack] = React.useState(false);
  const [asian, setAsian] = React.useState(false);
  const [nativeAmerican, setNativeAmerica] = React.useState(false);
  const [white, setWhite] = React.useState(false);
  const [hispanic, setHispanic] = React.useState(false);
  const [pacificIslander, setPacificIslander] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [ethnicity, setEthnicity] = React.useState("");

  function _occupationHandler() {
    userData.ethnicity = ethnicity;

    navigation.navigate("OccupationEntryPage", {
      userData: userData,
    });
  }

  function ethnicitySelection(selection) {
    setEthnicity(selection);
    setBlack(selection === "Black/African American");
    setAsian(selection === "Asian");
    setNativeAmerica(selection === "Native American");
    setWhite(selection === "White");
    setHispanic(selection === "Hispanic");
    setPacificIslander(selection === "Pacific Islander");
    setOther(selection === "Other");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <InvertedLogo />
        </View>
        {/* Title Container */}
        <View style={styles.titleContainer}>
          <OnboardingTitle description={"What is your ethnicity ?"} />
        </View>
        {/* Check box Container */}
        <View style={{ width: "100%" }}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              title={"Black/African American"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Black/African American")}
              checked={black}
              checkedColor="#D99202"
            />
            <CheckBox
              title={"Asian"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Asian")}
              checked={asian}
              checkedColor="#D99202"
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              title={"Native American"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Native American")}
              checked={nativeAmerican}
              checkedColor="#D99202"
            />
            <CheckBox
              title={"White"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("White")}
              checked={white}
              checkedColor="#D99202"
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <CheckBox
              title={"Hispanic/Latino"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Hispanic")}
              checked={hispanic}
              checkedColor="#D99202"
            />
            <CheckBox
              title={"Other"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Other")}
              checked={other}
              checkedColor="#D99202"
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <CheckBox
              title={"Pacific Islander"}
              containerStyle={styles.checkBox}
              onPress={() => ethnicitySelection("Pacific Islander")}
              checked={pacificIslander}
              checkedColor="#D99202"
            />
          </View>
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton
          _onPress={() => _occupationHandler()}
          _disabled={!ethnicity}
        />
      </View>
    </SafeAreaView>
  );
}
export default EthnicityEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  continueButtonContainer: {
    marginBottom: 40,
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
  checkBox: {
    borderWidth: 1,
    borderRadius: 23.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 15,
    borderColor: "#D99202",
    backgroundColor: "#FFFFFF",
  },
  optionTextStyle: {
    fontSize: 17,
  },
  checkBoxContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
