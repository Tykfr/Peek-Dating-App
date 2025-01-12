import React, {useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import {
  OnboardingTitle,
  InvertedLogo,
  ContinueButton,
  LargePhotoInput,
  MediumPhotoInput,
  SmallPhotoInput,
} from "_atoms";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//array that keeps hold of image uri's, must be kept global
const img_array  = [];
function PhotoSelectionPage({ navigation, route }) {
  const { userData } = route.params;
  const [largeImage, setLargeImage] = React.useState("");
  const [mediumImageOne, setMediumImageOne] = React.useState("");
  const [mediumImageTwo, setMediumImageTwo] = React.useState("");
  const [smallImageOne, setSmallImageOne] = React.useState("");
  const [smallImageTwo, setSmallImageTwo] = React.useState("");
  const [smallImageThree, setSmallImageThree] = React.useState("");

  const _promptHander = () => {
    userData.img_array = img_array;
    navigation.navigate("PromptEntryPage", {
      userData: userData,
    });
  };
  async function getPermissionAsync(setImage) {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        await _pickImage(setImage);
      }
    }
  }
  async function _pickImage(setImage) {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
        base64:true
      });
      if (!result.cancelled) {
        setImage(result.base64);
        img_array.push(result.uri);

      }
    } catch (E) {
      console.log(E);
    }
  }

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ width: "100%", flexShrink: 1 }}>
        <View style={styles.logoContainer}>
          <InvertedLogo />
        </View>
        <View style={styles.titleContainer}>
          <OnboardingTitle description={"Select photos for your profile"} />
        </View>
        <View style={styles.largePhotoLayoutContainer}>
          {/* Large Photo selection */}
          <LargePhotoInput
            _image={largeImage}
            _getPermissionAsync={() => getPermissionAsync(setLargeImage)}
          />
          <View>
            {/* Medium Photo selection 1 */}
            <View style={{ marginBottom: 12 }}>
              <MediumPhotoInput
                _image={mediumImageOne}
                _getPermissionAsync={() =>
                  getPermissionAsync(setMediumImageOne)
                }
              />
            </View>
            {/* Medium Photo selection 2 */}
            <View style={{ marginBottom: 12 }}>
              <MediumPhotoInput
                _image={mediumImageTwo}
                _getPermissionAsync={() =>
                  getPermissionAsync(setMediumImageTwo)
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.smallPhotoLayoutContainer}>
          <SmallPhotoInput
            _image={smallImageOne}
            _getPermissionAsync={() => getPermissionAsync(setSmallImageOne)}
          />
          <SmallPhotoInput
            _image={smallImageTwo}
            _getPermissionAsync={() => getPermissionAsync(setSmallImageTwo)}
          />
          <SmallPhotoInput
            _image={smallImageThree}
            _getPermissionAsync={() => getPermissionAsync(setSmallImageThree)}
          />
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton
          _onPress={_promptHander}
          _disabled={
            !(
              !!largeImage &
              !!mediumImageOne &
              !!mediumImageTwo &
              !!smallImageOne &
              !!smallImageTwo &
              !!smallImageThree
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default PhotoSelectionPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#FFFFFF"
  },
  continueButtonContainer: {
    marginBottom: 40,
  },
  titleContainer: {
    marginLeft: 16,
    marginBottom: 20,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },

  smallPhotoLayoutContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  largePhotoLayoutContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});