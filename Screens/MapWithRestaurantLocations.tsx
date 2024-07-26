import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderStyle from '../components/HeaderStyle'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import RestaurantName from '../components/MapScreen/RestaurantName'
import GetLocation from '../Scripts/GetLocation'
import { fakeData } from '../Data/fajeData'
import { useAppContext } from '../Scripts/AppContext'
import { profileData } from '../Data/profileData'

const MapWithRestaurantLocations = () => {
  
    const [locationData, setLocationData] = useState<{ latitude: number, longitude: number } | null>(null);
    const [address, setAddress] = useState<string | null>(null);
  
    const handleLocationUpdate = (location: {latitude:number, longitude:number },address: string | null ) => {
      console.log("🚀 ~ handleLocationUpdate ~ location:", location)
      setLocationData(location)
      setAddress(address)
    }
  
    const [isOpen,setIsOpen] = useState(false)
    const {tempData} = useAppContext()
    console.log("🚀 ~ MapWithRestaurantLocations ~ tempData:", tempData)
  
    const OpenClose = () =>{
        setIsOpen(!isOpen)
    }
  
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

      let location: {latitude:number, longitude:number }
      location = {
        latitude: 20.6753, // Latitud de la Ciudad de México
        longitude: -101.4195 // Longitud de la Ciudad de México
      };
  
      console.log("rendering template")
    return (
      <SafeAreaView style={styles.container}>
        <GetLocation onLocationUpdate={handleLocationUpdate}/>
          <HeaderStyle LocationBar={true} MenuBar={false}/>
          {locationData !== null && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.09,
              }}>
                <Marker draggable coordinate={locationData}/>
                {(tempData === null) ? (
                    fakeData.map(locations => {
                        if (profileData.cart.some(item => item.name === locations.Name))  {
                            const markerLocation = {
                                latitude: locations.Latitud,
                                longitude: locations.Longitud
                            }
                            return (
                                <Marker coordinate={markerLocation} pinColor='#000000' />
                            )
                        }
                    })
                ) : (
                    fakeData.map(locations => {
                        if (locations.Name === tempData) {
                            const markerLocation = {
                                latitude: locations.Latitud,
                                longitude: locations.Longitud
                            }
                            return (
                                <Marker coordinate={markerLocation} pinColor='#00000'/>
                            )
                        }
                    })
                )}
              </MapView>
          )}
            <View style={[{ marginTop: isOpen ? -200 : 5 },{ width: isOpen ? '100%' : '95%' },
                { height: isOpen ? 400 : 100 }, styles.LocateRestaurantsBar]}>
            <Text style={styles.header}>Comedores cercanos a ti</Text>
            {isOpen && 
                <ScrollView style={styles.RestaurantName}>
                    <RestaurantName Name='Cocina Economica' src={require('../assets/Images/award-certificate.png')}/>
                    {fakeData.map(e => {
                        return(
                        <RestaurantName Name={e.Name} src={require('../assets/Images/award-certificate.png')}/>
                        )
                    })}
                </ScrollView>
                }
                <TouchableOpacity onPress={()=>{OpenClose()}}>
                    <Text style={styles.OpenClose}>{isOpen ? 'Cerrar' : 'Abrir'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F2DCC2',
        alignItems: 'center',
      },
      map:{
          height: '68%',
          width: '95%',
          borderRadius:10,
      },
      LocateRestaurantsBar:{
        flex:1,
        zIndex:1,
        backgroundColor: '#5c3c29',
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