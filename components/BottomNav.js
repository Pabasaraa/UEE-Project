import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Articles from "../screens/Articles";
import Store from '../screens/Store';
import Profile from '../screens/Profile';

//Icons
import homeIcon from '../assets/icons/Home.png'

const bottomNav = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <bottomNav.Navigator
        screenOptions={{
            // tabBarShowLabel: false,
            tabBarStyle: [{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 30,
                height: 60,
                borderTopColor: '#fff',
                borderColor: '#fff',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 2}
            }, null],
        }}
    >
        <bottomNav.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: () => {
                    <Image 
                        source={homeIcon}
                        resizeMode= 'contain'
                        style = {{ width: 50, height: 50 }}
                    />
                }
            }}
        />
        <bottomNav.Screen name="Store" component={Store}  options={{ headerShown: false }}/>
        <bottomNav.Screen name="Articles" component={Articles}  options={{ headerShown: false }}/>
        <bottomNav.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
    </bottomNav.Navigator>
  )
}

export default BottomNav