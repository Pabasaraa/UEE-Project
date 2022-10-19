import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FocusedStatusBar from '../components/FocusedStatusBar'

const Profile = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <FocusedStatusBar background={"#000"} />
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile