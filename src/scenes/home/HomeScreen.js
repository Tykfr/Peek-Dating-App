import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import {
  Profile_button,
  Heart_button,
  Chat_button,
  Match_button,
  Flip_button,
} from "_atoms";

function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#000000" }}>
      <StatusBar barStyle="light-content"/>
      <Camera style={styles.cameraStyle} type={type}>
        <View style={styles.profileButton_HeartButton_Container}>
          <Profile_button navigation={navigation} />
          <Heart_button />
        </View>

        <View style={{ width: "100%" }}>
          <View style={styles.flipButtonContainer}>
            <TouchableOpacity
              style={styles.flipButtonStyle}
              onPress={() =>
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )
              }
            >
              <Flip_button />
            </TouchableOpacity>
          </View>

          <View style={styles.chatButton_MatchButton_Container}>
            <Chat_button />
            <Match_button navigation={navigation} />
          </View>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = {
  profileButton_HeartButton_Container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cameraStyle: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatButton_MatchButton_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  flipButtonContainer: {
    alignSelf: "flex-start",
    marginLeft: 25,
    marginBottom: 30,
  },
  flipButtonStyle: {
    alignSelf: "flex-start",
  },
};
