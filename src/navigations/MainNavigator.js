import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen } from "_scenes/home";
import { ProfileStackScreen } from "_navigations";

const Stack = createStackNavigator();

// Contains the navigations from the homepage to the related pages
function MainNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={ProfileStackScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
