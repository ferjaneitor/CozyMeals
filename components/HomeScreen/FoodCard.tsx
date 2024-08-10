import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppContext } from '../../Scripts/AppContext';
import { useNavigation } from '@react-navigation/native';

interface FoodCardProps {
  src: any; // change to any to accommodate require
  title: string;
  description: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ src, title, description }) => {

  const navigation: any = useNavigation();

  const {setTempData} = useAppContext()

  return (
    <TouchableOpacity onPress={()=> {
      setTempData(title)
      navigation.navigate('EspecificMeal')
      console.log("🚀 ~ setTempData:", setTempData)
      console.log("🚀 ~ title:", title)
    }}>
      <View style={styles.individualFoodDisplayImgDiv}>
        <Image source={src} style={styles.foodDisplayImg} />
        <View style={styles.foodDescriptionDiv}>
          <Text style={styles.foodHeader}>{title}</Text>
          <Text style={styles.foodDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  foodDisplayImgDiv: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  individualFoodDisplayImgDiv: {
    margin: 10
  },
  foodDisplayImg: {
    height: 150,
    width: 150,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  foodDescriptionDiv: {
    backgroundColor: '#A9744C',
    position: 'relative',
    bottom: 20,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foodHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'500'
  },
  foodDescription: {
    color: '#fff',
    fontSize: 12,
    fontWeight:'400'
  }
});

export default FoodCard;
