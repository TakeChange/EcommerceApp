import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
          check();
        },3000)
    },[])

    const check = async() =>{
      var temp = await AsyncStorage.getItem('login');

      if(temp == 'yes')
      {
        navigation.navigate('DrawerNavigation')
      }
      else
      {
        navigation.navigate('FirstScreen');
      }
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../asse/images/Splash.png')}
        style={{width:'100%',height:'100%'}}
      ></ImageBackground>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    }
})