import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../screen/SplashScreen'
import DrawerNavigation from './DrawerNavigation'
import FirstScreen from '../screen/FirstScreen'
import LoginOption from '../screen/LoginOption'
import SignIn from '../screen/SignIn'
import SignUp from '../screen/SignUp'

const Demo = () => {
    return (
        <View>
            <Text>THis is demo screen</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='DrawerNavigation'
                    component={DrawerNavigation}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="LoginOption"
                    component={LoginOption}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator