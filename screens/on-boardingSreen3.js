import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { RectButton, SkipButton } from '../components/Button'
import FocusedStatusBar from '../components/FocusedStatusBar'
import OnBoardingTxt from '../components/OnBoardingTxt'

//import assets
import skip from '../assets/Arrow.png'
import InstallationImg from '../assets/InstallationImg.png'

const OnBoardingScreen3 = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar background={"#000"} />
        <View style={{ width: '100%', flexDirection: 'row' }}>
            <SkipButton 
                imgUrl={skip}
                handlePress={() => {navigation.replace("Holder")}}
                right={15}
                top={20}
            />
            <OnBoardingTxt
                imgUrl={InstallationImg}
                heading={'Installation & commissioning'}
                subText={'System installation begins with installing solar panels on the roof including solar power optimizers and attaching panels.'}
            />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
            <RectButton 
                text={"Let's Go"}
                handlePress={() => {navigation.replace("Holder")}}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen3