import React, {useState, Component} from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList,TextInput } from "react-native";
import { Prompt_box } from "_molecules";
import {listOfPrompts} from '_assets/data/list-of-prompts';
import { TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import AsyncStorage from "@react-native-community/async-storage";


class PromptScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      prompt: "",
      response: "",
    }
  }
  setPrompt = (prompt) => {
    this.setState({
      isModalVisible:true,
      prompt: prompt
    })
  }

  // Update the prompt on the database
  updatePrompt = async (index,navigation) => {
    const userID = await AsyncStorage.getItem("userID")

    fetch ( "https://www-student.cse.buffalo.edu/peek_mobile_dating/updatePrompt.php",{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
      prompt: this.state.prompt,
      response: this.state.response,
      index: index + 1

    })
    }
  )
  .then((response) => response.json())
  .then((json) => {
    navigation.navigate("Profile");
    console.log(json)})
  .catch((error) => console.log(error))
  }

  renderItem = ({item}) => {
  return (
  <View>
    <TouchableOpacity onPress={() => this.setPrompt(item.prompt)}>
    <Prompt_box prompt={item}/>
    </TouchableOpacity>
  </View>
  )}
  
  render() {
    const {isModalVisible,prompt,response} = this.state
    const {navigation} = this.props
    const {index} = this.props.route.params
    return(
      <SafeAreaView>
        <View style={styles.centeredView}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible:false})}
        >
          <View style={styles.modalView}>
            <Text>{prompt}</Text>
            <View>
              <TextInput
                style={styles.textInput}
                onChangeText={input => this.setState({response:input})}
                placeholder="Type Response Here!"
                defaultValue={response}
                />
                <View>
                  <TouchableOpacity onPress={() => this.updatePrompt(index,navigation)}>
                  <Text>Add Prompt </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>
      </View>
        <FlatList
        data={listOfPrompts}
        renderItem ={this.renderItem}
        />
      </SafeAreaView>
    )
    
  }
}

export default PromptScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textInput:{
    height:40,
  }

});