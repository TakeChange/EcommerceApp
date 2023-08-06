import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavi from './BottomTabNavi';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomTabNavi}
        options={{headerShown:false}}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation