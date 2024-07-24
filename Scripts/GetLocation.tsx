import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

interface GetLocationProps {
    onLocationUpdate: (location: { latitude: number, longitude: number }, address: string | null) => void;
}

const GetLocation: React.FC<GetLocationProps> = ({ onLocationUpdate }) => {
    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
    const [address, setAddress] = useState<string | null>(null);

     // Función para obtener la dirección a partir de las coordenadas usando reverseGeocodeAsync
     const getAddress = async (latitude: number, longitude: number) => {
        try {
            let addressArray = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });
                console.log("🚀 ~ getAddress ~ longitude:", longitude)
                console.log("🚀 ~ getAddress ~ latitude:", latitude)
            console.log("🚀 ~ getAddress ~ addressArray:", addressArray)
            if (addressArray.length > 0) {
                const address = addressArray[0];
                const formattedAddress = `${address.street || ''}, ${address.city || ''}, ${address.region || ''}, ${address.country || ''}`;
                console.log("🚀 ~ getAddress ~ formattedAddress:", formattedAddress)
                onLocationUpdate({ latitude, longitude }, formattedAddress);
            } else {
                onLocationUpdate({ latitude, longitude }, 'No address found');
            }
        } catch (error) {
            console.error(error);
            onLocationUpdate({ latitude, longitude }, 'Error getting address');
        }
    };

    const getLocation = useCallback(async () => {
        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
        await getAddress(coords.latitude, coords.longitude);
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
            console.log("estoy dentro del useEffect")

            // Get location immediately on component mount
            getLocation();

            // // Set interval to get location every 5 seconds
            // const intervalId = setInterval(getLocation, 5000);

            // // Clear interval on component unmount
            // return () => clearInterval(intervalId);
        })();
    }, [getLocation]);

    return null

};

export default GetLocation;
