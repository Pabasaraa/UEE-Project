import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FocusedStatusBar from '../components/FocusedStatusBar'

const Store = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <FocusedStatusBar background={"#000"} />
      <Text>Store</Text>
    </SafeAreaView>
  )
}

export default Store