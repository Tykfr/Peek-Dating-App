import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { AppLoading } from "expo";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { ContinueButton, OnboardingTitle } from "_atoms";

function DatingInterestPage({ navigation, route }) {
  const { userData } = route.params;
  const [menChecked, setMenCheck] = React.useState(false);
  const [womenChecked, setWomenCheck] = React.useState(false);
  const [interestSelection, setInterestSelection] = React.useState("");
  const [both, setBoth] = React.useState(false);

  const _schoolEntryPageHandler = () => {
    userData.DatingInterest = interestSelection;

    navigation.navigate("SchoolEntryPage", {
      userData: userData,
    });
  };

  function selectMen() {
    setMenCheck(true);
    setWomenCheck(false);
    setBoth(false);
    setInterestSelection("Men");
  }

  function selectWomen() {
    setMenCheck(false);
    setWomenCheck(true);
    setBoth(false);
    setInterestSelection("Women");
  }

  function selectBoth() {
    setMenCheck(false);
    setWomenCheck(false);
    setBoth(true);
    setInterestSelection("Both");
  }
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <View style={{ /*backgroundColor: "orange",*/ width: "100%" }}>
          {/*Logo Container  */}
          <View
            style={{
              // backgroundColor: "green",
              alignSelf: "flex-end",
              marginRight: 18,
              marginTop: 28,
              marginBottom: 14,
            }}
          >
            <Image source={require("_assets/images/Peek_Logo_Inverted.png")} />
          </View>

          {/*Title Container  */}
          <View
            style={{
              // backgroundColor: "yellow",
              marginLeft: 16,
              marginBottom: 33,
            }}
          >
            <OnboardingTitle
              description={"Who are you interested in dating?"}
            />
          </View>
          {/* Check Box Container */}

          <View
            style={{
              /* backgroundColor: "purple",*/ width: "50%",
              marginLeft: 25,
            }}
          >
            <CheckBox
              title="Men"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={styles.maleCheckBoxContainer}
              textStyle={styles.textCheckBoxStyle}
              checked={menChecked}
              onPress={() => selectMen()}
              checkedColor="#D99202"
            />
            <CheckBox
              title="Women"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={styles.femaleCheckBoxContainer}
              textStyle={styles.textCheckBoxStyle}
              checkedColor="#D99202"
              checked={womenChecked}
              onPress={() => selectWomen()}
            />
            <CheckBox
              title="Both"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={styles.bothCheckBoxContainer}
              textStyle={styles.textCheckBoxStyle}
              checkedColor="#D99202"
              checked={both}
              onPress={() => selectBoth()}
            />
          </View>
        </View>

        {/*Button Container  */}
        <View style={{ /*backgroundColor: "blue",*/ marginBottom: 46 }}>
          <ContinueButton
            _onPress={_schoolEntryPageHandler}
            _disabled={!interestSelection}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default DatingInterestPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "grey",
    backgroundColor: "white",
  },

  maleCheckBoxContainer: {
    //marginRight: 33,
    backgroundColor: "transparent",
    borderWidth: 0,
    //marginBottom: 15,
  },
  femaleCheckBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  bothCheckBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  textCheckBoxStyle: {
    fontSize: 22,
    fontFamily: "Roboto_500Medium",
    fontWeight: "bold",
  },
});
