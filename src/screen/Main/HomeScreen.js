import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');

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

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, backgroundColor: '#F5F6FA', margin: 5, borderRadius: 10 }}>
        <Image
          source={item.image}
          style={{ width: 50, height: 40, resizeMode: 'contain', backgroundColor: '#FEFEFE' }}
        />
        <Text style={{ margin: 2, fontSize: 15, color: '#1D1E20', padding: 5, fontWeight: '600' }}>{item.title}</Text>
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%',alignItems:'center'  }}>
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%',alignItems:'center' }}>
          <Text style={{ color: '#1D1E20', fontSize: 17, fontWeight: '500' }}>New Arraival</Text>
          <TouchableOpacity>
            <Text style={{ color: '#8F959E', fontSize: 13 }}>View All</Text>
          </TouchableOpacity>
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