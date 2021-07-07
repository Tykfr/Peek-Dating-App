import styles from "./ProfileStyles";
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Button,
    ActivityIndicator,
  } from "react-native";
  import { Profile_images } from "_organisms";
  import { Divider, Avatar } from "react-native-elements";
  import { TouchableOpacity } from "react-native-gesture-handler";

const _SettingsHandler = (navigation) => {
    navigation.navigate("SettingsNavigator");
  };
const Prompt = ({prompt,response,navigation}) => {
  
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Prompt", {prompt: prompt})}>
      <View style={styles.prompt_text}>
        <Text>{prompt}</Text>
        <Text>{response}</Text>
      </View>
      </TouchableOpacity> 
    </View>
  )
}

const ProfileView = (props) => {
    const { name,age,bio,pictures,prompts,job,school,ethnicity,location,gender,isloading,loaded,navigation} = props 
    return (
        <SafeAreaView>
        { isloading && 
          <View>
            <ActivityIndicator/>
          </View>
        }
        {loaded &&
         <ScrollView>
          <View style={styles.container}>
            <View style={styles.peek}>
              <Text>Peek Profile</Text>
            </View>
            <View style={styles.story}>
              <Avatar
                rounded
                size="large"
                overlayContainerStyle={{ backgroundColor: "black" }}
              />
            </View>

            <View style={styles.header}>
              <Text>{name}, {age}</Text>
              <Text>{bio}</Text>
            </View>
            <Divider />
            <View style={styles.images}>
              <Profile_images 
                imagesUrl={pictures}
              />
            </View>
            <View style={styles.prompt}>
            <Text style={styles.prompt_title}>Prompts</Text>
            
            {Object.keys(prompts).map(key => (
              <Prompt 
                prompt={key}
                response={prompts[key]}
                navigation={navigation}
              /> 
            ))}
            {Object.keys(prompts).length < 3 && <Prompt prompt={"Add Prompt"} response={""} navigation={navigation}/>}
            </View>

            <Divider/>
            <View style={styles.info}>
              <Text style={styles.info_title}>Job</Text>
              <Text style={styles.info_text}>{job}</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>School</Text>
              <Text style={styles.info_text}>{school}</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Location</Text>
              <Text style={styles.info_text}>{location}</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Gender</Text>
              <Text style={styles.info_text}>{gender}</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Ethnicity</Text>
              <Text style={styles.info_text}>{ethnicity}</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Linked Accounts</Text>
              <Button
                title="Connect Your Instagram"
                style={styles.info_button}
                color="#D99202"
              />
            </View>
          </View>
          <View>
            <Button
              title={"Settings"}
              onPress={() => _SettingsHandler(navigation)}
            />
          </View>
        </ScrollView>
        }
        </SafeAreaView>
    )
}

export default ProfileView;