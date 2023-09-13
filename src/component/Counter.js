import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState
} from 'react'

const Counter = () => {
    
        const [counter, setCounter] = useState(1);
      
        const Increment = () => {     
          setCounter(counter + 1);
        }
      
        const Decrement = () => {
          setCounter(counter - 1)
        }
         
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity onPress={Decrement}>
                <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 30 }}>
                    <Image
                        source={require('../assets/images/ArrowDown.png')}
                        style={{ width: 18, height: 18, resizeMode: 'contain', borderRadius: 20, }}

                    />
                </View>
            </TouchableOpacity>
            <Text style={{ marginLeft: '5%', marginRight: '5%',fontSize:12,color:'black' }}>{counter}</Text>
            <TouchableOpacity onPress={Increment}>
                <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 30 }}>
                    <Image
                        source={require('../assets/images/ArrowUp.png')}
                        style={{ width: 18, height: 18, resizeMode: 'contain', borderRadius: 20, }}
                    />
                </View>
            </TouchableOpacity>

        </View>

    )
}

export default Counter