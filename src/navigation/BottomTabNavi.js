import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/Main/HomeScreen';
import Wishlist from '../screen/Main/Wishlist';
import Order from '../screen/Main/Cart';
import MyCards from '../screen/Main/MyCards';

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    //borderRadius: 15,
                    height: '8%',
                    ...styles.shadow
                }
            }}

        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {focused ?
                                <Text style={{ fontSize: 12, color: '#9775FA', fontWeight: '700' }}>Home</Text>
                                :
                                <Image
                                    source={require('../asse/icon/home1.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            }
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {focused ?
                                <Text style={{ fontSize: 12, color: '#9775FA', fontWeight: '700' }}>Wishlist</Text>
                                :
                                <Image
                                    source={require('../asse/icon/heart1.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            }
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {focused ?
                                <Text style={{ fontSize: 12, color: '#9775FA', fontWeight: '700' }}>Cart</Text>
                                :
                                <Image
                                    source={require('../asse/icon/bag.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            }
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="MyCard"
                component={MyCards}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {focused ?
                                <Text style={{ fontSize: 12, color: '#9775FA', fontWeight: '700' }}>MyCard</Text>
                                :
                                <Image
                                    source={require('../asse/icon/pocket.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            }
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavi


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',

        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})