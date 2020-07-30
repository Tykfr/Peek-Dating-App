import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
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

async function submitData(userData) {
  await fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/newUser.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: userData[0].phoneNumber,
        name: userData[1].name,
        email: userData[2].email,
        birthYear: userData[3].birthYear,
        birthDay: userData[4].birthDay,
        birthMonth: userData[5].birthMonth,
        birthDay: userData[6].birthDay,
        genderResult: userData[7].genderResult,
        interestSelection: userData[8].interestSelection,
        school: userData[9].school,
        policitalParty: userData[10].policitalParty,
        religion: userData[11].religion,
        ethnicity: userData[12].ethnicity,
        occupation: userData[13].occupation,
        latitude: userData[14].location.latitude,
        longitude: userData[14].location.longitude,
        city_state: userData[15].city_state,
        bio: userData[16].bio,
        largeImage: userData[17].largeImage,
        mediumImageOne: userData[18].mediumImageOne,
        mediumImageTwo: userData[19].mediumImageTwo,
        smallImageOne: userData[20].smallImageOne,
        smallImageTwo: userData[21].smallImageTwo,
        smallImageThree: userData[22].smallImageThree,
      }),
    }
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}

function PhotoSelectionPage({ navigation, route }) {
  const { userData } = route.params;
  const [largeImage, setLargeImage] = React.useState(null);
  const [mediumImageOne, setMediumImageOne] = React.useState(null);
  const [mediumImageTwo, setMediumImageTwo] = React.useState(null);
  const [smallImageOne, setSmallImageOne] = React.useState(null);
  const [smallImageTwo, setSmallImageTwo] = React.useState(null);
  const [smallImageThree, setSmallImageThree] = React.useState(null);
  const _promptHander = () => {
    userData.push(
      { largeImage: largeImage },
      { mediumImageOne: mediumImageOne },
      { mediumImageTwo: mediumImageTwo },
      { smallImageOne: smallImageOne },
      { smallImageTwo: smallImageTwo },
      { smallImageThree: smallImageThree }
    );

    submitData(userData);
    // navigation.navigate("CompletePage", {
    //   userData: userData,
    // });
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
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        setImage(result.base64);
      }
    } catch (E) {
      console.log(E);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
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
    // backgroundColor: "grey",
  },
  continueButtonContainer: {
    // backgroundColor: "blue",
    marginBottom: 40,
  },
  titleContainer: {
    // backgroundColor: "green",
    marginLeft: 16,
    marginBottom: 20,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
    // backgroundColor: "orange",
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
