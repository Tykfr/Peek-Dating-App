import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SplashScreen} from "_scenes/splash";
import {SignUpNavigator, MainNavigation} from "_navigations"

const Stack = createStackNavigator();

function SplashNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
                <Stack.Screen name={"SplashScreen"} component={SplashScreen}/>
                <Stack.Screen name ={"SignUpNavigator"} component={SignUpNavigator}/>
                <Stack.Screen name ={"MainNavigation"} component={MainNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SplashNavigator;