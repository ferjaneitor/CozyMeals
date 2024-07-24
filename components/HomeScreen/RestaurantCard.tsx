import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppContext, useAppContext } from '../../Scripts/AppContext';

interface RestaurantCardProps {
  src: any;
  title: string;
  description: string;
}


const RestaurantCard: React.FC<RestaurantCardProps> = ({ src, title, description }) => {
  const navigation: any = useNavigation();

  const {setTempData} = useAppContext()


  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant')
        setTempData(title)
        console.log("🚀 ~ handlePress ~ title:", title)
        console.log("🚀 ~ handlePress ~ setTempData:", setTempData)
      }}
    >
      <View style={styles.restaurantDisplayImgDiv}>
        <Image source={src} style={styles.restaurantImage} />
        <View style={styles.restaurantDisplayTextDiv}>
          <Text style={styles.restaurantHeader}>{title}</Text>
          <Text style={styles.restaurantDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantDisplayImgDiv: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  restaurantImage: {
    borderRadius: 30,
    width: 300,
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  restaurantDisplayTextDiv: {
    backgroundColor: '#A9744C',
    position: 'relative',
    bottom: 20,
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantHeader: {
    fontSize: 25,
    color: '#fff',
  },
  restaurantDescription: {
    fontSize: 18,
    color: '#fff',
  },
});

export default RestaurantCard;
