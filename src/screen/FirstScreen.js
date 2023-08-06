import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/s_background.png')}
        style={styles.imageStyle}
      >
        <ImageBackground
          source={require('../assets/images/manImage.png')}
          style={styles.image}
        >
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Look Good, Feel Good</Text>
            <Text style={styles.descText}>Create your individual & unique style and look amazing everyday.</Text>

            <View style={styles.subView}>

              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.MenText}>Men</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonStyle1}>
                <Text style={styles.WomenText}>Women</Text>
              </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginOption')}>
              <Text style={styles.skipStyle}>Skip</Text>
            </TouchableOpacity>
          </View>


        </ImageBackground>

      </ImageBackground>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    height: '100%',
  },
  subContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#FFFFFF',
    marginTop: '145%',
    borderRadius: 20,
    alignItems:'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1D1E20',
    marginTop: '4%'
  },
  descText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#8F959E',
    marginTop: '2%'
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%'
  },
  buttonStyle: {
    backgroundColor: "#F5F6FA",
    width: "46%",
    borderRadius: 10,
    margin: 5
  },
  buttonStyle1: {
    backgroundColor: "#9775FA",
    width: "46%",
    borderRadius: 10,
    margin: 5
  },
  MenText: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#8F959E',
    margin:'10%'
  },
  WomenText: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#FFFFFF',
    margin:'10%'
  },
  skipStyle: {
    textAlign: 'center',
    marginTop: '2%',
    fontSize: 16,
    color: '#8F959E'
  }
})