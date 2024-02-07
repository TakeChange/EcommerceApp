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
import AllProduct from '../screen/Main/AllProduct'
import ProductDetails from '../screen/Main/ProductDetails'
import ProductDescription from '../screen/Main/ProductDescription'
import AddReview from '../screen/Main/AddReview'
import Review from '../screen/Main/Review'
import AddNewCard from '../screen/AddNewCard'
import Address from '../screen/Address'
import NikeBrand from '../screen/Main/NikeBrand'
import { Card } from 'react-native-paper'

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
                <Stack.Screen
                    name="AllProduct"
                    component={AllProduct}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDescription"
                    component={ProductDescription}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Review"
                    component={Review}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddReview"
                    component={AddReview}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Address"
                    component={Address}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddNewCard"
                    component={AddNewCard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NikeBrand"
                    component={NikeBrand}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator