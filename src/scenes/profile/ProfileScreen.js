import React from 'react';
import {SafeAreaView,View,Text, StyleSheet,ScrollView,Button} from 'react-native';
import {Profile_images} from '_organisms';
import {Divider,Avatar} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    peek: {
        alignItems: 'center',
        marginTop: 38,

    },
    story: {
        marginTop: 19,
        marginBottom: 19,
        alignItems:"center",
    },
    header: {
        marginBottom: 16,
        marginLeft: 13,
        marginRight:13,
    },
    images: {
        flex:1,
        marginTop:16,
        marginLeft:33,
        marginRight: 33,
        marginBottom:10,
        
    },
    prompt: {
        marginLeft:13,
        marginRight:13,
        marginTop: 9,
        marginBottom: 9,
    },
    prompt_title: {
        fontFamily: "Roboto",
        fontSize:18,
        fontWeight: "bold",

    },
    prompt_text: {
        width:380,
        height:66,
        borderRadius: 10,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        marginTop: 9,
    },
    info: {
        marginLeft: 19,
        marginBottom: 6,
        marginTop: 6,
        marginRight:19,
    },
    info_title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 18,
        color: "#C4C4C4"
    },
    info_text: {
        marginLeft:15,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        color: "#E5E5E5"
    },
    info_button: {
        marginLeft:7,
        borderRadius: 4,
        
    }
})


function ProfileScreen({navigation}){
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.peek}>
                            <Text>Peek Profile</Text>
                        </View>
                        <View style={styles.story}>
                        <Avatar
                            rounded
                            size="large"
                            overlayContainerStyle={{backgroundColor:'black'}}
                        />
                        </View>

                        <View style={styles.header}>
                            <Text>Jeff Dowyre, 26</Text>
                            <Text>Looking for some positive moments,adventurous and fun </Text>
                        </View>
                        <Divider/>
                        <View style={styles.images}>
                            <Profile_images/>
                        </View>
                        <View style={styles.prompt}>
                            <Text style={styles.prompt_title}>Prompts</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate("Prompt")}>
                                <View style={styles.prompt_text}>
                                    <Text>My Week usually goes like this....</Text>
                                </View>
                            </TouchableOpacity>
                               <TouchableOpacity onPress={ () => navigation.navigate("Prompt")}>
                                <View style={styles.prompt_text}>
                                    <Text>An irrational fear I have is....</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => navigation.navigate("Prompt")}>
                                <View style={styles.prompt_text}>
                                    <Text>I spend more time than I should doing this....</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>Job</Text>
                            <Text style={styles.info_text}>Add Job Title</Text>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>School</Text>
                            <Text style={styles.info_text}>Add School</Text>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>Location</Text>
                            <Text style={styles.info_text}>Location</Text>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>Gender</Text>
                            <Text style={styles.info_text}>Male</Text>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>Ethnicity</Text>
                            <Text style={styles.info_text}>Black/African American</Text>
                        </View>
                        <Divider/>
                        <View style={styles.info}>
                            <Text style={styles.info_title}>Linked Accounts</Text>
                            <Button title="Connect Your Instagram" style={styles.info_button} color="#D99202"/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
}


export default ProfileScreen