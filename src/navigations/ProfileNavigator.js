import React from "react";
import { ProfileScreen, PromptScreen } from "_scenes/profile";
import { SettingsNavigator } from "_navigations";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="Prompt" component={PromptScreen} />
      <ProfileStack.Screen
        name="SettingsNavigator"
        component={SettingsNavigator}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
