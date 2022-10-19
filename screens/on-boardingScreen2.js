import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { CircleButton, SkipButton } from '../components/Button'
import FocusedStatusBar from '../components/FocusedStatusBar'
import OnBoardingTxt from '../components/OnBoardingTxt'

//import assets
import skip from '../assets/Arrow.png'
import DesignImg from '../assets/DesignImg.png'
import arrow from '../assets/NextArrow.png'

const OnBoardingScreen2 = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar background={"#000"} />
        <View style={{ width: '100%', flexDirection: 'row' }}>
            <SkipButton 
                imgUrl={skip}
                handlePress={() => {navigation.replace("Home")}}
                right={15}
                top={20}
            />
            <OnBoardingTxt
                imgUrl={DesignImg}
                heading={'System Design & Approval'}
                subText={'Once choosing the most suitable solar system we will provide a comprehensive solar system drawing along with a projected energy report at no cost. '}
            />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
            <CircleButton
                imgUrl={arrow}
                handlePress={() => {navigation.navigate("OnBoardingScreen3")}}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen2