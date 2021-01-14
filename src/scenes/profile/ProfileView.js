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

const Prompt = ({prompt,navigation}) => {
  
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Prompt")}>
      <View style={styles.prompt_text}>
        <Text>{prompt[0]}</Text>
        <Text>{prompt[1]}</Text>
      </View>
      </TouchableOpacity> 
    </View>
  )
}

const ProfileView = (props) => {
    const { prompts,isloading,loaded,navigation} = props 
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
              <Text>Jeff Dowyre, 26</Text>
            </View>
            <Divider />
            <View style={styles.images}>
              <Profile_images/>
            </View>
            <View style={styles.prompt}>
            <Text style={styles.prompt_title}>Prompts</Text>
            
            {prompts.map(prompt => (
              <Prompt 
                prompt={prompt}
                navigation={navigation}
              /> 
            ))}
            {prompts.length < 3 && <Prompt prompt={["Add Prompt",""]} navigation={navigation}/>}
            </View>

            <Divider/>
            <View style={styles.info}>
              <Text style={styles.info_title}>Job</Text>
              <Text style={styles.info_text}>Add Job Title</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>School</Text>
              <Text style={styles.info_text}>Add School</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Location</Text>
              <Text style={styles.info_text}>Location</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Gender</Text>
              <Text style={styles.info_text}>Male</Text>
            </View>
            <Divider />
            <View style={styles.info}>
              <Text style={styles.info_title}>Ethnicity</Text>
              <Text style={styles.info_text}>Black/African American</Text>
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
        </ScrollView>
        }
        </SafeAreaView>
    )
}

export default ProfileView;