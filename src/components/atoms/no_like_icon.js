import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {Queue} from "_dataStructures";

function No_Like_Icon({ setNextUserID, userProfileTable, setNextProfile, dislikesFunc, queue }) {
  return (
    <View style={{ justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          queue.dequeue();
          setNextUserID(queue.peek());
          setNextProfile(userProfileTable[queue.peek()]);
          dislikesFunc();
        }}
      >
        <Icon
          color="#DB6868"
          type="material-community"
          name="thumb-down"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
}

export default No_Like_Icon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
