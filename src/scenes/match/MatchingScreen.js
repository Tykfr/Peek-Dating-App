import React, { Component, useCallback } from "react";
import MatchingView from "./MatchingView";
import SwipeDeck from "_components/organisms/SwipeDeck";
import "firebase/firestore";
import * as firebase from "firebase";
import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { func } from "prop-types";

function Matching() {
  const [userID, setUserID] = React.useState("");
  const [preference, setPreference] = React.useState("");
  const [radius, setRadius] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [age_range, setAge_Range] = React.useState(50);
  const [imageDataset, setImageDataset] = React.useState({});
  const [promptDataset, setPromptDataset] = React.useState({});
  const [bioDataset, setbioDataset] = React.useState({});
  const [userIDDataset, setUserIDDataset] = React.useState(new Set([]));
  const [partnerDataSet, setPartnerDataset] = React.useState({});
  const [isFetching, setFetching] = React.useState(true);

  async function getUserID() {
    try {
      const userID = firebase.auth().currentUser;
      const db = firebase.firestore();

      setUserID(userID.uid);
    } catch (error) {
      console.log("Error retrieving userId");
    }
  }

  const findPartners = async function () {
    await getUserID();
    const db = firebase.firestore();
    db.collection("users")
      .get()
      .then(async (data) => {
        data.forEach(async (doc) => {
          await fetchCardData(doc);
        });
        await formatCard();
      })
      .catch((error) => console.log("Error getting Users: ", error));
  };

  async function fetchCardData(data) {
    await setPhotosURI(data.id);
    var userIDs = userIDDataset;
    var bios = bioDataset;
    var user = promptDataset;
    var currentBio = data.data().Bio;
    bios[data.id] = currentBio;
    user[data.id] = data.data().prompts;
    userIDs.add(data.id);
    setUserIDDataset(userIDs);
    setPromptDataset(user);
    setbioDataset(bios);
  }

  async function formatCard(){
    let partnerDataSet = {};
    for (let partnerID of userIDDataset){
      let entryArr = [{}, {}, {}, {}];
      entryArr[0]["prompt"] = "Bio: ";
      entryArr[0]["response"] = bioDataset[partnerID];

      let index = 1;
      for (let prompts of Object.keys(promptDataset[partnerID])) {
        entryArr[index]["prompt"] = prompts;
        entryArr[index]["response"] = promptDataset[partnerID][prompts];
        index++;
      }
      index = 0;
      for (let image of imageDataset[partnerID]) {
        if (index === 4) {
          break;
        }
        entryArr[index]["uri"] = image["uri"];
        index++;
      }
      partnerDataSet[partnerID] = entryArr;
    }
    setPartnerDataset(partnerDataSet);
  }

  async function setPhotosURI(UserId) {
    let storageRef = await firebase.storage().ref("user_images/" + "user_" + UserId);
    var user = imageDataset;
    user[UserId] = [];
   setImageDataset(user);
   await storageRef
      .listAll()
      .then(async (result) => {
       await result.items.forEach(async (imageref) => {
         await imageref
            .getDownloadURL()
            .then((url) => {
              var user = imageDataset;
              user[UserId].push({ uri: url });
              setImageDataset(user);
            })
            .catch((error) => console.log(error));
            setFetching(false); //setFetching iscalled here because the setPhotosUri function is slower then than overall findPartners function
        });
      })
      .catch((error) => console.log("Error retrieving user Images: ", error));
  }

  async function addLike(user, like) {
    const db = firebase.firestore();
    var matches = db.collection("Matching").doc(userID);

    matches
      .update({
        Seen: firestore.FieldValue.arrayUnion(user),
      })
      .then(() => {
        console.log("Seen successfully updated!");
      })
      .catch((error) => {
        console.log("Error updating Seen: ", error);
      });

    if (like) {
      matches
        .update({
          Likes: firestore.FieldValue.arrayUnion(user),
        })
        .then(() => {
          console.log("Likes successfully updated!");
        })
        .catch((error) => {
          console.log("Error updating Likes: ", error);
        });
    } else {
      matches
        .update({
          Dislikes: firestore.FieldValue.arrayUnion(user),
        })
        .then(() => {
          console.log("Dislikes successfully updated!");
        })
        .catch((error) => {
          console.log("Error updating Dislikes: ", error);
        });
    }
  }

  //Consider executing apploading to wait if data isn't pulled

  React.useEffect(() => {
    findPartners();
  }, [isFetching]);

  if (isFetching) {
    return <AppLoading />;
  } else {
    return <MatchingView DATA={partnerDataSet} />;
  }
}

export default Matching;
