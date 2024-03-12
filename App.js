import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import SecondScreen from './components/SecondScreen';
import 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
