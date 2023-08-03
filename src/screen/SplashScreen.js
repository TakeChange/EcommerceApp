import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('DrawerNavigation')
        },2000)
    },[])

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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