import { View, Text, Image } from 'react-native'
import React from 'react'

import { CircleButton } from './Button'
import arrow from '../assets/NextArrow.png'

const OnBoardingTxt = ({ imgUrl, handlePress, heading, subText, ...props}) => {

  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{ width: 300, height: 300 }}
      />
      <Text style={{fontSize: 20, fontWeight: '800', margin: 5, color: '#303030'}}>{heading}</Text>
      <Text style={{
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify',
        color: '#6B6969'
        }}>{subText}</Text>
    </View>
  )
}

export default OnBoardingTxt