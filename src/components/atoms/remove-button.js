import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
const remove = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    }
});

const Remove_button = ({name,id}) => {
    const [isModalVisible,setModalVisible] = useState(false);
   return(
   <View>
        <Icon 
        name="cancel"
        type="material"
        color="#FFFFFF"
        size={15}
        containerStyle={remove.container}
        onPress={() => setModalVisible(true)}
    />
        <Modal 
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        >
        
            <View>
                <Text>Are you sure you want to delete this {name}?</Text>
                <TouchableHighlight>
                    <Text>OK</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Cancel</Text>
                </TouchableHighlight>

            </View>
        
        </Modal>
    </View>
   )

}

export default Remove_button;