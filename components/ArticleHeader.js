import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

import { CircleButton } from '../components/Button'

import searchIcon from '../assets/icons/Search.png'
import sideMenu from '../assets/icons/sideMenuIcon.png'
import profileIcon from '../assets/icons/Profile.png'

const ArticleHeader = () => {
  return (
    <View>
      <View style={{ width: '100%', marginTop: 10}}>
        
        {/* dummy */}
        <Image 
            source={sideMenu}
            resizeMode= 'contain'
            style={{ width: 30, height: 30, marginTop: 15, position: 'absolute', marginLeft: 20 }}
        />
        <Text style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '700',
            color: '#303030',
            opacity: 0.9,
            marginTop: 12
        }}>
            Articles
        </Text>
        
        {/* dummy */}
        <CircleButton
                imgUrl={profileIcon}
                right={15}
                position={'absolute'}
        />
      </View>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <View style={{
            width: '100%',
            borderRadius: 30,
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderColor: '#30303033',
            borderWidth: 1,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginTop: 20,
            marginBottom: 20,
        }}>
            <TextInput
                placeholder='Search articles'
                style= {{ flex: 1 }}
            />
            <Image 
            source={searchIcon}
            resizeMode= 'contain'
            style={{ width: 20, height: 20, opacity: 0.7 }}
          />
        </View>
      </View>
    </View>
  )
}

export default ArticleHeader