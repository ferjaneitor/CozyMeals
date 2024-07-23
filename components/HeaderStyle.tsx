import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Merienda_400Regular } from '@expo-google-fonts/merienda';
import { LondrinaOutline_400Regular } from '@expo-google-fonts/londrina-outline';
import AppLoading from 'expo-app-loading';
import GetLocation from '../Scripts/GetLocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderStyleProps {
  LocationBar: boolean;
}

const HeaderStyle: React.FC<HeaderStyleProps> = ({ LocationBar }) => {

  const [locationData, setLocationData] = useState<{ latitude: number, longitude: number } | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const handleLocationUpdate = (location: {latitude:number, longitude:number },address: string | null ) => {
    setLocationData(location)
    setAddress(address)
  }

  let [fontsLoaded] = useFonts({
    Merienda_400Regular,
    LondrinaOutline_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <GetLocation onLocationUpdate={handleLocationUpdate}/>
      <View style={styles.menuDiv}>
        <Image source={require('../assets/Images/menu-8.png')} style={styles.menuImage} />
      </View>
      <View style={styles.appName}>
        <TouchableOpacity onPress={(()=>{navigation.navigate('Home')})}>
          <Text style={styles.appNameText}>CozyMeals</Text>
        </TouchableOpacity>
        {LocationBar && (
          <View style={styles.ubicacionDiv} >
            <Image source={require('../assets/Images/position-marker.png')} style={styles.ubicacionIcon}/>
            <View style={styles.ubicacionTextDiv}>
              <Text style={styles.ubicacionActual}>Ubicacion Actual</Text>
              <Text style={styles.ubicacionCalle}>{locationData?.latitude}</Text>
              <Text style={styles.ubicacionCalle}>{locationData?.longitude}</Text>
              <Text style={styles.ubicacionCalle}>{address}</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Map')}}>
              <Image source={require('../assets/Images/down-arrow.png')} style={styles.ubicacionIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.profileImg}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
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
    fontFamily: 'Merienda_400Regular',
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
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 12,
  },
  ubicacionCalle: {
    fontSize: 14,
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
