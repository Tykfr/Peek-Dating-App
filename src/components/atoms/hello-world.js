import React from 'react';
import { Text,StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    basic: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    }
});

const HelloWorld = ({name}) => <Text style={styles.basic}>Hello World {name}!</Text>;

export default HelloWorld;