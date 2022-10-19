import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//importing screens from screens directory
import StartingScreen from "./screens/StartingScreen";
import OnBoardingScreen1 from "./screens/on-boardingScreen1";
import OnBoardingScreen2 from "./screens/on-boardingScreen2";
import OnBoardingScreen3 from "./screens/on-boardingSreen3";
import ScreenHolder from "./screens/ScreenHolder";
import ArticleDescription from "./screens/ArticleDescription";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F8F8F8"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartingScreen">
        <Stack.Screen name="StartingScreen" component={StartingScreen}/>
        <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen1}/>
        <Stack.Screen name="OnBoardingScreen2" component={OnBoardingScreen2}/>
        <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3}/>
        <Stack.Screen name="Holder" component={ScreenHolder}/>
        <Stack.Screen name="ArticleDescription" component={ArticleDescription}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;