import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'


const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [userError, setUserError] = useState('');
    const Validation = () => {
        var isValid = true;
        if (email == '') {
            setUserError('email do not empty');
            isValid = false;
        } else {
            setUserError('');
        }
    }

    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginOption')}>
                <Image
                    source={require('../../assets/icon/back.png')}
                    style={{ width: 40, height: 40 }}
                />

            </TouchableOpacity>
            <Text style={styles.headerText}>Forgot Password</Text>

            <Image
                source={require('../../assets/images/lock.png')}
                style={{ width: '100%', height: '30%', alignSelf: 'center' }}
            />



            <Text style={styles.labelText}>Email</Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.fieldStyle}
                placeholder='bill.sanders@example.com'
            />
            <Text style={styles.errorMsg}>
                {userError}</Text>

            <View style={{ marginTop: '20%' }}>
                <Text style={{ textAlign: 'center' }}>Please write your email to receive a confirmation code to set a new password. </Text>
                <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
                    <Text style={styles.NewAcc}>Confirm Mail</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default ForgotPass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

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
        fontSize: 26,
        marginTop: '8%'
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
        marginTop: '10%'
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