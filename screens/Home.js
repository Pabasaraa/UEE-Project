import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FocusedStatusBar from '../components/FocusedStatusBar'

const Home = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <FocusedStatusBar background={"#000"} />
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home