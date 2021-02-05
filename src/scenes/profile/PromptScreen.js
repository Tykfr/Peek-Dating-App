import React from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { Prompt_box } from "_molecules";
import {listOfPrompts} from '_assets/data/list-of-prompts';
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({});

function PromptScreen({}) {
  const renderItem = ({item}) => (
    <TouchableOpacity>
   <Prompt_box prompt={item}/>
   </TouchableOpacity>
  );

  return (
  <SafeAreaView>
    <FlatList
     data={listOfPrompts}
     renderItem ={renderItem}
     
    />
  </SafeAreaView>
  );
}

export default PromptScreen;
