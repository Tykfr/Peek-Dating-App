import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { InvertedLogo, OnboardingTitle, ContinueButton } from "_atoms";
import { CheckBox } from "react-native-elements";
function ReligionEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [jewish, setJewish] = React.useState(false);
  const [islam, setIslam] = React.useState(false);
  const [atheism, setAtheism] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [christianity, setChristianity] = React.useState(false);
  const [judiasm, setJudiasm] = React.useState(false);
  const [buddhism, setBuddhism] = React.useState(false);
  const [catholicism, setCatholicism] = React.useState(false);
  const [religion, setReligion] = React.useState("");

  function selectReligion(selection) {
    setReligion(selection);
    setJewish(selection === "Jewish" ? true : false);
    setIslam(selection === "Islam" ? true : false);
    setAtheism(selection === "Atheism" ? true : false);
    setBuddhism(selection === "Buddhism" ? true : false);
    setCatholicism(selection === "Catholicism" ? true : false);
    setOther(selection === "Other" ? true : false);
    setChristianity(selection === "Christianity" ? true : false);
    setJudiasm(selection === "Judiasm" ? true : false);
  }
  const _ethnicityEntryPage = () => {
    userData.push({ religion: religion });
    navigation.navigate("EthnicityEntryPage", {
      userData: userData,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" /*backgroundColor: "orange"*/ }}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <InvertedLogo />
        </View>
        {/*Title Container  */}
        <View style={styles.titleContainer}>
          <OnboardingTitle description={"What is your religion ?"} />
        </View>
        {/* Options Container */}
        <View
          style={{
            /*backgroundColor: "purple",*/
            width: "100%",
          }}
        >
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Jewish"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Jewish")}
              checked={jewish}
              checkedColor="#D99202"
            />
            <CheckBox
              title="Islam"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Islam")}
              checked={islam}
              checkedColor="#D99202"
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Atheism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Atheism")}
              checked={atheism}
              checkedColor="#D99202"
            />
            <CheckBox
              title="Other"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Other")}
              checked={other}
              checkedColor="#D99202"
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Christianity"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Christianity")}
              checked={christianity}
              checkedColor="#D99202"
            />
            <CheckBox
              title="Judaism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Judiasm")}
              checked={judiasm}
              checkedColor="#D99202"
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Buddhism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Buddhism")}
              checked={buddhism}
              checkedColor="#D99202"
            />
            <CheckBox
              title="Catholicism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
              onPress={() => selectReligion("Catholicism")}
              checked={catholicism}
              checkedColor="#D99202"
            />
          </View>
        </View>
      </View>

      {/* Continue Button Container */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton
          _onPress={() => _ethnicityEntryPage()}
          _disabled={!religion}
        />
      </View>
    </SafeAreaView>
  );
}

export default ReligionEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  continueButtonContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 40,
    marginLeft: 16,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkBoxStyle: {
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
});
