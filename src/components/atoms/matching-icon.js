import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const match_icon = ({ navigation }) => (
  <Icon
    name="style"
    type="material"
    color="#FFFFFF"
    size={50}
    onPress={() => {
      navigation.navigate("Matching", { screen: "Matching" });
    }}
  />
);

export default match_icon;
