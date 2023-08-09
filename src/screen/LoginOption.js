import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const LoginOption = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('FirstScreen')}>
                <AntDesign name='arrowleft' color='#1D1E20' size={22} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Let’s Get Started</Text>
            <View style={{ marginTop: '30%' }}>

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
            <View style={{flexDirection:'row', marginTop: '50%',justifyContent:'center'}}>
                <Text style={{ textAlign: 'center' }}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                    <Text style={{fontWeight:'bold',color:'#1D1E20'}}> Signin</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.bottomButton}>
                <Text style={styles.NewAcc}>Create an Account</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    backButton: {
        width: 35,
        height: 35,
        backgroundColor: '#F5F6FA',
        borderRadius: 35 / 2,
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
    },
    AccButton: {
        margin: '2%',
        borderRadius: 10
    },
    textStyle: {
        textAlign: 'center',
        padding: '4%',
        color: '#FFFFFF',
        fontSize: 17
    },
    bottomButton:{
        height:'7%',
        backgroundColor:'#9775FA',
        margin:10,
        borderRadius:10,
        justifyContent:'center'
    },
    NewAcc:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:17,
    }
})