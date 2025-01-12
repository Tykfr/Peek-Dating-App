import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "_scenes/sign-up";
import { NumberEntryPage } from "_scenes/sign-up";
import { VerificationCodePage } from "_scenes/sign-up";
import { NameEntryPage } from "_scenes/sign-up";
import { EmailEntryPage } from "_scenes/sign-up";
import { BirthdayEntryPage } from "_scenes/sign-up";
import { GenderIdentityPage } from "_scenes/sign-up";
import { DatingInterestPage } from "_scenes/sign-up";
import { SchoolEntryPage } from "_scenes/sign-up";
import { PoliticalEntryPage } from "_scenes/sign-up";
import { ReligionEntryPage } from "_scenes/sign-up";
import { EthnicityEntryPage } from "_scenes/sign-up";
import { OccupationEntryPage } from "_scenes/sign-up";
import { LocationEntryPage } from "_scenes/sign-up";
import { BioEntryPage } from "_scenes/sign-up";
import { PhotoSelectionPage } from "_scenes/sign-up";
import { PromptEntryPage } from "_scenes/sign-up";
import { PromptSelectionPage } from "_scenes/sign-up";
import { PromptSubmissionPage } from "_scenes/sign-up";
import { MainNavigation } from "_navigations";


const Stack = createStackNavigator();

function SignUpNavigator() {
  return (
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none" screenOptions={{gestureEnabled:false}} >
        <Stack.Screen name="LoginPage" component={LoginPage}  />
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
        <Stack.Screen
          name="PromptSelectionPage"
          component={PromptSelectionPage}
          headerShown={true}
          options={{
            title: "Prompts",
          }}
        />
        <Stack.Screen
          name="PromptSubmissionPage"
          component={PromptSubmissionPage}
        />
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
      </Stack.Navigator>
  );
}

export default SignUpNavigator;
