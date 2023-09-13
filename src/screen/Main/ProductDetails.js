import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const ProductDetails = ({ route, navigation }) => {

    const [data, setData] = useState([])

    const Brand = [
        {
            id: '1',
            title: 'Adidas',
            image: require('../../assets/ProductImg/SingleProductImage/p1.png')
        },
        {
            id: '2',
            title: 'Nike',
            image: require('../../assets/ProductImg/SingleProductImage/p2.png')
        },
        {
            id: '3',
            title: 'Fila',
            image: require('../../assets/ProductImg/SingleProductImage/p3.png')
        },
        {
            id: '4',
            title: 'Puma',
            image: require('../../assets/ProductImg/SingleProductImage/p4.png')
        },
    ];

    useEffect(() => {
        getData();
        console.log('data:', data)
    }, [])

    const getData = () => {
        fetch('https://fakestoreapi.com/products/' + route.params.id)
            .then(res => res.json())
            .then(value => setData(value))

    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 10 }}>
                <Image
                    source={item.image}
                    style={{ width: 120, height: 120, resizeMode: 'contain', backgroundColor: '#FEFEFE' }}
                />

            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 15 }}>
                <ImageBackground
                    source={{ uri: data.image }}
                    style={{ width: '100%', height: 300 }}
                    resizeMode='contain'
                >
                    <View style={{ width: '14%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation')}>
                            <Image
                                source={require('../../assets/icon/back.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                    <Text style={{ color: '#8F959E', fontSize: 14 }}>{data.category}</Text>
                    <Text style={{ color: '#8F959E', fontSize: 14, right: '200%' }}>Price</Text>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>

                    <Text numberOfLines={1} style={{ color: '#1D1E20', fontSize: 22, fontWeight: '900', width: '50%' }}>{data.title}</Text>

                    <Text style={{ color: '#1D1E20', fontSize: 22, fontWeight: '900' }}>${data.price}</Text>

                </View>

                <View style={{ marginTop: '5%' }}>
                    <FlatList
                        data={Brand}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style={{ color: '#1D1E20', fontSize: 22, fontWeight: '900', marginTop: '5%' }}>Description</Text>
                <Text numberOfLines={4.5} style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E' }}>
                    {data.description}
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProductDescription', { desc: data.description })}>
                    <Text style={{ color: '#1D1E20', fontSize: 16, fontWeight: '700' }}>Read more..</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%', alignItems: 'center' }}>
                    <Text style={{ color: '#1D1E20', fontSize: 20, fontWeight: 'bold' }}>Review</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Review')}>
                        <Text style={{ color: '#8F959E', fontSize: 14 }}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '5%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View  style={{ width: '50%',flexDirection: 'row',alignItems:'center' }}>
                        <Image
                            source={require('../../assets/images/manImg.png')}
                            style={{ height: 60, width: 60, borderRadius: 50, }}
                        />


                        <View>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontFamily: 'Roboto-Medium',

                                    fontWeight: '800'
                                }}>
                                Ronald Richared
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../../assets/icon/watch.png')}
                                    style={{ width: 22, height: 22,}}
                                />
                                <Text
                                    style={{
                                        color: '#8F959E',
                                        fontFamily: 'Roboto-Regular',
                                        fontWeight: '800'
                                    }}> 13 sep,2020
                                </Text>

                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
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
                        <Image
                            source={require('../../assets/images/star.png')}
                            style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
                <Text
                    style={{ textAlign: 'justify', fontSize: 15, color: '#8F959E', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>

                <View style={{ flexDirection: 'row', marginTop: '4%',justifyContent:'space-between',marginTop:'5%' }}>


                    <View style={{ width: '50%' }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 16,
                                fontFamily: 'Roboto-Medium',
                                fontWeight: '800'
                            }}>
                            Total Price
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: '#8F959E',
                                    fontFamily: 'Roboto-Regular',
                                    fontWeight: 'normal'
                                }}>
                                with VAT,SD
                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column',justifyContent:'center'}}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 18
                            }}>$125

                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.bottomButton}
                  onPress={()=>navigation.navigate('AddNewCard')}>
                    <Text style={styles.NewAcc}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProductDetails
const styles = StyleSheet.create({
    bottomButton: {
        height: '5%',
        backgroundColor: '#9775FA',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: '8%',
        width: '100%',
        marginBottom: '10%'
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    }
})
// value : [
//     {
//         id:18,
//         image:'',
//         price:'',
//         description:''
//     }
// ]