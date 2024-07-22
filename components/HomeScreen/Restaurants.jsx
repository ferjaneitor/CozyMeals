import { ScrollView } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  return (
    <ScrollView horizontal={true}>
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
      <RestaurantCard 
        src={require('../../assets/Images/sombrillas-restaurantes-en-centro-de-colima.webp')} 
        title={'Platillos Saludables'} 
        description={'Restaurante local'} 
      />
    </ScrollView>
  )
}

export default Restaurants;
