import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
const Payment = () => {
    const card = [
        {
            image: require('../asse/images/visacard1.png')
        },
        {
            image: require('../asse/images/visacard2.png')
        }
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={{}}>
                <Image
                    source={item.image}
                    style={{ width: 310,margin:5, height: 230, resizeMode: 'contain', }}
                />
            </View>
        )
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 50 / 2 }}>
                        <Image
                            source={require('../asse/icon/back.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 18, marginLeft: '23%'}}> Payment</Text>
                </View>
                <View >
                    <FlatList
                        data={card}
                        renderItem={renderItem}
                        //  keyExtractor={(item) => item.id}
                       
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F2FF', borderColor: '#9775FA', borderWidth: 2, borderRadius: 10, padding: 12 }}>
                        <Image
                            source={require('../../src/asse/icon/add.jpg')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ color: '#9775FA', fontSize: 14, fontWeight: '500' }}> Add new card</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: '8%' }}>
                    <Text style={{ fontSize: 16, color: '#1D1E20', fontWeight: 'bold', }}>Card Owner</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '2%', borderRadius: 10, }}
                        placeholder=' Mrh Raju '
                        placeholderTextColor={'#8F959E'}
                       
                    ></TextInput>
                </View>

                <View style={{ marginTop: '5%' }}>
                    <Text style={{ fontSize: 16, color: '#1D1E20', fontWeight: 'bold' }}>Card Number</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '2%', borderRadius: 10 }}
                        placeholder=' 5254 7634 8734 7690 '
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>
                <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, color: '#1D1E20', fontWeight: 'bold' }}>EXP</Text>
                    <Text style={{ width: '47%', fontSize: 16, color: '#1D1E20', fontWeight: 'bold' }}>CVV</Text>

                </View>

                <View style={{ marginTop: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', borderRadius: 10, width: '47%', }}
                        placeholder=' 24/24'
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', borderRadius: 10, width: '48%', }}
                        placeholder=' 7763'
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#1D1E20',
                        fontWeight: 'bold',
                        
                    }}>
                        Save Card info
                    </Text>

                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor="green"
                        offColor="#D6D6D6"
                        size='medium'
                        onToggle={toggleSwitch}
                    />
                </View>
                <View >

                    <TouchableOpacity style={styles.bottomButton} >
                        <Text style={styles.saveText}>Save Card</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    bottomButton: {
        padding: 12,
        backgroundColor: '#9775FA',
        marginTop: '5%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    saveText: {
        textAlign: 'center',
        color: '#FEFEFE',
        fontSize: 15,
        fontWeight: '500'
    },
})