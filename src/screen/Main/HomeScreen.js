import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import HeartComponent from '../../component/HeartComponent';

const HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [storeProduct, setStoreProduct] = useState([]);


  const Brand = [
    {
      id: '1',
      title: 'Adidas',
      image: require('../../assets/images/adi.png')
    },
    {
      id: '2',
      title: 'Nike',
      image: require('../../assets/images/nike.png')
    },
    {
      id: '3',
      title: 'Fila',
      image: require('../../assets/images/fila.png')
    },
    {
      id: '4',
      title: 'Puma',
      image: require('../../assets/images/puma.png')
    },
  ];

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
      price: '$101'
    },
    {
      id: '3',
      title: 'Training Top Nike Sport Clash',
      image: require('../../assets/ProductImg/i3.png'),
      price: '$48'
    },
    {
      id: '4',
      title: 'Trail Running Jacket Nike Windrunner',
      image: require('../../assets/ProductImg/i4.png'),
      price: '$78'
    },
  ];

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(responce => setStoreProduct(responce))

    console.log('Responce Data :', storeProduct);
  }


  const renderItem = ({ item }) => {
    return (
     
        <TouchableOpacity 
        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, backgroundColor: '#F5F6FA', margin: 5, borderRadius: 10 }}
        onPress={()=>navigation.navigate('NikeBrand')}
        >
        <Image
          source={item.image}
          style={{ width: 50, height: 40, resizeMode: 'contain', backgroundColor: '#FEFEFE' }}
        />
        <Text style={{ margin: 2, fontSize: 15, color: '#1D1E20', padding: 5, fontWeight: '600' }}>{item.title}</Text>
        </TouchableOpacity>
      
    )
  }

  const productList = ({ item }) => {

    return (
      <View style={{ width: '47.5%', marginTop: '2%', margin: 5 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{id:item.id})}>
          <ImageBackground
            source={{ uri: item.image }}
            style={{ height: 200, width: '100%' }}
            resizeMode='contain'
          >
            <HeartComponent />
          </ImageBackground>
          <Text style={{ fontSize: 12, color: '#1D1E20' }}>{item.title}</Text>
          <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: '800' }}>{item.price}</Text>
        </TouchableOpacity>
        <Text>{item.id}</Text>
      </View>
    )
  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>

        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/icon/openDrawer.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icon/BagImg.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerName}>Hello</Text>
        <Text style={styles.subText}>Welcome to Laza.</Text>

        <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            style={styles.searchStyle}
          />
          <Image
            source={require('../../assets/icon/mike.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', alignItems: 'center' }}>
          <Text style={{ color: '#1D1E20', fontSize: 17, fontWeight: '500' }}>Choose Brand</Text>
          <TouchableOpacity>
            <Text style={{ color: '#8F959E', fontSize: 13 }}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%' }}>
          <FlatList
            data={Brand}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', alignItems: 'center' }}>
          <Text style={{ color: '#1D1E20', fontSize: 17, fontWeight: '500' }}>New Arraival</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllProduct')}>
            <Text style={{ color: '#8F959E', fontSize: 13 }}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', marginBottom: 100 }}>
          <FlatList
            data={storeProduct}
            renderItem={productList}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,

  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    width: 45,
    height: 45
  },
  headerName: {
    fontSize: 28,
    color: '#1D1E20',
    fontWeight: '900',
    marginTop: '1%'
  },
  subText: {
    fontSize: 15,
    color: '#8F959E'
  },
  searchStyle: {
    width: '83%',
    height: '95%',
    borderRadius: 10,
    backgroundColor: '#F5F6FA'
  }
})