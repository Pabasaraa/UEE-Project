import { View, Text } from 'react-native'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import BottomNav from '../components/BottomNav';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#F8F8F8"
    }
  }

const ScreenHolder = () => {
  return (
    <NavigationContainer theme={theme} independent={true}>
        <BottomNav />
    </NavigationContainer>
  )
}

export default ScreenHolder