import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
// native base imports
import { Item, Icon } from "native-base";
import data from "../../../Countries";

//finalNumber = code + _phoneNumber
// Default render of country flag
const defaultFlag = data.filter((obj) => obj.name === "United States")[0].flag;
const defaultCountryCode = data.filter((obj) => obj.name === "United States")[0]
  .dial_code;

function NumberEntry({ _number, _setNumber, _editable }) {
  const [flag, setFlag] = React.useState(defaultFlag);
  const [code, setCode] = React.useState(defaultCountryCode);

  const [modalVisible, setVisibilty] = React.useState(false);

  function showModal() {
    setVisibilty(true);
  }

  function hideModal() {
    setVisibilty(false);
  }

  async function selectCountry(country) {
    // Get data from Countries.js
    const countryData = await data;
    try {
      // Get the country code
      const countryCode = await countryData.filter(
        (obj) => obj.name === country
      )[0].dial_code;
      // Get the country flag
      const countryFlag = await countryData.filter(
        (obj) => obj.name === country
      )[0].flag;
      // Update the state then hide the Modal
      setCode(countryCode);
      setFlag(countryFlag);
      await hideModal();
    } catch (err) {
      console.log(err);
    }
  }
  const countryData = data;
  return (
    <Item rounded style={styles.itemStyle}>
      <View>
        <Text style={{ fontSize: 30, left: 15 }}>{flag}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, left: 20 }}>{code}</Text>
      </View>
      <Icon
        active
        name="md-arrow-dropdown"
        style={[styles.iconStyle, { left: 5 }]}
        onPress={showModal}
      />
      <TextInput
        placeholder="+44766554433"
        keyboardType={"numeric"}
        returnKeyType="done"
        style={styles.inputStyle}
        onChangeText={(_number) => _setNumber(code + _number)}
        editable={_editable}
        autoFocus={true}
      />
      {/* Modal for country code and flag */}

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 7, marginTop: 80 }}>
            {/* Render the list of countries */}
            <FlatList
              data={countryData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => selectCountry(item.name)}
                >
                  <View style={styles.countryStyle}>
                    <Text style={styles.textStyle}>
                      {item.flag} {item.name} ({item.dial_code})
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
          <TouchableOpacity onPress={hideModal} style={styles.closeButtonStyle}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Item>
  );
}

// for the number input, I need to set up 4 props
// -prop for autoFocus
// -prop for editable
// -prop for onchange text (the actual text and getting the data of the text)
export default NumberEntry;

NumberEntry.propTypes = {
  _number: PropTypes.string,
  _setNumber: PropTypes.func,
  _placeHolder: PropTypes.string,
  _editable: PropTypes.bool,
};

const styles = StyleSheet.create({
  iconStyle: {
    color: "#000000",
    fontSize: 28,
    marginLeft: 15,
  },
  itemStyle: {
    alignSelf: "center",
    marginTop: 30,
    position: "relative",
    //top: 130,

    //backgroundColor: "purple",
    //marginBottom: 10,
  },
  inputStyle: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    height: 60,
    width: 225,
    textAlign: "left",
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  countryStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#211f",
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 0.5,
    padding: 12,
    borderTopWidth: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
