import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'

const AddReview = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 10 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                        <Image
                            source={require('../../asse/icon/back.png')}
                            style={{ width: 50, height: 50, }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: 'bold', textAlign: 'center', marginLeft: '25%' }}>Add Review</Text>
                    <Text></Text>
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}>Name</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Type your name'
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}>How was your experience ?</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Describe your experience?'
                        placeholderTextColor={'#8F959E'}
                        numberOfLines={10}

                    ></TextInput>
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}>Star</Text>

                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />

                </View>

            </View>
        </View>
    )
}

export default AddReview