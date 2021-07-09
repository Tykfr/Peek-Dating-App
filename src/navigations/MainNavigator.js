import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen } from "_scenes/home";
import { ProfileStackScreen } from "_navigations";
import { Matching } from "_scenes/match";
const Stack = createStackNavigator();

// Contains the navigations from the homepage to the related pages
function MainNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
         // headerShown: true,
        }}
       
      />
      <Stack.Screen name="Profile" component={ProfileStackScreen} />
      <Stack.Screen name="Matching" component={Matching}/>
    </Stack.Navigator>
  );
}

export default MainNavigation;
