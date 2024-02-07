import { ImageBackground, StyleSheet, Text, ScrollView, Image, TouchableOpacity,View, TextInput, } from 'react-native'
import React from 'react'

const AddNewCard = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 15, }}>

                <View style={{ width: '75%', flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
                        <View style={{ justifyContent: 'space-around' }}>
                            <Image
                                source={require('../assets/icon/BackImg.png')}
                                style={{ width: 50, height: 50,borderRadius:50}}
                            />

                        </View>
                    </TouchableOpacity>
                    <Text style={styles.headerName}>Add New Card</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/card1.png')}
                        style={{ width: 103, height: 52, }}
                    />
                    <Image
                        source={require('../assets/images/card2.png')}
                        style={{ width: 103, height: 55, borderRadius: 8 }}
                    />
                    <Image
                        source={require('../assets/images/card3.png')}
                        style={{ width: 103, height: 55, borderRadius: 8 }}
                    />
                </View>
                <View style={{ marginTop: '8%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: 'bold', }}>Card Owner</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '2%', borderRadius: 10, }}
                        placeholder=' Mrh Raju '
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>

                <View style={{ marginTop: '5%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: 'bold' }}>Card Number</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '2%', borderRadius: 10 }}
                        placeholder=' 5254 7634 8734 7690 '
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>
                <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: 'bold' }}>EXP</Text>
                    <Text style={{ width: '47%', fontSize: 17, color: '#1D1E20', fontWeight: 'bold' }}>CVV</Text>

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

                <TouchableOpacity style={styles.bottomButton}
                onPress={()=>navigation.navigate('Payment')}>
                    <Text style={styles.NewAcc}>Add Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddNewCard

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerName: {
        alignItems: 'center',
        fontSize: 20,
        color: '#1D1E20',
        fontWeight: '900',
        marginTop: '5%',
    },
    bottomButton: {
        padding: 12,
        backgroundColor: '#9775FA',
        marginTop: '65%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    },
})