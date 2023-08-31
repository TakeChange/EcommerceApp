import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeartComponent from '../../component/HeartComponent';
import DropDownPicker from 'react-native-dropdown-picker';

const AllProduct = () => {

    const [storeProduct, setStoreProduct] = useState([]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);


    const [items, setItems] = useState([
        { label: "All", value: "All" },
        { label: "electronics", value: "electronics" },
        { label: "jewelery", value: "jewelery" },
        { label: "men's clothing", value: "men's clothing" },
        { label: "women's clothing", value: "women's clothing" },
    ]);


    useEffect(() => {
        fetchData();
    }, [])

    const changeData = () =>{

        if(value == "All")
        {
            fetchData();
        }
        else
        {
            fetch('https://fakestoreapi.com/products/category/'+value)
            .then(res=>res.json())
            .then(responce => setStoreProduct(responce))
        }
    }

    const productList = ({ item }) => {

        return (
            <View style={{ width: '47.5%', marginTop: '2%', margin: 5 }}>
                <ImageBackground
                    source={{ uri: item.image }}
                    style={{ height: 200, width: '100%' }}
                    resizeMode='contain'
                >
                    <HeartComponent />
                </ImageBackground>
                <Text style={{ fontSize: 12, color: '#1D1E20' }}>{item.title}</Text>
                <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: '800' }}>{item.price}</Text>
            </View>
        )
    }


    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(responce => setStoreProduct(responce))

        console.log('Responce Data :', storeProduct);
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View >
                <Image
                    source={require('../../asse/images/bannerImage.jpg')}
                    style={{ width: '100%', height: 200, }}
                />

                <View style={{ marginTop: '5%', margin: 10 }}>
                    <Text style={{ color: '#1D1E20', fontSize: 17, fontWeight: '500' }}>Sort By</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={changeData}
                    />
                    <Text style={{ color: '#1D1E20', fontSize: 17, fontWeight: '500' }}>New Arraival</Text>
                    <View style={{ marginTop: '2%', marginBottom: 100 }}>
                        <FlatList
                            data={storeProduct}
                            renderItem={productList}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                        />
                    </View>

                </View>

            </View>
        </ScrollView>
    )
}

export default AllProduct