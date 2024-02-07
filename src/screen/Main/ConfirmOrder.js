import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ConfirmOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={{ borderRadius: 50 / 2 }}>
        <Image
          source={require('../../assets/icon/back.png')}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>

      <View style={styles.img}>
        <Image
          source={require('../../assets/images/confirmorder.jpeg')}
          style={{ height: 290, width: 350 }}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: '500', fontSize: 18, marginTop: '10%' }}> Order Confirmed!</Text>
        <Text style={{ marginTop: '5%' }}>Your order has been confirmed, we will send</Text>
        <Text>you confirmation email shortly</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.gotoorder}>
          <Text>Go to Orders</Text>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity style={styles.bottomButton} >
          <Text style={styles.saveText}onPress={() => navigation.navigate('AllProduct')}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  img: {
    alignItems: 'center',
    marginTop: '10%'
  },
  gotoorder: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: '3%',
    marginTop: '20%'
  },
  bottomButton: {
    padding: 12,
    backgroundColor: '#9775FA',
    marginTop: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop:'15%'
  },
  saveText: {
    textAlign: 'center',
    color: '#FEFEFE',
    fontSize: 15,
    fontWeight: '500'
  },

})