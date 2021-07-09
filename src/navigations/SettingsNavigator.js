import React from "react";
import { Linking, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettingsPage } from "_scenes/settings-page";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={"Settings"} component={SettingsPage} />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;
