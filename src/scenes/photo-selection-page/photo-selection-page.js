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

function PhotoSelectionPage({ navigation, route }) {
  const [largeImage, setLargeImage] = React.useState();
  console.log("LargeImage: " + largeImage);
  const [mediumImageOne, setMediumImageOne] = React.useState();
  const [mediumImageTwo, setMediumImageTwo] = React.useState();

  const [smallImageOne, setSmallImageOne] = React.useState();
  const [smallImageTwo, setSmallImageTwo] = React.useState();
  const [smallImageThree, setSmallImageThree] = React.useState();
  const _promptHander = () => {
    console.log(largeImage);
    console.log(mediumImageOne);
    console.log(mediumImageTwo);
    console.log(smallImageOne);
    console.log(smallImageTwo);
    console.log(smallImageThree);
  };
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
          <LargePhotoInput _image={largeImage} _setImage={setLargeImage} />
          <View>
            {/* Medium Photo selection 1 */}
            <View style={{ marginBottom: 12 }}>
              <MediumPhotoInput
                _image={mediumImageOne}
                _setImage={() => setMediumImageOne()}
              />
            </View>
            {/* Medium Photo selection 2 */}
            <View style={{ marginBottom: 12 }}>
              <MediumPhotoInput
                _image={mediumImageTwo}
                _setImage={() => setMediumImageTwo()}
              />
            </View>
          </View>
        </View>
        <View style={styles.smallPhotoLayoutContainer}>
          <SmallPhotoInput
            _image={smallImageOne}
            _setImage={() => setSmallImageOne()}
          />
          <SmallPhotoInput
            _image={smallImageTwo}
            _setImage={() => setSmallImageTwo()}
          />
          <SmallPhotoInput
            _image={smallImageThree}
            _setImage={() => setSmallImageThree()}
          />
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton
          _onPress={_promptHander}
          _disabled={
            !(
              largeImage &
              mediumImageOne &
              mediumImageTwo &
              smallImageOne &
              smallImageTwo &
              smallImageThree
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
