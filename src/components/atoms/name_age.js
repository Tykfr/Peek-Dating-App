import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import AppLoading from 'expo-app-loading';

function Name_Age({_name, _age}){

        return(
            <Text style={styles.text_style}>
               {_name}, {_age}
            </Text>
        )
    }



export default Name_Age;
Name_Age.propTypes = {
  _name: PropTypes.string,
  _age: PropTypes.number
};

const styles = StyleSheet.create({
    
    text_style:{
        // fontFamily:"Nunito_700Bold",
        fontSize:23, 
    }
})

