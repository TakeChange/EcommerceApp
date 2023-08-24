import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const AddReview = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{margin:10}}>

                <View style={{ flexDirection: 'row',alignItems:'center',}}>
                    <Image
                        source={require('../../assets/icon/back.png')}
                        style={{ width: 50, height: 50, }}
                    />
                    <Text style={{fontSize:17,color:'#1D1E20',fontWeight:'bold',textAlign:'center',marginLeft:'25%'}}>Add Review</Text>
                    <Text></Text>
                </View>

                <View style={{marginTop:'10%'}}>
                    <Text style={{fontSize:17,color:'#1D1E20',fontWeight:'800'}}>Name</Text>
                    <TextInput
                        style={{backgroundColor:'#F5F6FA',marginTop:'3%',borderRadius:10}}
                        placeholder='Type your name'
                        placeholderTextColor={'#8F959E'}
                    ></TextInput>
                </View>

                <View style={{marginTop:'10%'}}>
                    <Text style={{fontSize:17,color:'#1D1E20',fontWeight:'800'}}>How was your experience ?</Text>
                    <TextInput
                        style={{backgroundColor:'#F5F6FA',marginTop:'3%',borderRadius:10}}
                        placeholder='Describe your experience?'
                        placeholderTextColor={'#8F959E'}
                        numberOfLines={10}
                        
                    ></TextInput>
                </View>

                <View style={{marginTop:'10%'}}>
                    <Text style={{fontSize:17,color:'#1D1E20',fontWeight:'800'}}>Star</Text>
                   
                </View>

            </View>
        </View>
    )
}

export default AddReview