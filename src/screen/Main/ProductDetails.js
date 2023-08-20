import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
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
        console.log('data:',data)
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
                    <Text style={{ color: '#8F959E', fontSize: 14, right: '130%' }}>Price</Text>
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

                <TouchableOpacity onPress={()=>navigation.navigate('ProductDescription',{desc:data.description})}>
                    <Text style={{ color: '#1D1E20', fontSize: 16, fontWeight: '700' }}>Read more..</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default ProductDetails

// value : [
//     {
//         id:18,
//         image:'',
//         price:'',
//         description:''
//     }
// ]