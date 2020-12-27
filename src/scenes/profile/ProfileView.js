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


const ProfileView = (props) => {
    const {datasource,isloading,loaded,navigation} = props 
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
              <Text>
                {datasource}
              </Text>
            </View>
            <Divider />
            <View style={styles.images}>
              <Profile_images />
            </View>
            <View style={styles.prompt}>
              <Text style={styles.prompt_title}>Prompts</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Prompt")}>
                <View style={styles.prompt_text}>
                  <Text>My Week usually goes like this....</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Prompt")}>
                <View style={styles.prompt_text}>
                  <Text>An irrational fear I have is....</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Prompt")}>
                <View style={styles.prompt_text}>
                  <Text>I spend more time than I should doing this....</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Divider />
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