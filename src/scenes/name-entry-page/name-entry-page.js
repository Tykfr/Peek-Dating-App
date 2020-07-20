import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Alert } from "react-native";
import OnboardingTitle from "_atoms/onboarding-page-title";
import InfoText from "_atoms/info-text";
import ContinueButton from "_atoms/continueButton";
import InputResponse from "_atoms/input-response";

function NameEntryPage({ route, navigation }) {
  const { userID } = JSON.parse(JSON.stringify(route.params));
  const [name, setName] = React.useState();
  const url =
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/writeUserName.php";

  /**
   * @author William Phillips
   * @param {*} name - name will the string representation of the users name and will written to the database appeneded to their userID
   * @param {*} url - link to php script that will writer users name to database
   * @description - this function will make a call to the database api and udate the users info with their name
   */

  async function writeUserName() {
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        userID: userID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
        navigation.navigate("EmailEntryPage");
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
        <ContinueButton _onPress={writeUserName} _disabled={!name} />
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
