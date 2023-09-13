import { View, Text, StyleSheet, TouchableOpacity,Image,Appearance} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const LoginOption = ({ navigation }) => {

    const [theme , setTheme] = useState(''); 

    useEffect(()=>{
        const listener = Appearance.addChangeListener(
            colorTheme=>{
                if(colorTheme.colorScheme === 'light')
                {
                    setTheme('LIGHT')
                }
                else
                {
                    setTheme('DARK')
                }
            }
        ) 
    },[])

    return (
        <View style={{flex:1,backgroundColor:theme=='LIGHT'?'#fff':'#000'}}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('FirstScreen')}>
                <Image
                    source={require('../assets/icon/back.png')}
                    style={{ width: 40, height: 40 }}
                />
            </TouchableOpacity>
            <Text style={[styles.headerText,{color:theme=='DARK'?'#fff':'#000'}]}>Let’s Get Started</Text>
            <View style={{ marginTop: '47%' }}>

                <TouchableOpacity style={{ ...styles.AccButton, backgroundColor: '#4267B2' }}>
                    <Text style={styles.textStyle}><FontAwesome name='facebook' size={16} color='#FFFFFF' />  Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.AccButton, backgroundColor: '#1DA1F2' }}>
                    <Text style={styles.textStyle}><FontAwesome name='twitter' size={16} color='#FFFFFF' />  Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.AccButton, backgroundColor: '#EA4335' }}>
                    <Text style={styles.textStyle}><FontAwesome name='google' size={16} color='#FFFFFF' />  Google</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginTop: '65%', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center',color:theme=='DARK'?'#fff':'#000' }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ fontWeight: 'bold', color:theme=='DARK'?'#fff':'#000' }}> Signin</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.NewAcc}>Create an Account</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginOption

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    backButton: {
        width: 35,
        height: 35,
        backgroundColor: '#F5F6FA',
        borderRadius: 35 / 2,

        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
    },
    AccButton: {
        borderRadius: 10,
        marginTop: '4%'
    },
    textStyle: {
        textAlign: 'center',
        padding: '4%',
        color: '#FFFFFF',
        fontSize: 17
    },
    bottomButton: {
        height: '7%',
        backgroundColor: '#9775FA',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: '3%'
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    }
})