import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('FirstScreen')
        },3000)
    },[])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Splash.png')}
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