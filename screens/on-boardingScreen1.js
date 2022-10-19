import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { CircleButton, SkipButton } from '../components/Button'
import FocusedStatusBar from '../components/FocusedStatusBar'
import OnBoardingTxt from '../components/OnBoardingTxt'

//import assets
import skip from '../assets/Arrow.png'
import constructionImg from '../assets/ConstructionImg.png'
import arrow from '../assets/NextArrow.png'

const OnBoardingScreen1 = () => {
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
                imgUrl={constructionImg}
                heading='Initial Site Visit & Consultation'
                subText={'qualified team will perform an inspection of your property, complete an engineering assessment, and consult with you to determine the best solar power system for your property.'}
            />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
            <CircleButton
                imgUrl={arrow}
                handlePress={() => {navigation.navigate("OnBoardingScreen2")}}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen1