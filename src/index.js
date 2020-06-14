import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {HelloWorld} from '_atoms';


function App(){
    return (
        <View style={styles.container}>
        <HelloWorld name="Winston Mills"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;