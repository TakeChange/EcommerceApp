import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView, Image, ToastAndroid ,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Password = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [conpassword, setconPassword] = useState('');
   
    const [passError, setpassError] = useState('');
    const [conpasswordError, setconPasswordError] = useState('');

    const Validation = async () => {
        var isValid = true;
        if (password == '') {
            setpassError('Password do not empty');
            isValid = false;
        } else {
            setpassError('');
        }

        if (conpassword == '') {
            setconPasswordError('Confirm Password do not empty');
            isValid = false;
        } else {
            setconPasswordError('');
        }

        if(password != conpassword)
        {
            setconPasswordError('Both password do not match.');
            isValid = false;
        }else {
            setconPasswordError('');
        }

        if (isValid) {
           
            check();
        }
    }

    const check = async () =>{
        try
        {
            await AsyncStorage.setItem('pass',password);
            await AsyncStorage.setItem('conpass',conpassword);
            ToastAndroid.show('Reset password sucessfully.',ToastAndroid.LONG);
        }
        catch(e)
        {
            console.log(e)
        }
    }

    
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginOption')}>
                    <Image
                        source={require('../assets/icon/back.png')}
                        style={{ width: 40, height: 40 ,}}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Password</Text>
                <View style={{ marginTop: '25%' }}>

                    <Text style={styles.labelText}>password</Text>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.fieldStyle}
                        placeholder='Enter the password'
                        secureTextEntry={true}
                    />
                    <Text style={styles.errorMsg}>{passError}</Text>
                    <Text style={styles.labelText}>Confirm Password</Text>
                    <TextInput
                        value={conpassword}
                        onChangeText={(text) => setconPassword(text)}
                        style={styles.fieldStyle}
                        placeholder='Enter the confirm password'
                        secureTextEntry={true}
                    />
                    <Text style={styles.errorMsg}>{conpasswordError}</Text>

                    <View style={{ marginTop: '60%' }}>
                        <Text style={{ textAlign: 'center',color:'blue' }}> Please write your confirm password </Text>
                        <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
                            <Text style={styles.NewAcc}>Reset Password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Password

const styles = StyleSheet.create({
    container: {
        flex: 0,
        margin: 15
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
        color: 'black',
        fontSize: 28,
    },
    descText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#8F959E'
    },
    bottomButton: {
        padding: 12,
        backgroundColor: '#9775FA',
        marginTop: '5%',
        borderRadius: 10,
        justifyContent: 'center',
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    },
    labelText: {
        fontSize: 15,
        color: '#8F959E',
        marginTop: '5%'
    },
    fieldStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        color: '#1D1E20',
        fontSize: 15
    },
    forgetStyle: {
        alignSelf: 'flex-end',
        marginTop: '4%'
    },
    forgetText: {
        fontSize: 15,
        color: '#EA4335'
    },
    subContainer: {
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between'
    },
    remeberText: {
        color: '#1D1E20',
        fontSize: 15
    },
    errorMsg: {
        color: 'red'
    }
})