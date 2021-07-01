import styles from "./PromptStyles";
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList, TextInput } from "react-native";
import { Prompt_box } from "_molecules";
import { listOfPrompts } from '_assets/data/list-of-prompts';
import { TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';



const PromptView = ({navigation,isModalVisible,response,prompt,updateModal,updatePrompt,updateResponse}) => {    
    return(
    <SafeAreaView>
        <View style={styles.centeredView}>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => updateModal()}
            >
                <View style={styles.modalView}>
                    <Text>{prompt}</Text>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={input => updateResponse(input)}
                            placeholder="Type Response Here!"
                            defaultValue={response}
                        />
                        <View>
                            <TouchableOpacity onPress={() => updatePrompt(prompt,response,navigation)}>
                                <Text>Add Prompt </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        <FlatList
            data={listOfPrompts}
            renderItem={this.renderItem}
        />
    </SafeAreaView>
    )
};

export default PromptView;