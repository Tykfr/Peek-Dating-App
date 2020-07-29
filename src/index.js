import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StartPage,
  LoginPage,
  NumberEntryPage,
  VerificationCodePage,
  NameEntryPage,
  EmailEntryPage,
  BirthdayEntryPage,
  GenderIdentityPage,
  DatingInterestPage,
  SchoolEntryPage,
  PoliticalEntryPage,
  ReligionEntryPage,
  EthnicityEntryPage,
  OccupationEntryPage,
  LocationEntryPage,
  BioEntryPage,
  PhotoSelectionPage,
  PromptEntryPage,
} from "_scenes/";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="NumberEntryPage" component={NumberEntryPage} />
        <Stack.Screen
          name="VerificationPage"
          component={VerificationCodePage}
        />
        <Stack.Screen name="NameEntryPage" component={NameEntryPage} />
        <Stack.Screen name="EmailEntryPage" component={EmailEntryPage} />
        <Stack.Screen name="BirthdayEntryPage" component={BirthdayEntryPage} />
        <Stack.Screen
          name="GenderIdentityPage"
          component={GenderIdentityPage}
        />
        <Stack.Screen
          name="DatingInterestPage"
          component={DatingInterestPage}
        />
        <Stack.Screen name="SchoolEntryPage" component={SchoolEntryPage} />
        <Stack.Screen
          name="PoliticalEntryPage"
          component={PoliticalEntryPage}
        />
        <Stack.Screen name="ReligionEntryPage" component={ReligionEntryPage} />
        <Stack.Screen
          name="EthnicityEntryPage"
          component={EthnicityEntryPage}
        />
        <Stack.Screen
          name="OccupationEntryPage"
          component={OccupationEntryPage}
        />
        <Stack.Screen name="LocationEntryPage" component={LocationEntryPage} />
        <Stack.Screen name="BioEntryPage" component={BioEntryPage} />
        <Stack.Screen
          name="PhotoSelectionPage"
          component={PhotoSelectionPage}
        />
        <Stack.Screen name="PromptEntryPage" component={PromptEntryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
