import React from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppTitle from "_atoms/app-title";
import Button from "_atoms/button";
import TermsButton from "_atoms/termsBtn";
import PrivacyButton from "_atoms/privacyBtn";

function LoginPage() {
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
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.title_logoPos}>
          <AppTitle />
          <Image
            style={styles.logoPos}
            source={require("_assets/images/Peek_Logo.png")}
          />
        </SafeAreaView>
        <View style={styles.button_icon}>
          <Image
            style={styles.mailIcon}
            source={require("_assets/images/mail.png")}
          />
          <Button description="Continue with Email" />
        </View>

        <View style={styles.button_icon}>
          <Image
            style={styles.dialIcon}
            source={require("_assets/images/dialPad.png")}
          />
          <Button description="Continue with Phone Number" />
        </View>
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
export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  button_icon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  mailIcon: {
    position: "absolute",
    left: 20,
    top: 17,
    height: 22,
    width: 22,
  },
  dialIcon: {
    height: 22,
    width: 22,
    position: "absolute",
    left: 20,
    top: 17,
  },
});
