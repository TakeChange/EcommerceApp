import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native';
const Address = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 15 }}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../asse/icon/back.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: 'bold', textAlign: 'center', }}>Address</Text>
                    <Text></Text>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                    >Name</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Mrh Raju'>
                    </TextInput>
                </View>

                <View style={{ marginTop: '5%', flexDirection: 'row' }}>
                    <View style={{
                        marginRight: '10%',
                        width: '45%'
                    }}>
                        <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                        >Country</Text>
                        <TextInput
                            style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                            placeholder='Bangladesh'>
                        </TextInput>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                        >City</Text>
                        <TextInput
                            style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                            placeholder='Sylhet'>
                        </TextInput>
                    </View>
                </View>


                <View style={{ marginTop: '5%', }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                    >Phone Number</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='+880 1453-987533'>
                    </TextInput>
                </View>

                <View style={{ marginTop: '5%', }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                    >Address</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Chhatak, Sunamgonj 12/8AB'>
                    </TextInput>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '6%' }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#1D1E20',
                        fontWeight: 'bold',
                        marginTop: '5%'
                    }}>
                        Save as primary address
                    </Text>

                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor="green"
                        offColor="#D6D6D6"
                        size="small"
                        onToggle={toggleSwitch}
                    />
                </View>
                <View >

                    <TouchableOpacity style={styles.bottomButton} >
                        <Text style={styles.saveText}>Save Address</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )
}

export default Address
const styles = StyleSheet.create({

    saveText: {
        textAlign: 'center',
        color: '#FEFEFE',
        fontSize: 15,
        fontWeight: '500'
    },
    bottomButton: {
        padding: 12,
        backgroundColor: '#9775FA',
        marginTop: '40%',
        borderRadius: 10,
        justifyContent: 'center'
    }
})