import React from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppTitle from "_atoms/app-title";
import Button from "_atoms/button";
import TermsButton from "_atoms/termsBtn";
import PrivacyButton from "_atoms/privacyBtn";

function StartPage({ navigation }) {
  const _loginHandler = () => {
    navigation.navigate("Login");
  };
  const _signUpHandler = () => {
    navigation.navigate("NumberEntryPage");
  };
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[
        "#D99202",
        "rgba(215, 144, 2, 0.989603)",
        "rgba(240, 171, 30, 0.78) ",
        "rgba(247, 169, 9, 0.54)",
      ]}
    >
      <SafeAreaView style={styles.constainer}>
        <SafeAreaView style={styles.title_logoPos}>
          <AppTitle />
          <Image
            style={styles.logoPos}
            source={require("_assets/images/Peek_Logo.png")}
          />
        </SafeAreaView>

        <Button description="Create an account" onPress={_signUpHandler} />
        <Button description="Login" onPress={_loginHandler} />
      </SafeAreaView>
      <View style={styles.termsOfServ}>
        <TermsButton description="Terms of Service" />
      </View>
      <View style={styles.privacyBtn}>
        <PrivacyButton description="Privacy Concerns" />
      </View>
    </LinearGradient>
  );
}
export default StartPage;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  termsOfServ: {
    alignSelf: "flex-start",
    bottom: 0,
    position: "absolute",
    left: 34,
    marginBottom: 40,
  },
  privacyBtn: {
    alignSelf: "flex-end",
    bottom: 0,
    position: "absolute",
    right: 35,
    marginBottom: 40,
  },
  title_logoPos: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 0,
  },
  logoPos: {
    marginBottom: 17,
    position: "absolute",
    left: 125,
    bottom: 10,
    alignSelf: "center",
    height: 70,
    width: 70,
  },
});
