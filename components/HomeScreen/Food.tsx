import { ScrollView } from 'react-native';
import React from 'react';
import FoodCard from './FoodCard';
import { fakeData } from '../../Data/fajeData';

interface FoodProps {
  supplies : Boolean
}

const Food: React.FC <FoodProps> = ({supplies}) => {
  return (
    <ScrollView horizontal={true}>
      {fakeData.map(e=>{
        return(
          e.Meals.map(e=>{
            if (e.Supplies === supplies) {
              return(
                <FoodCard 
                  src={e.Img}
                  title={e.Name}
                  description={e.Rating}
                />
              )
            }
          })
        )
      })}
    </ScrollView>
  );
}

export default Food;
