import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import arrow from '../assets/NextArrow.png'

const ArticleCard = ({ headerTxt, subTxt, ...props }) => {
    const [text, setText] = useState(subTxt.slice(0, 150));

    const navigation = useNavigation();

  return (
    <View style={{
        backgroundColor: '#fff',
        marginLeft: 15,
        marginRight: 15, 
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2}
    }}>
      <View style={{
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
      }}>
        <Text style={{
            fontSize: 16,
            color: '#303030',
            fontWeight: '700',
            marginBottom: 7,
        }}>
            {headerTxt}
        </Text>
        <Text style={{
            fontSize: 14,
            color: '#606060',
            opacity: 0.9,
        }}>
            {text}...
        </Text>
        <TouchableOpacity style={{
            marginBottom: 20,
            marginTop: 15
        }}
        // This won't work properly because I nested navigations need to find more about this
        // onPress={() => {navigation.navigate("ArticleDescription")}}
        >
            <View style={{ position: 'absolute', right: 10, flexDirection: 'row' }}>
                <Text style={{
                    color: '#2979D2',
                    fontWeight: '600',
                }}>Read More</Text>
                <Image 
                source={arrow}
                resizeMode= 'contain'
                style={{
                    width: 20,
                    height: 20,
                    tintColor: '#2979D2',
                    marginLeft: 5
                }}/>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ArticleCard