import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import {Camera} from 'expo-camera';
import {Profile_button,Heart_button,Chat_button,Match_button,Flip_button} from '_atoms';

function App(){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    
    <View style={{ flex: 1 }}>
      
      <Camera style={{ flex: 1 }} type={type}>
      <Chat_button/>
      <Match_button/>
      <Profile_button/>
      <Heart_button/>
      
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            
            <Flip_button/>
          </TouchableOpacity>
        </View>
      </Camera>
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