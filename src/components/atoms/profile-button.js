import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const circle = StyleSheet.create({
  basic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#FCD449",
  },
  press: {
    width: 50,
    height: 50,
  },
});
const Profile_button = ({ navigation }) => (
  <TouchableOpacity
    style={circle.basic}
    onPress={() => navigation.navigate("Profile", { screen: "ProfileScreen" })}
  >
    <View style={circle.press}></View>
  </TouchableOpacity>
);

export default Profile_button;
