import styles from "./MatchingStyles";
import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";

import SwipeDeck from "_components/organisms/SwipeDeck";

const MatchingView = ({DATA}) => {

  const [name, setName] = React.useState("Tasha Beacon");
  const [age, setAge] = React.useState(22);
  let potentialMatch = Object.keys(DATA)
  const [index, setIndex] = React.useState(4)
  return (
    <SafeAreaView style={styles.container}>
      <SwipeDeck content={DATA[potentialMatch[index]]} name = {name} age = {age} currPos = {index} setNextPos = {setIndex} />
    </SafeAreaView>
  );
};



export default MatchingView;
