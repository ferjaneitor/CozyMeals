import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import MapScreen from './Screens/MapScreen';
import SingInScreen from './Screens/SingInScreen';
import SingUpScreen from './Screens/SingUpScreen';
import { AppContext, AppProvider } from './Scripts/AppContext';
import EspecificMealScreen from './Screens/EspecificMealScreen';
import { checkUserName, profileData } from './Data/profileData';
import NoUserIdentifyScreen from './Screens/NoUserIdentifyScreen';
import { useContext, useEffect, useState } from 'react';

// types.ts
export type RootStackParamList = {
  Home: undefined;
  Restaurant: undefined;
  Profile: undefined;
  Settings: undefined;
  Map: undefined;
  SpecificMeal: undefined;
  NoUserIdentify: undefined;
  SignIn: undefined;
  SignUp: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {profileData.identified ? (
            <Stack.Group>
              <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="SpecificMeal" component={EspecificMealScreen} />
              </Stack.Group>
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="NoUserIdentify" component={NoUserIdentifyScreen} />
              <Stack.Screen name="SignIn" component={SingInScreen} />
              <Stack.Screen name="SignUp" component={SingUpScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
