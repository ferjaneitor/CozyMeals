import { ScrollView } from 'react-native';
import React from 'react';
import FoodCard from './FoodCard';
import { fakeData } from '../../Data/fajeData';

const Food = () => {
  return (
    <ScrollView horizontal={true}>
      {fakeData.map(e=>{
        return(
          e.Meals.map(e=>{
            return(
              <FoodCard 
                src={e.Img}
                title={e.Name}
                description={e.Rating}
              />
            )
          })
        )
      })}
    </ScrollView>
  );
}

export default Food;
