import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

const AddReview = ({ navigation }) => {

    const [val,setVal] = useState(0.0)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 10 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                        <Image
                            source={require('../../assets/icon/back.png')}
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
                    <View style={{flexDirection:'row',marginTop:'5%',alignItems:'center'}}>
                    <Text style={{color:'#1D1E20',fontSize:14,fontWeight:'800'}}>0.0</Text>
                    <Slider
                        style={{ width: '85%', height: 40 }}
                        minimumValue={0}
                        maximumValue={5}
                        minimumTrackTintColor="#000"
                        maximumTrackTintColor="#000000"
                        onValueChange={value=>setVal(value)}
                        thumbTintColor='#9775FA'
                    />
                    <Text style={{color:'#1D1E20',fontSize:14,fontWeight:'800'}}>{val.toFixed(1)}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.bottomButton}
                  onPress={()=>navigation.navigate('Cart')}>
                    <Text style={styles.NewAcc}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddReview

const styles = StyleSheet.create({
    bottomButton: {
        height: '8%',
        backgroundColor: '#9775FA',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: '18%',
        width: '100%',
        marginBottom: '5%'
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    }
})