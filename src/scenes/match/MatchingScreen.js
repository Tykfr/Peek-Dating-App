import React, { Component, useCallback } from "react";
import MatchingView from "./MatchingView";
import SwipeDeck from "_components/organisms/SwipeDeck";
import firebase from "firebase";
import "firebase/firestore";
import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { func } from "prop-types";
import AgeCalculator from "_utils/AgeCalculator";

function Matching() {
  const [userID, setUserID] = React.useState("");
  const [preference, setPreference] = React.useState("");
  const [radius, setRadius] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [age_range, setAge_Range] = React.useState(50);
  const [imageDataset, setImageDataset] = React.useState({});
  const [promptDataset, setPromptDataset] = React.useState({});
  const [bioDataset, setbioDataset] = React.useState({});
  const [nameAndAgeDatatset, setNameAndAgeDataset] = React.useState({});
  const [userIDDataset, setUserIDDataset] = React.useState(new Set([]));
  const [partnerDataSet, setPartnerDataset] = React.useState({});
  const [isFetching, setFetching] = React.useState(true);
  require("firebase/firestore");

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
    var nameAndAge = nameAndAgeDatatset;
    var name = data.data().Name;
    var age = AgeCalculator(
      "" +
        data.data().BirthMonth +
        "/" +
        data.data().BirthDate +
        "/" +
        data.data().BirthYear
    );
    bios[data.id] = data.data().Bio;
    user[data.id] = data.data().prompts;
    userIDs.add(data.id);
    nameAndAge[data.id] = { name: name, age: age };
    setUserIDDataset(userIDs);
    setPromptDataset(user);
    setbioDataset(bios);
    setNameAndAgeDataset(nameAndAge);
  }

  async function formatCard() {
    let partnerDataSet = {};
    for (let partnerID of userIDDataset) {
      let entryArr = [{}, {}, {}, {}];
      entryArr[0]["prompt"] = "Bio: ";
      entryArr[0]["response"] = bioDataset[partnerID];
      entryArr[0]["name"] = nameAndAgeDatatset[partnerID]["name"];
      entryArr[0]["age"] = nameAndAgeDatatset[partnerID]["age"];

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
    let storageRef = await firebase
      .storage()
      .ref("user_images/" + "user_" + UserId);
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

  async function dislikeProfile(noLikeUserID) {
    let db = firebase.firestore();
    let ref = db.collection("Matching").doc(userID);
    updateSeenList(ref,noLikeUserID);
  }

  async function likeProfile(likeUserID) {
    let db = firebase.firestore();
    let ref = db.collection("Matching").doc(likeUserID);
    await updateLikesList(ref, likeUserID);
    ref = db.collection("Matching").doc(userID);
    await updateSeenList(ref,likeUserID)
  }

 async function updateLikesList(ref, likeUserID){
    ref
    .get()
    .then((doc) => {
      if (doc.exists) {
        ref
          .update({
            Likes: firebase.firestore.FieldValue.arrayUnion(userID),
            likesCount: firebase.firestore.FieldValue.increment(1),
          })
          .then(() => {
            console.log("Successfully updated " + likeUserID + " like list");
          });
      } else {
        ref
          .set({
            Likes: [userID],
            likesCount: 1,
          })
          .then(() => {
            console.log("Successfully created " + likeUserID + "like list");
          });
      }
    })
    .catch((error) => {
      console.log("Error getting document: " + error);
    });
  }

  async function updateSeenList(ref,likeUserID){
    ref
    .get()
    .then((doc) => {
      if (doc.exists) {
        ref
          .update({
            Seen: firebase.firestore.FieldValue.arrayUnion(likeUserID),
          })
          .then(() => {
            console.log("Successfully updated " + userID + " seen list");
          });
      } else {
        ref
          .set({
            Seen: firebase.firestore.FieldValue.arrayUnion(likeUserID),
          })
          .then(() => {
            console.log("Successfully created " + userID + "seen list");
          });
      }
    })
    .catch((error) => {
      console.log("Error getting document: " + error);
    });
  }

  React.useEffect(() => {
    findPartners();
  }, [isFetching]);

  if (Object.keys(partnerDataSet).length === 0) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Loading Screen :)</Text>
      </SafeAreaView>
    );
  } else {
    return <MatchingView DATA={partnerDataSet} likesFunc={likeProfile} dislikesFunc={dislikeProfile}/>;
  }
}

export default Matching;
