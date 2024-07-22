import { ScrollView } from 'react-native';
import React from 'react';
import FoodCard from './FoodCard';

const Food = () => {
  return (
    <ScrollView horizontal={true}>
      <FoodCard 
        src={require('../../assets/Images/bx928xenrwxyd44pgyza.webp')}
        title={'Tamales'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/images.jpeg')}
        title={'Sopitos'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/bx928xenrwxyd44pgyza.webp')}
        title={'Tamales'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/images.jpeg')}
        title={'Sopitos'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/bx928xenrwxyd44pgyza.webp')}
        title={'Tamales'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/images.jpeg')}
        title={'Sopitos'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/bx928xenrwxyd44pgyza.webp')}
        title={'Tamales'}
        description={'Preparados: 7/17/2024'}
      />
      <FoodCard 
        src={require('../../assets/Images/images.jpeg')}
        title={'Sopitos'}
        description={'Preparados: 7/17/2024'}
      />
    </ScrollView>
  );
}

export default Food;
