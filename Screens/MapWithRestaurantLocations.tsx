import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderStyle from '../components/HeaderStyle'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import RestaurantName from '../components/MapScreen/RestaurantName'
import GetLocation from '../Scripts/GetLocation'
import { fakeData } from '../Data/fajeData'
import { useAppContext } from '../Scripts/AppContext'
import { profileData } from '../Data/profileData'

const MapWithRestaurantLocations = () => {
  const [locationData, setLocationData] = useState<{ latitude: number , longitude: number } | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { tempData } = useAppContext();
  console.log("🚀 ~ MapWithRestaurantLocations ~ tempData:", tempData)
  const navigation = useNavigation();
  const [markers, setMarkers] = useState<{ latitude: number, longitude: number }[]>([{ latitude: locationData?.latitude, longitude: locationData?.longitude }]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (tempData === null) {
      console.log("El carrito es nulo y estas adentro")
      profileData.cart.forEach(restaurant => {
        console.log(restaurant)
        fakeData.map(r=>{
          if( r.Name === restaurant.restaurant){
            console.log("estas dentro de la iteracion y estas buscando el nombre del restaurante",r.Name)
            const newPoint = { latitude: Number(r.Latitud), longitude: Number(r.Longitud) };
            setMarkers([...markers, newPoint]);
            console.log("🚀 ~ useEffect ~ newPoint:", newPoint)
          }
        })
      });
    } else {
      const restaurant = fakeData.find((r) => r.Name === tempData);
      const newPoint = { latitude: Number(restaurant?.Longitud), longitude: Number(restaurant?.Latitud) };
      setMarkers([newPoint]);
      console.log("🚀 ~ useEffect ~ newPoint:", newPoint)
    }
  }, [tempData]);

  console.log( "-estas son tus coordandas",markers)

    // useEffect(() => {
    //   if (tempData === null) {
    //     profileData.cart.map(restaurant => {
    //       const Restaurant = fakeData.find((r) => r.Name === restaurant.name);
    //       const newPoint = { latitude: Number(Restaurant?.Longitud), longitude: Number(Restaurant?.Latitud) };
    //       setMarkers([...markers, newPoint]);
    //     })
    //   } else {
    //     const restaurant = fakeData.find((r) => r.Name === tempData);
    //     const newPoint = { latitude: Number(restaurant?.Longitud), longitude: Number(restaurant?.Latitud) };
    //     setMarkers([newPoint]);
    //   }
    // },[tempData])
  
  useFocusEffect(
    React.useCallback(() => {
      console.log("Pantalla enfocada");
    }, [])
  );

  const handleLocationUpdate = (location: { latitude: number, longitude: number }, address: string | null) => {
    setAddress(address);
    setLocationData(location)
  };

  const toggleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <GetLocation onLocationUpdate={handleLocationUpdate} />
      <HeaderStyle LocationBar={true} MenuBar={false} />
      {locationData !== null && (
        <MapView
          style={[{ height: tempData !== null ? '68%' : '80%' }, styles.map]}
          initialRegion={{
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
          }}
        >
          <Marker draggable coordinate={locationData} />
          {markers.map((point, idx) => <Marker key={idx} coordinate={point} />)}
        </MapView>
      )}
      {tempData !== null &&
        <View style={[{ marginTop: isOpen ? -200 : 5 }, { width: isOpen ? '100%' : '95%' },
        { height: isOpen ? 400 : 100 }, styles.LocateRestaurantsBar]}>
          <Text style={styles.header}>Comedores cexrcanos a ti</Text>
          {isOpen &&
            <ScrollView style={styles.RestaurantName}>
              {fakeData.map(e => {
                return (
                  <RestaurantName key={e.Name} Name={e.Name} src={require('../assets/Images/award-certificate.png')} />
                );
              })}
            </ScrollView>
          }
          <TouchableOpacity onPress={toggleOpenClose}>
            <Text style={styles.OpenClose}>{isOpen ? 'Cerrar' : 'Abrir'}</Text>
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2DCC2',
      alignItems: 'center',
    },
    map:{
        width: '95%',
        borderRadius:10,
    },
    LocateRestaurantsBar:{
      flex:1,
      zIndex:1,
      backgroundColor: '#875c3b',
      alignItems: 'center',
      width:'95%',
      borderRadius:10,
  },
  OpenClose:{
      color:'#F2DCC2',
      fontSize:22,
      marginTop:5,
  },
  header:{
      color:'#F2DCC2',
      fontSize:22,
      marginTop:5,
  },
  RestaurantName:{
      marginTop:10,
  }
  })

export default MapWithRestaurantLocations