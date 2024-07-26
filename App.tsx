import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import MapScreen from './Screens/MapScreen';
import { AppProvider, useAppContext } from './Scripts/AppContext';
import EspecificMealScreen from './Screens/EspecificMealScreen';
import NoUserIdentifyScreen from './Screens/NoUserIdentifyScreen';
import CartScreen from './Screens/CartScreen';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import SingInScreen from './Screens/SingInScreen';
import SingUpScreen from './Screens/SingUpScreen';
import MapWithRestaurantLocations from './Screens/MapWithRestaurantLocations';

// types.ts
export type RootStackParamList = {
  Home: undefined;
  Restaurant: undefined;
  Profile: undefined;
  Settings: undefined;
  Map: undefined;
  EspecificMeal: undefined;
  NoUserIdentify: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Cart: undefined;
  Drawer: undefined;
  MapWithRestaurantLocations:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerContent: React.FC = () => (
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle:{
          backgroundColor:'#BF8E63',
          width:160,
        },
        drawerLabelStyle: {
          color: '#F2DCC2', // Cambia el color del texto aquí
        },
        headerShown: false,

      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
);

const AppContent: React.FC = () => {
  const { identified } = useAppContext();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={DrawerContent} options={{headerShown:false}}/>
              <Stack.Screen name="Restaurant" component={RestaurantScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Map" component={MapScreen} />
              <Stack.Screen name="MapWithRestaurantLocations" component={MapWithRestaurantLocations} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="EspecificMeal" component={EspecificMealScreen} />
            </Stack.Group>
          </>
        ) : (
          <Stack.Group>
            <Stack.Screen name="NoUserIdentify" component={NoUserIdentifyScreen} />
            <Stack.Screen name="SignIn" component={SingInScreen} />
            <Stack.Screen name="SignUp" component={SingUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
