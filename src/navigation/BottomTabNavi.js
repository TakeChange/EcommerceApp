import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FirstScreen from '../screen/FirstScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="First Screen"
                component={FirstScreen}
                options={{headerShown:false}}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavi