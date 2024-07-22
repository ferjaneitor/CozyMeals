import React, { useLayoutEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Merienda_400Regular,Merienda_700Bold } from '@expo-google-fonts/merienda';
import { LondrinaOutline_400Regular } from '@expo-google-fonts/londrina-outline';
import AppLoading from 'expo-app-loading';
import ImgRatingQuantityDisplay from './ImgRatingQuantityDisplay';
import FoodGeneralInformation from './FoodGeneralInformation';
import FoodCardBottom from './FoodCardBottom';

interface RestaurantFoodDisplayProps{
    title:string
    source: any
    quantity:number
    RestaurantName: string
    RestaurantType: String
    Description:string
    Ingredients: string[]
    Date:string
    ExpirationDate:string
}

const RestaurantFoodDisplay: React.FC<RestaurantFoodDisplayProps> = ({
  title, 
  source,
  quantity, 
  RestaurantName, 
  RestaurantType, 
  Description,
  Ingredients,
  Date,
  ExpirationDate,
}) => {
  return (
    <View style={styles.restaurantFoodCardDiv}>
      <View style={styles.foodCardTopDiv}>
        <Text style={styles.foodTitle}>{title}</Text>
        <ImgRatingQuantityDisplay 
          src = {source} 
          quantity={quantity} 
          RestaurantName={RestaurantName}
        />
        <FoodGeneralInformation 
          RestaurantName={RestaurantName} 
          RestaurantType={RestaurantType} 
          Description={Description}
          Ingredients={Ingredients}
          Date={Date}
          ExpirationDate={ExpirationDate}
          Quantity={quantity}
        />
        <FoodCardBottom/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    restaurantFoodCardDiv: {
        backgroundColor: '#513A2C',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        marginBottom: 20,
      },
      foodCardTopDiv: {
        alignItems: 'center',
      },
      foodTitle: {
        fontSize: 20,
        color: '#F2DCC2',
        marginBottom: 10,
      },
})

export default RestaurantFoodDisplay