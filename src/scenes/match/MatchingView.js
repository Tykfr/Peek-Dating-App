import styles from "./MatchingStyles";
import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import {Queue} from "_dataStructures";
import SwipeDeck from "_components/organisms/SwipeDeck";

const MatchingView = ({ DATA, likesFunc, dislikesFunc }) => {
  
  let queue = new Queue(Object.keys(DATA));
  const [queueOfPotentialMatchIDs, setQueueOfPotentialMatchIDs] = React.useState(queue);
  const [currProfileID, setCurrProfileID] = React.useState(Object.keys(DATA)[0])
  const [currProfile, setCurrProfile] = React.useState(DATA[Object.keys(DATA)[0]])
  React.useEffect(()=>{
    console.log("Current state of queue \n " + queueOfPotentialMatchIDs.size())
  })

  if (currProfile === undefined){
    return (
      <SafeAreaView>
        <Text> User list has been exhausted</Text>
      </SafeAreaView>
    )
  }else {
  return (
    <SafeAreaView style={styles.container}>
      
      <SwipeDeck
        content={currProfile}
        name={currProfile[0]["name"]}
        age={currProfile[0]["age"]}
        currUserID ={currProfileID}
        setNextUserID={setCurrProfileID}
        setNextProfile={setCurrProfile}
        queue={queueOfPotentialMatchIDs}
        likesFunc={likesFunc}
        dislikesFunc={dislikesFunc}
        userProfileTable={DATA}
      />

    </SafeAreaView>
  );
  }
};

export default MatchingView;


