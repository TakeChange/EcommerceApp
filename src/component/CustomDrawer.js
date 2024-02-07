import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import ToggleSwitch from 'toggle-switch-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {
    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        check();
      })
    
      const check = async () => {
        try {
          var uname = await AsyncStorage.getItem('uname');
          setUser(uname);
        }
        catch (e) {
          console.log(e)
        }
      }
    

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const logout = async()=>{
        try
        {
            await AsyncStorage.setItem('login','no');
            navigation.navigate('SignIn');
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: 'white', margin: 15 }}>
                <View>
                    <TouchableOpacity style={styles.closeButton} onPress={() => navigation.closeDrawer()}>
                        <Image
                            source={require('../assets/icon/CloseDrawer.png')}
                            style={styles.closeImage}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                    <View>
                        <Image
                            source={require('../assets/images/user-profile.jpg')}
                            style={{ height: 50, width: 50, borderRadius: 50, marginTop: '20%' }}
                        />
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 18,
                                fontFamily: 'Roboto-Medium',
                                marginBottom: 5,
                                fontWeight: 'bold'
                            }}>
                            {user}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontFamily: 'Roboto-Regular',

                                }}>
                                Verified Profile
                            </Text>
                            <Image
                                source={require('../assets/images/confirm.png')}
                                style={{ height: 20, width: 20, borderRadius: 20 }}
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5', borderRadius: 5 }}>
                            <Text style={{ color: '#8F959E', fontSize: 13, padding: 8 }}>3 Orders</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', margin: '6%', marginTop: '14%', alignItems: 'center', }}>
                        <Image
                            source={require('../assets/icon/dark.png')}
                            style={{ width: 25, height: 25 }}
                        />
                        <Text style={{ fontSize: 15, color: '#1D1E20', marginLeft: '6%' }}>Dark Mode</Text>
                        <ToggleSwitch
                            isOn={isEnabled}
                            onColor="green"
                            offColor="#D6D6D6"
                            size="small"
                            onToggle={toggleSwitch}
                            style={{ marginLeft: '33%' }}
                        />
                    </View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20}}>

                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={logout}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '10%' }}>
                        <Ionicons name="exit-outline" size={22} color='#FF5757' />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 8,
                                color: '#FF5757'
                            }}>
                           Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    closeImage: {
        width: 50,
        height: 50
    },
    closeButton: {
        width: '20%',
        borderRadius: 25
    }
})