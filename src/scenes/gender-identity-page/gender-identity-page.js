import React from "react";
import { StyleSheet, StatusBar, View, SafeAreaView, Image } from "react-native";
import { ContinueButton, OnboardingTitle } from "_atoms";
import { CheckBox } from "react-native-elements";
import { AppLoading } from "expo";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

function GenderIdentityPage({ route, navigation }) {
  const { userID } = JSON.parse(JSON.stringify(route.params));
  const { birthMonth } = JSON.parse(JSON.stringify(route.params));
  const { birthDay } = JSON.parse(JSON.stringify(route.params));
  const { birthYear } = JSON.parse(JSON.stringify(route.params));

  const [maleChecked, setMaleCheck] = React.useState(false);
  const [femaleChecked, setfemaleCheck] = React.useState(false);
  const [genderResult, setGenderResult] = React.useState("");
  function selectMale() {
    setMaleCheck(true);
    setfemaleCheck(false);
    setGenderResult("Male");
  }

  function selectFemale() {
    setMaleCheck(false);
    setfemaleCheck(true);
    setGenderResult("Female");
  }

  const _datingInterestPageHandler = () => {
    navigation.navigate("DatingInteretsPage", {
      userID: userID,
      birthMonth: birthMonth,
      birthDay: birthDay,
      birthYear: birthYear,
      genderResult: genderResult,
    });
  };
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />

        <View style={{ width: "100%" /* backgroundColor: "purple" */ }}>
          <View
            style={{ alignSelf: "flex-end", marginTop: 28, marginBottom: 14 }}
          >
            <Image
              style={{ /*backgroundColor: "pink",*/ marginRight: 18 }}
              source={require("_assets/images/Peek_Logo_Inverted.png")}
            />
          </View>
          <View>
            <View
              style={{
                /*backgroundColor: "red",*/ marginBottom: 33,
                marginLeft: 16,
              }}
            >
              <OnboardingTitle description={"What is your gender ?"} />
            </View>

            <View
              style={{
                /*backgroundColor: "green",*/ width: "50%",
                marginLeft: 25,
              }}
            >
              <CheckBox
                center
                title="Male"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={maleChecked}
                onPress={() => selectMale()}
                containerStyle={styles.maleCheckBoxContainer}
                textStyle={styles.textCheckBoxStyle}
                checkedColor="#D99202"
              />
              <CheckBox
                center
                title="Female"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={femaleChecked}
                onPress={() => selectFemale()}
                containerStyle={styles.femaleCheckBoxContainer}
                textStyle={styles.textCheckBoxStyle}
                checkedColor="#D99202"
              />
            </View>
          </View>
        </View>
        <View style={{ /*backgroundColor: "blue",*/ marginBottom: 46 }}>
          <ContinueButton
            _onPress={_datingInterestPageHandler}
            _disabled={!genderResult}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default GenderIdentityPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    //backgroundColor: "grey",
  },
  maleCheckBoxContainer: {
    marginRight: 33,
    backgroundColor: "transparent",
    borderWidth: 0,
    marginBottom: 15,
  },
  femaleCheckBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  textCheckBoxStyle: {
    fontSize: 22,
    fontFamily: "Roboto_500Medium",
    fontWeight: "bold",
  },
});
