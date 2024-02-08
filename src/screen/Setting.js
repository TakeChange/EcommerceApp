import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import ToggleSwitch from 'toggle-switch-react-native';
import AddReview from './Main/AddReview';

const Setting = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={{ backgroundColor: '#E5E5E5' }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                
                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 20, marginLeft: '35%' }}> Setting</Text>
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}>
                   <Image
                        source={require('../assets/icon/bell.png')}
                        style={{ width: 25, height: 25 }}
                    />


                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 18 }}>    Notification Setting</Text>
                   
                    <View style={{marginLeft:'28%'}}>
                <ToggleSwitch
                            isOn={isEnabled}
                            onColor="black"
                            offColor="#D6D6D6"
                            size="small"
                            onToggle={toggleSwitch}
                        />
                        </View>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}>
                   <Image
                        source={require('../assets/icon/key.png')}
                        style={{ width: 25, height: 25 }}
                    />


                <Text style={{ color: 'black', fontWeight: '900', fontSize: 18 }}>    Password Manager</Text>

                    <TouchableOpacity  onPress={()=>navigation.navigate('AddReview')}>
                        <Image
                            source={require('../assets/icon/next.png')}
                            style={{ width: 12, height: 12, marginLeft: '60%' }}
                        />
                    </TouchableOpacity>
                </View>
           </View>
        </ScrollView>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
})