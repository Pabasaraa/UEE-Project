import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 50,
            height: 50,
            backgroundColor: '#303030',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            ...props
          }}
          onPress={handlePress}
          >
            <Image 
                source={imgUrl}
                resizeMode= 'contain'
                style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
    )
};

export const SkipButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: 'transparent',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            zIndex: 1,
            ...props
          }}
          onPress={handlePress}
          >
            <Text style={{ paddingRight: 5 }}>Skip</Text>
            <Image 
                source={imgUrl}
                resizeMode= 'contain'
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
};

export const RectButton = ({ text, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 150,
            height: 50,
            backgroundColor: '#303030',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            ...props
          }}
          onPress={handlePress}
          >
            <Text style={{ color: '#60CF7C', fontWeight: '700', fontSize: 16}}>{text}</Text>
          </TouchableOpacity>
    )
};