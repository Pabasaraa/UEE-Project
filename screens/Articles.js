import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FocusedStatusBar from '../components/FocusedStatusBar'
import ArticleHeader from '../components/ArticleHeader'
import ArticleCard from '../components/ArticleCard'

const Articles = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView  style={{ flex: 1 }}>
      <FocusedStatusBar background={"#000"} />
      <View style={{ zIndex: 1 }}>

        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<ArticleHeader />}
        />

        <ArticleCard headerTxt={'What is solar energy?'} subTxt={"Solar energy is commonly used for solar water heaters and house heating. The heat from solar ponds enables the production of chemicals, food, textiles, warm greenhouses, swimming pools, and livestock buildings. Cooking and providing a power source for electronic devices"} />

      </View>
    </SafeAreaView>
  )
}

export default Articles