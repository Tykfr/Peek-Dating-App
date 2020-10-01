import React from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { Prompt_box } from "_molecules";
import {listOfPrompts} from '_assets/data/list-of-prompts';

const styles = StyleSheet.create({});

function PromptScreen({}) {
  const renderItem = ({item}) => (
   <Prompt_box prompt={item}/>
  );

  return (
  <SafeAreaView>
    <Text> Hello</Text>
    <FlatList
     data={listOfPrompts}
     renderItem ={renderItem}
     
    />
  </SafeAreaView>
  );
}

export default PromptScreen;
