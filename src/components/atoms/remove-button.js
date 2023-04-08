import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage, ref } from "firebase/storage";


const Remove_button = ({id}) => {
    const [isModalVisible,setModalVisible] = useState(false);

    const remove_image = async (id) => {
        let userID = await AsyncStorage.getItem("userID")
        const storage = getStorage();
        let imageRef = ref(storage, "user_images/" + "user_" + userID + "/img_" + id);
        imageRef
        .delete()
        .then(() => {
        console.log(`Image ${id} has been deleted successfully.`);
        })
        .catch((e) => console.log('error on image deletion => ', e));
    }
   return(
   <View>
        <Icon 
        name="cancel"
        type="material"
        color="#FFFFFF"
        size={15}
        containerStyle={styles.container}
        onPress={() => setModalVisible(true)}
        />
        <View style={styles.centeredView}>
            <Modal 
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            >
            
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure you want to delete this photo?</Text>
                    <View>
                        <TouchableOpacity style={styles.openButton} onPress={() => remove_image(id)}>
                            <Text style={styles.modalText}>OK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.modalText}>Cancel</Text>
                        </TouchableOpacity>
                        
                    </View>
              

                </View>
            
            </Modal>
        </View>

    </View>
   )

};

export default Remove_button;

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
      openButton: {
        backgroundColor: "green",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      cancelButton: {
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        padding:10,
      },
      ok: {
          backgroundColor:"green",
      },
      cancel: {
        backgroundColor:"red",
      }
});