import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import MapScreen from './Screens/MapScreen';
import SingInScreen from './Screens/SingInScreen';
import SingUpScreen from './Screens/SingUpScreen';
import { AppProvider } from './Scripts/AppContext';
import EspecificMealScreen from './Screens/EspecificMealScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="SingIn" component={SingInScreen} />
            <Stack.Screen name="SingUp" component={SingUpScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="EspecificMeal" component={EspecificMealScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
