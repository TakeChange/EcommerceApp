import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Counter from '../../component/Counter'

const Cart = ({ navigation }) => {
  

  const CartData = [
    {
      id: '1',
      title: 'Mens Tie-Dye T-Shirt Nike Sportswear',
      image: require('../../asse/images/cartimg1.png')
    },
    {
      id: '2',
      title: 'Mens Tie-Dye T-Shirt Nike Sportswear',
      image: require('../../asse/images/cartimg2.png')
    },
   
 
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={{
        backgroundColor: '#F5F6FA',
        marginTop: '10%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20
      }}>
        <Image
          source={item.image}
          style={{ width: '35%', height: 140, resizeMode: 'contain', borderRadius: 20, }}
        />
        <View style={{ flexDirection: 'column', padding: 8, justifyContent: 'space-between' }}>
          <View style={{ width: '80%', }}>
            <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: 'bold' }}>{item.title}</Text>
          </View>
          <Text style={{ fontSize: 11, }}>$45 (-$4.00 Tax)</Text>


          <Counter/>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity onPress={Decrement}>
              <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 30 }}>
                <Image
                  source={require('../../asse/images/ArrowDown.png')}
                  style={{ width: 18, height: 18, resizeMode: 'contain', borderRadius: 20, }}

                />
              </View>
            </TouchableOpacity>
            <Text style={{ marginLeft: '5%', marginRight: '5%' }}>{counter}</Text>
            <TouchableOpacity onPress={Increment}>
              <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 30 }}>
                <Image
                  source={require('../../asse/images/ArrowUp.png')}
                  style={{ width: 18, height: 18, resizeMode: 'contain', borderRadius: 20, }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 30, marginHorizontal: 50 }}>
                <Image
                  source={require('../../asse/images/delete.png')}
                  style={{ width: 18, height: 18, resizeMode: 'contain', borderRadius: 20, }}
                />
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image
              source={require('../../asse/icon/back.png')}
              style={{ width: 45, height: 45, borderRadius: 55 }}
            />

          </TouchableOpacity>
          <Text style={{ color: 'black', fontWeight: '500', fontSize: 18, marginLeft: '28%' }}> Cart</Text>

        </View>
        <View style={{ borderRadius: 20 }}>
          <FlatList
            data={CartData}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id}
            //horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 ,}}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Delivery Address</Text>
          <Image
            source={require('../../asse/images/ArrowLeft.png')}
            style={{ width: 25, height: 25, resizeMode: 'contain', borderRadius: 20, }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '6%' }}>
          <ImageBackground
            source={require('../../asse/images/Map.png')}
            style={{ width: 80, height: 80, resizeMode: 'contain', borderRadius: 80, }}
          />
          <View style={{ width: '60%' ,marginLeft:'5%'}}>
            <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: 'bold' }}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={{ fontSize: 13, fontWeight: '500' }}>Sylhet</Text>
          </View>
          <Image
            source={require('../../asse/images/check.png')}
            style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 40, }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Payment Method</Text>
          <Image
            source={require('../../asse/images/ArrowLeft.png')}
            style={{ width: 25, height: 25, resizeMode: 'contain', borderRadius: 20, }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '6%' }}>
          <ImageBackground
            source={require('../../asse/images/visa2.png')}
            style={{ width: 70, height: 70, resizeMode: 'contain', borderRadius: 7, }}
          />
          <View style={{ width: '60%',marginLeft:'5%' }}>
            <Text style={{ fontSize: 13, color: '#1D1E20', fontWeight: 'bold' }}>Visa Classic</Text>
            <Text style={{ fontSize: 13, fontWeight: '500' }}>****7690</Text>
          </View>
          <Image
            source={require('../../asse/images/check.png')}
            style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 40, }}
          />
        </View>
        <View style={{ marginTop: '5%' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Order Info</Text>

          <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Subtotal</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>$110</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Shipping cost</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>$10</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Total</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>$12
              0</Text>
          </View>

        </View>

        <View >

          <TouchableOpacity style={styles.bottomButton} >
            <Text style={styles.saveText}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView >
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginBottom: 80
  },
  bottomButton: {
    padding: 12,
    backgroundColor: '#9775FA',
    marginTop: '10%',
    borderRadius: 10,
    justifyContent: 'center'
  },
  saveText: {
    textAlign: 'center',
    color: '#FEFEFE',
    fontSize: 15,
    fontWeight: '500'
  },
})