import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { LoginPage } from "_scenes/sign-up/login-Page";
import { NumberEntryPage } from "_scenes/sign-up/number-entry-page";
import { VerificationCodePage } from "_scenes/sign-up/verification-code-page";
import { NameEntryPage } from "_scenes/sign-up/name-entry-page";
import { EmailEntryPage } from "_scenes/sign-up/email-entry-page";
import { BirthdayEntryPage } from "_scenes/sign-up/birthday-entry-page";
import { GenderIdentityPage } from "_scenes/sign-up/gender-identity-page";
import { DatingInterestPage } from "_scenes/sign-up/dating-interest-page";
import { SchoolEntryPage } from "_scenes/sign-up/school-entry-page";
import { PoliticalEntryPage } from "_scenes/sign-up/political-entry-page";
import { ReligionEntryPage } from "_scenes/sign-up/religion-entry-page";
import { EthnicityEntryPage } from "_scenes/sign-up/ethnicity-entry-page";
import { OccupationEntryPage } from "_scenes/sign-up/occupation-entry-page";
import { LocationEntryPage } from "_scenes/sign-up/location-entry-page";
import { BioEntryPage } from "_scenes/sign-up/bio-entry-page";
import { PhotoSelectionPage } from "_scenes/sign-up/photo-selection-page";
import { PromptEntryPage } from "_scenes/sign-up/prompt-entry-page";
import { PromptSelectionPage } from "_scenes/sign-up/prompt-selection-page";
import { PromptSubmissionPage } from "_scenes/sign-up/prompt-submission-page";
import { MainNavigation } from "_navigations";
import { Linking, Platform, ActivityIndicator } from "react-native";

const Stack = createStackNavigator();

const PERSISTENCE_KEY = "NAVIGATION_STATE";
function SignUpNavigator() {
  //  const [isReady, setIsReady] = React.useState(false);
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);

   const [initialState, setInitialState] = React.useState();
   React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
     onStateChange={(state) =>
       AsyncStorage.setItem( PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none">
        <Stack.Screen name="LoginPage" component={LoginPage} />
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
    </NavigationContainer>
  );
}

export default SignUpNavigator;
