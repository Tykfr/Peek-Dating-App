import React from 'react';
import {ProfileScreen} from '_scenes/profile';
import {createStackNavigator} from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

function ProfileStackScreen(){
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
              name="ProfileScreen"
              component={ProfileScreen} 
            />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;