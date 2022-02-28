import styles from "./MatchingStyles";
import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";

import SwipeDeck from "_components/organisms/SwipeDeck";

const MatchingView = ({DATA}) => {
  const [index, setIndex] = React.useState(4)
  const [age, setAge] = React.useState(22);
  let potentialMatch = Object.keys(DATA)
  // console.log( DATA[potentialMatch[index]][0]["name"])

  return (
    <SafeAreaView style={styles.container}>
      <SwipeDeck content={DATA[potentialMatch[index]]} name = {DATA[potentialMatch[index]][0]["name"]} age = {DATA[potentialMatch[index]][0]["age"]} currPos = {index} setNextPos = {setIndex} />
    </SafeAreaView>
  );
};



export default MatchingView;
