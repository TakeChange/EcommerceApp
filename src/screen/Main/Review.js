import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'


const Review = ({ route, navigation }) => {
    const [data, setData] = useState([])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 15 }}>

                <View style={{ width: '65%', flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between',alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image
                            source={require('../../assets/icon/back.png')}
                            style={{ width: 50, height: 50, }}
                        />

                    </TouchableOpacity>
                    <Text style={styles.headerName}>Reviews</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '5%', padding: '2%' }}>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: '900', color: 'black' }}>245 Reviews</Text>


                    <TouchableOpacity onPress={() => navigation.navigate('AddReview')}>
                        <Image
                            source={require('../../assets/images/addReview.png')}
                            style={{ width: 120, height: 40, borderRadius: 8, }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '4%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '5%' }}>
                        <Image
                            source={require('../../assets/images/manImg.png')}
                            style={{ height: 50, width: 50, borderRadius: 50, marginTop: '20%' }}
                        />
                    </View>

                    <View style={{ padding: 10, width: '60%' }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold',
                               
                            }}>
                            Jenny Wilson
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/icon/watch.png')}
                                style={{ width: 15, height: 15, marginTop: 2 }}
                            />
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontFamily: 'Roboto-Regular',
                                    fontWeight: '900',
                                   
                                }}>
                                13 Sep, 2020
                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 8, }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',

                            }}>4.8
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight: 'normal',
                                }}
                            > rating</Text>
                        </Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/star.png')}
                                style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>



                <View style={{ flexDirection: 'row', marginTop: '4%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '5%' }}>
                        <Image
                            source={require('../../assets/images/ReviewImage/r1.png')}
                            style={{ height: 50, width: 50, borderRadius: 50, marginTop: '20%' }}
                        />
                    </View>

                    <View style={{ padding: 10, width: '60%' }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                            Ronald Richards
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/icon/watch.png')}
                                style={{ width: 15, height: 15, marginTop: 2 }}
                            />
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontFamily: 'Roboto-Regular',
                                    fontWeight: '800',
                                   
                                }}>
                                13 sep, 2020
                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 8, }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',

                            }}>4.8
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight: 'normal',
                                }}
                            > rating</Text>
                        </Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/star.png')}
                                style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>


                <View style={{ flexDirection: 'row', marginTop: '4%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '5%' }}>
                        <Image
                            source={require('../../assets/images/ReviewImage/r2.png')}
                            style={{ height: 50, width: 50, borderRadius: 50, marginTop: '20%' }}
                        />
                    </View>

                    <View style={{ padding: 10, width: '60%' }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                           Guy Hawkins
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/icon/watch.png')}
                                style={{ width: 15, height: 15, marginTop: 2 }}
                            />
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight: 'bold'
                                   
                                }}>
                                13 Sep, 2020
                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 8, }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',

                            }}>4.8
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight: 'normal',
                                }}
                            > rating</Text>
                        </Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/star.png')}
                                style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>

                <View style={{ flexDirection: 'row', marginTop: '4%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '5%' }}>
                        <Image
                            source={require('../../assets/images/ReviewImage/r3.png')}
                            style={{ height: 50, width: 50, borderRadius: 50, marginTop: '20%' }}
                        />
                    </View>

                    <View style={{ padding: 10, width: '60%' }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                           Savannah Nguyen
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/icon/watch.png')}
                                style={{ width: 15, height: 15, marginTop: 2 }}
                            />
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight:'bold',
                                    
                                }}>
                                13 Sep, 2020
                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 8, }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',

                            }}>4.8
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontWeight: 'normal',
                                }}
                            > rating</Text>
                        </Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/star.png')}
                                style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>

            </View>
        </ScrollView >
    )
}

export default Review
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

    iconStyle: {
        width: 45,
        height: 45
    },
    headerName: {

        fontSize: 25,
        color: '#1D1E20',
        fontWeight: '900',
       

    },




})