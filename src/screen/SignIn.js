import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch,ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const SignIn = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginOption')}>
                <AntDesign name='arrowleft' color='#1D1E20' size={22} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.descText}>Please enter your data to continue</Text>
            <View style={{ marginTop: '30%', margin: '7%' }}>

                <Text style={styles.labelText}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.fieldStyle}
                    placeholder='Enter the username'
                />

                <Text style={styles.labelText}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.fieldStyle}
                    placeholder='Enter the password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.forgetStyle}>
                    <Text style={styles.forgetText}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <Text style={styles.remeberText}>Remember me</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: 'green' }}
                        thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={{ marginTop: '28%' }}>
                    <Text style={{ textAlign: 'center' }}>By connecting your account confirm that you agree with our <Text style={{ fontWeight: 'bold', color: '#1D1E20' }}> Term and Condition</Text> </Text>
                    <TouchableOpacity style={styles.bottomButton}>
                        <Text style={styles.NewAcc}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default SignIn

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
    }
})