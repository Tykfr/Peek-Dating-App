import React, {useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, SafeAreaView, Text, ScrollView, StatusBar } from "react-native";
import * as firebase from "firebase";

import {
  ContinueButton,
  InvertedLogo,
  OnboardingTitle,
  InfoText,
  PromptInputBox,
  AddAPrompt,
} from "_atoms";

function PromptEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const userID = firebase.auth().currentUser.uid;
  console.log(userID)
  // const firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");
  const [firstPrompt, setFirstPrompt] = React.useState("");
  const [secondPrompt, setSecondPrompt] = React.useState("");
  const [thirdPrompt, setThirdPrompt] = React.useState("");

  const [firstResponse, setFirstResponse] = React.useState("Select a prompt");
  const [secondResponse, setSecondResponse] = React.useState("Select a prompt");
  const [thirdResponse, setThirdResponse] = React.useState("Select a prompt");
  const [firstPromptVisibility, setFirstPromptVisbility] = React.useState(
    false
  );
  const [secondPromptVisibility, setSecondPromptVisibility] = React.useState(
    false
  );
  const [thirdPromptVisibility, setThirdPromptVisibility] = React.useState(
    false
  );
  async function completeAccount(userData, navigation) {
    userData.prompts = {firstPrompt : firstResponse,
      secondPrompt: secondResponse,
      thirdPrompt:thirdResponse
    };

    await submitData(userID,userData, navigation);
  }

  const _promptSelectionHandler = (key) => {
    switch (key) {
      case 1:
        setFirstPromptVisbility(true);
        break;
      case 2:
        setSecondPromptVisibility(true);
        break;
      case 3:
        setThirdPromptVisibility(true);
        break;
      default:
        break;
    }
    navigation.navigate("PromptSelectionPage", {
      key: key,
    });
  };
 

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    let mounted = true;
    if(mounted){
    if (route.params) {
      const { key } = route.params;
      
      if (key) {
        const { response } = route.params;
        const { prompt } = route.params;
        switch (key) {
          case 1:
            setFirstResponse(response);
            setFirstPrompt(prompt);
            break;
          case 2:
            setSecondResponse(response);
            setSecondPrompt(prompt);
            break;
          case 3:
            setThirdResponse(response);
            setThirdPrompt(prompt);
            break;
          default:
            break;
        }
      }
    }
    }
    return () => mounted = false;
  });
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        flexGrow: 1,
      }}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ width: "100%" }}>
          <View style={styles.logoContainer}>
            <InvertedLogo />
          </View>

          <View style={styles.titleContainer}>
            <OnboardingTitle description={"Select prompts for your profile"} />
          </View>
          <View style={styles.infoTextContainer}>
            <InfoText description={"One prompt is need minimum"} />
          </View>

          {firstPromptVisibility === false && (
            <View style={styles.addPromptContainer}>
              <AddAPrompt _onPress={() => _promptSelectionHandler(1)} />
            </View>
          )}
          {firstPromptVisibility && (
            <View style={styles.promptInputBoxContainer}>
              <PromptInputBox
                _onPress={() => _promptSelectionHandler(1)}
                _response={firstResponse}
                _prompt={firstPrompt}
              />
            </View>
          )}

          {secondPromptVisibility === false && (
            <View style={styles.addPromptContainer}>
              <AddAPrompt _onPress={() => _promptSelectionHandler(2)} />
            </View>
          )}
          {secondPromptVisibility && (
            <View style={styles.promptInputBoxContainer}>
              <PromptInputBox
                _onPress={() => _promptSelectionHandler(2)}
                _response={secondResponse}
                _prompt={secondPrompt}
              />
            </View>
          )}

          {thirdPromptVisibility === false && (
            <View style={styles.addPromptContainer}>
              <AddAPrompt _onPress={() => _promptSelectionHandler(3)} />
            </View>
          )}
          {thirdPromptVisibility && (
            <View style={styles.promptInputBoxContainer}>
              <PromptInputBox
                _onPress={() => _promptSelectionHandler(3)}
                _response={thirdResponse}
                _prompt={thirdPrompt}
              />
            </View>
          )}
        </View>

        <View style={styles.continueButtonContainer}>
          <ContinueButton
            _onPress={() => completeAccount(userData, navigation)}
            _disabled={false}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
export default PromptEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },

  continueButtonContainer: {
    marginBottom: 40,
  },
  titleContainer: {
    marginLeft: 16,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  promptInputBoxContainer: {
    width: "100%",
    marginBottom: 20,
  },
  addPromptContainer: {
    width: "100%",
    marginBottom: 40,
    marginLeft: 33,
  },
  infoTextContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
});

async function storeUserID(userID, navigation) {
  try {
    await AsyncStorage.setItem("userID", userID);
    navigation.navigate("MainNavigation");
  } catch (e) {
    console.error("Error: " + e);
  }
}

async function submitData(userID,userData, navigation) {

  await uploadImages(userData, userID);

  let db = firebase.firestore();
  let userRef = db.collection("users");
  userRef.doc(userID).set(userData);
  storeUserID(userID, navigation);
  }

  async function uploadImages(userData, userID){
  

    for (let x = 0; x < userData.img_array.length; x++){
      let ref = firebase.storage().ref().child("user_images/" + "user_" +userID  + "/" + "img_"+ x);
      let img =userData.img_array[x];
      const response = await fetch(img);
      const blob = await response.blob();
      ref.put(blob)
              .then(function(snapshot) {
             console.log('Uploaded img ' + x);
            })
            .catch((error) =>{
             console.error("Failure on image : " + x +" " + error);
            });
    }
     delete userData["img_array"];


 

  }