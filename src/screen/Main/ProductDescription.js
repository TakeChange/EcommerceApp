import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductDescription = ({ route,navigation }) => {
    return (
        <ScrollView style={{ flex: 1,backgroundColor:'#fff'}}>
            <View style={{ margin: 15 }}>
            <View style={{ width: '14%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
                            <Image
                                source={require('../../asse/icon/back.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    </View>
                <Text style={{ color: '#1D1E20', fontSize: 22, fontWeight: '900', marginTop: '5%' }}>Description</Text>
                <Text style={{fontSize:18,marginTop:'3%',textAlign:'justify'}}>{route.params.desc}</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDescription