import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts, Merienda_400Regular } from '@expo-google-fonts/merienda';
import { LondrinaOutline_400Regular } from '@expo-google-fonts/londrina-outline';
import { LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import * as SplashScreen from 'expo-splash-screen';
import GetLocation from '../Scripts/GetLocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderStyleProps {
  LocationBar: boolean;
  MenuBar: boolean;
}

SplashScreen.preventAutoHideAsync();

const HeaderStyle: React.FC<HeaderStyleProps> = ({ LocationBar, MenuBar }) => {
  const [locationData, setLocationData] = useState<{ latitude: number, longitude: number } | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const handleLocationUpdate = (location: { latitude: number, longitude: number }, address: string | null) => {
    setLocationData(location);
    setAddress(address);
  };

  let [fontsLoaded, error] = useFonts({
    Merienda_400Regular,
    LondrinaOutline_400Regular,
    LeagueSpartan_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // if (!fontsLoaded) {
  //   return null; // O muestra un componente de carga alternativo
  // }

  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <GetLocation onLocationUpdate={handleLocationUpdate} />
      <View style={styles.menuDiv}>
        {MenuBar && (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/Images/menu-8.png')} style={styles.menuImage} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.appName}>
        <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
          <Text style={styles.appNameText}>CozyMeals</Text>
        </TouchableOpacity>
        {LocationBar && (
          <View style={styles.ubicacionDiv}>
            <Image source={require('../assets/Images/position-marker.png')} style={styles.ubicacionIcon} />
            <View style={styles.ubicacionTextDiv}>
              <Text style={styles.ubicacionActual}>Ubicacion Actual</Text>
              <Text style={styles.ubicacionCalle}>{address}</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Map'); }}>
              <Image source={require('../assets/Images/down-arrow.png')} style={styles.ubicacionIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.profileImg}>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }}>
          <Image source={require('../assets/Images/profile.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  menuDiv: {
    marginLeft: 0,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  appName: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  appNameText: {
    fontSize: 30,
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#513A2C'
  },
  ubicacionDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  ubicacionIcon: {
    height: 20,
    width: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  ubicacionTextDiv: {
    paddingLeft: 0,
  },
  ubicacionActual: {
    fontWeight: '300',
    color: 'rgba(81, 58, 44, 0.6)',
    fontSize: 12,
  },
  ubicacionCalle: {
    fontSize: 14,
    width:150,
    color: '#513A2C'
  },
  profileImg: {
    justifyContent: 'flex-end',
    paddingRight: 0,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
});

export default HeaderStyle;
