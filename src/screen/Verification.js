import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, handleOtpChange, otp, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'



const Verification = ({ navigation }) => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();

    const[f1,setF1] =useState('');
    const[f2,setF2] =useState('');
    const[f3,setF3] =useState('');
    const[f4,setF4] =useState('');
    return (
        <ScrollView style={{ backgroundColor: '#E5E5E5' }}>
            <View style={{ margin: 15 }}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('')}>
                    <Image
                        source={require('../assets/icon/back.png')}
                        style={{ width: 50, height: 50, }}
                    />
                </TouchableOpacity>
                <Text style={styles.MainText}>Verification Code</Text>
                <Image
                    source={require('../assets/images/lock.png')}
                    style={{ width: '100%', height: 200, marginTop: 50 }}
                />

                <View style={styles.otpView}>
                    <TextInput
                        ref={et1}
                        style={[styles.inputView,{borderColor:f1.length>=1?'blue':'#000'}]}
                        keyboardType='number-pad'
                        maxLength={1}
                        onChangeText={txt => {
                            setF1(txt);
                            if (txt.length >= 1) {
                                et2.current.focus();
                            }
                        }} />
                    <TextInput
                        ref={et2}
                        style={[styles.inputView,{borderColor:f2.length>=1?'blue':'#000'}]}
                        keyboardType='number-pad'
                        maxLength={1}
                        onChangeText={txt => {
                            setF2(txt);
                            if (txt.length >= 1) {
                                et3.current.focus();
                            } else if (txt.length < 1) {
                                et1.current.focus();
                            }
                        }} />
                    <TextInput
                        ref={et3}
                        style={[styles.inputView,{borderColor:f3.length>=1?'blue':'#000'}]}
                        keyboardType='number-pad'
                        maxLength={1}
                        onChangeText={txt => {
                            setF3(txt);
                            if (txt.length >= 1) {
                                et4.current.focus();
                            } else if (txt.length < 1) {
                                et2.current.focus();
                            }
                        }} />
                    <TextInput
                        ref={et4}
                        style={[styles.inputView,{borderColor:f4.length>=1?'blue':'#000'}]}
                        keyboardType='number-pad'
                        maxLength={1}
                        value={f4}
                        onChangeText={txt => {
                            setF4(txt);
                            if (txt.length >= 1) {
                                et4.current.focus();
                            } else if (txt.length < 1) {
                                et3.current.focus();
                            }
                        }} />
                </View>
                <View>
                    <Text style={styles.TimeText}>00:00 resend confirmation code.</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('')}>
                        <Text style={styles.ConfirmC}>Confirm Code</Text>
                    </TouchableOpacity></View>
            </View>
        </ScrollView>
    )
}


export default Verification

const styles = StyleSheet.create({
    MainText: {
        fontSize: 26,
        color: '#1D1E20',
        fontWeight: '900',
        textAlign: 'center',
    },
    bottomButton: {
        height: 50,
        backgroundColor: '#9775FA',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: '5%'
    },
    ConfirmC: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 17,
    },
    otpView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputView: {
        marginTop: '25%',
        width: 60,
        height: 70,
        borderWidth: 0.5,
        borderRadius: 10,
        color: 'black',
        marginLeft: 10,
        textAlign: 'center'

    },
    TimeText: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 17,
        marginTop: '40%',
    }
})