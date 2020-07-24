import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { InvertedLogo, OnboardingTitle, ContinueButton } from "_atoms";
import { CheckBox } from "react-native-elements";
function ReligionEntryPage({ navigation, route }) {
  //   const { userData } = route.params;
  //   console.log(userData);
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
            />
            <CheckBox
              title="Islam"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Atheism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
            <CheckBox
              title="Other"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Christianity"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
            <CheckBox
              title="Judaism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
          </View>
          <View style={styles.optionsContainer}>
            <CheckBox
              title="Buddhism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
            <CheckBox
              title="Catholicism"
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.optionTextStyle}
            />
          </View>
        </View>
      </View>

      {/* Continue Button Container */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton _onPress={null} _disabled={null} />
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
