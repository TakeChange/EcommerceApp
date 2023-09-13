import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeartComponent from '../../component/HeartComponent';
const NikeBrand = ({ navigation }) => {
  
  const [storeProduct, setStoreProduct] = useState([]);
  const Product = [
    {
      id: '1',
      title: 'Nike Sportswear Club Fleece',
      image: require('../../assets/ProductImg/i1.png'),
      price: '$99'

    },
    {
      id: '2',
      title: 'Trail Running Jacket Nike Windrunner',
      image: require('../../assets/ProductImg/i2.png'),
      price: '$99'
    },
    {
      id: '3',
      title: 'Training Top Nike Sport Clash',
      image: require('../../assets/ProductImg/i3.png'),
      price: '$99'
    },
    {
      id: '4',
      title: 'Trail Running Jacket Nike Windrunner',
      image: require('../../assets/ProductImg/i4.png'),
      price: '$99'
    },
    {
      id: '3',
      title: 'Training Top Nike Sport Clash',
      image: require('../../assets/ProductImg/i3.png'),
      price: '$99'
    },
    {
      id: '4',
      title: 'Trail Running Jacket Nike Windrunner',
      image: require('../../assets/ProductImg/i4.png'),
      price: '$99'
    },
  ];
  
  const productList = ({ item }) => {
    return (
      <View style={{ width: '47.5%', margin:'1%' }}>
        <TouchableOpacity>
          <ImageBackground
            source={item.image}
            style={{ height:200, width: '100%',padding: '5%', marginHorizontal:'5%',}}
            resizeMode='contain'
          >
            <HeartComponent />
          </ImageBackground>
          <Text style={{ fontSize: 13, color: '#1D1E20',fontWeight:'bold',padding:'1%',marginHorizontal:'5%'}}>{item.title}</Text>
          <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: '900',padding: '1%',marginHorizontal:'5%'}}>{item.price}</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ margin: '5%' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '8%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                source={require('../../assets/icon/BackImg.png')}
                style={{ width:45, height:45, borderRadius: 55 }}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/icon/Nike1.png')}
              style={{ width:70, height:45, borderRadius: 10 }}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assets/icon/BagImg.png')}
                style={{ width: 45, height: 45, borderRadius: 55 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '7%' }}>
            <View>
              <Text style={{ fontWeight: '900', fontSize: 17, color: 'black', }}>365 Items</Text>
              <View>
                <Text>Available in stock</Text>

              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/sort.png')}
                style={{ width: 80, height: 40, borderRadius: 8, }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: '2%', marginBottom:'20%' }}>
          <FlatList
            data={Product}
            renderItem={productList}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default NikeBrand

