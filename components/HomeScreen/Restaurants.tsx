import { ScrollView } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';
import { fakeData } from '../../Data/fajeData';

const Restaurants = () => {
  return (
    <ScrollView horizontal={true}>
      {fakeData.map(e=>{
        return(
          <RestaurantCard
            key={e.Name} 
            src={e.Img} 
            title={e.Name} 
            description={e.Type} 
          />
        )
      })}
    </ScrollView>
  )
}

export default Restaurants;
