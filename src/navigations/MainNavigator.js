import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen } from "_scenes/home";
import { ProfileStackScreen } from "_navigations";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

// Contains the navigations from the homepage to the related pages
function MainNavigation() {
  return (
    <NavigationContainer>

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
    </NavigationContainer>

  );
}

export default MainNavigation;
