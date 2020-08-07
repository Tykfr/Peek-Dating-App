import React from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppTitle from "_atoms/app-title";
import Button from "_atoms/button";
import TermsButton from "_atoms/termsBtn";
import PrivacyButton from "_atoms/privacyBtn";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function LoginPage({ navigation }) {
  const dialIcon = <Entypo name="dial-pad" size={22} color="#FFFFFF" />;
  const emailIcon = <MaterialIcons name="email" size={22} color="#FFFFFF" />;
  const phoneNumberHandler = () => {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.imageView}>
          <Image
            resizeMode="stretch"
            style={styles.imageStyle}
            source={require("_assets/images/Heart_Connections.png")}
          />
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={styles.title_logoPos}>
            <View>
              <AppTitle />
            </View>

            <View style={styles.logoPos}>
              <Image
                style={styles.logoPos}
                source={require("_assets/images/Peek_Logo.png")}
              />
            </View>
          </View>

          <View>
            <View>
              <Button description="Continue with Email" icon={emailIcon} />
            </View>

            <View>
              <Button
                description="Continue with Phone Number"
                icon={dialIcon}
                onPress={phoneNumberHandler}
              />
            </View>
          </View>
        </View>

        <View style={styles.terms_priv}>
          <View>
            <TermsButton description="Terms of Service" />
          </View>

          <View>
            <PrivacyButton description="Privacy Concerns" />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  terms_priv: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title_logoPos: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  logoPos: {
    width: 75,
    height: 75,
  },
  imageView: {
    width: "100%",
    height: 0,
    marginTop: 20,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
});
