import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error setting item", error);
    }
};

const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            return value;
        }
    } catch (error) {
        console.log("Error getting item", error)
    }
}

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const StartingScreen = () => {

    const navigation = useNavigation()

    const [hasLaunched, setHasLaunched] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const hasLaunched = await getItem(HAS_LAUNCHED);
            if(hasLaunched){
                setHasLaunched(true);
            }else{
                await storeData(HAS_LAUNCHED, "true");
            }
        }

        getData().catch((err) => {console.log(err)})
    }, [])

  return (
    <View>
        {hasLaunched ? navigation.replace("Holder") : navigation.replace("OnBoardingScreen1")}
    </View>
  )
}

export default StartingScreen