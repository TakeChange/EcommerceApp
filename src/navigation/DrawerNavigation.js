import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavi from './BottomTabNavi';
import CustomDrawer from '../component/CustomDrawer';
import Password from '../screen/Password';
import MyCards from '../screen/Main/MyCards';
import Order from '../screen/Main/Cart';
import Wishlist from '../screen/Main/Wishlist';
import Setting from '../screen/Setting';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>

      <Drawer.Screen
        name="AccountInformation"
        component={BottomTabNavi}
        options={{
          headerShown: false,
          title: 'Account Information',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/about.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Password"
        component={Password}
        options={{
          headerShown: false,
          title: 'Password',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/lock.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
          title: 'Order',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/bag.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MyCards"
        component={MyCards}
        options={{
          headerShown: false,
          title: 'MyCards',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/pocket.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          title: 'Wishlist',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/heart1.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          title: 'Setting',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/icon/setting1.png')}
              style={{ height: 25, width: 25, marginRight: -20 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation