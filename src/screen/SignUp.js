import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');


    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Validation = () => {
        var isValid = true;
        if (username == '') {
            setUserError('Username do not empty');
            isValid = false;
        } else {
            setUserError('');
        }

        if (password == '') {
            setPasswordError('Password do not empty');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (email == '') {
            setEmailError('Email do not empty');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (isValid) {
            storeData();
        }
    }

    const storeData = async ()=>{
        try{
            await AsyncStorage.setItem('uname',username);
            await AsyncStorage.setItem('pass',password);
            await AsyncStorage.setItem('mail',email);
            getData();
            ToastAndroid.show('SignUp successfully', ToastAndroid.LONG);
            navigation.navigate('SignIn')
        }
        catch(e)
        {
            console.log(e);
        }
    }

    const getData = async ()=>{
        try{
            var uname = await AsyncStorage.getItem('uname');
            var pass = await AsyncStorage.getItem('pass');
            var mail = await AsyncStorage.getItem('mail');

            console.log('Username :',uname)
            console.log('Password :',pass)
            console.log('Email :',mail)

        }
        catch(e)
        {
            console.log(e);
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginOption')}>
                    <Image
                        source={require('../assets/icon/back.png')}
                        style={{width:40,height:40}}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign Up</Text>
                <View style={{ marginTop: '25%' }}>

                    <Text style={styles.labelText}>Username</Text>
                    <TextInput
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        style={styles.fieldStyle}
                        placeholder='Enter the username'
                    />
                    <Text style={styles.errorMsg}>{userError}</Text>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.fieldStyle}
                        placeholder='Enter the password'
                        secureTextEntry={true}
                    />
                    <Text style={styles.errorMsg}>{passwordError}</Text>
                    <Text style={styles.labelText}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.fieldStyle}
                        placeholder='Enter the email'
                    />
                    <Text style={styles.errorMsg}>{emailError}</Text>

                    <View style={styles.subContainer}>
                        <Text style={styles.remeberText}>Remember me</Text>
                        <ToggleSwitch
                            isOn={isEnabled}
                            onColor="green"
                            offColor="#D6D6D6"
                            size="small"
                            onToggle={toggleSwitch}
                        />
                    </View>

                    <View style={{ marginTop: '48%' }}>
                       
                        <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
                            <Text style={styles.NewAcc}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:15
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
        padding: '4%',
        backgroundColor: '#9775FA',
        marginTop: '3%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    NewAcc: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    },
    labelText: {
        fontSize: 15,
        color: '#8F959E',
        marginTop: '1%'
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