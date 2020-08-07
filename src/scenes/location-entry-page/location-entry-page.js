import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  ContinueButton,
  InvertedLogo,
  OnboardingTitle,
  InfoText,
} from "_atoms";
import * as Location from "expo-location";
function LocationEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [location, setLocation] = React.useState({});
  const [city_state, setCityState] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const _bioEntryPageHandler = () => {
    userData.longitude = location.longitude;
    userData.latitude = location.latitude;
    userData.city_state = city_state;
    navigation.navigate("BioEntryPage", {
      userData: userData,
    });
  };

  async function getLocation() {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("PERMISSION NOT GRANTED!");
    }
    const location = await Location.getCurrentPositionAsync();

    const coordinates = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    await setLocation(coordinates);

    const city_state = await Location.reverseGeocodeAsync(coordinates);
    await setCityState(city_state[0].city + ", " + city_state[0].region);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <InvertedLogo />
        </View>
        {/* Title Container */}
        <View style={styles.titleContainer}>
          <OnboardingTitle description={"Where do you live ?"} />
        </View>
      </View>
      {/* Location Container */}
      <View style={{ width: "100%", marginBottom: 50 }}>
        <View style={{ alignSelf: "center", marginBottom: 70 }}>
          <TouchableOpacity
            style={styles.getLocationButton}
            onPress={() => getLocation()}
          >
            <Text style={styles.locationButtonTextStyle}>Get Location</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ alignSelf: "center", fontSize: 25 }}>
            {city_state}
          </Text>
        </View>
        {/* Text Display Line  */}
        <View style={styles.textDisplayLineStyle} />
        <View style={{ alignSelf: "center" }}>
          <InfoText description={"Location is required to use this app."} />
        </View>
      </View>

      {/* Continue button container */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton
          _onPress={() => _bioEntryPageHandler()}
          _disable={!city_state}
        />
      </View>
    </SafeAreaView>
  );
}

export default LocationEntryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  continueButtonContainer: {
    marginBottom: 40,
  },
  titleContainer: {
    marginLeft: 16,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
  getLocationButton: {
    borderWidth: 3,
    borderRadius: 33,
    borderColor: "#D99202",
    backgroundColor: "#D99202",
    width: 170,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  locationButtonTextStyle: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
  textDisplayLineStyle: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
    width: "80%",
  },
});
