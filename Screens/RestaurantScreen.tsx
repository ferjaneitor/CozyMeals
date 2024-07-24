import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RestaurantFoodDisplay from '../components/RestaurantScreen/RestaurantFoodDisplay';
import HeaderStyle from '../components/HeaderStyle';
import { AppContext, useAppContext } from '../Scripts/AppContext';
import { fakeData } from '../Data/fajeData';

const RestaurantScreen= () => {

  const {tempData} = useAppContext()
  console.log("🚀 ~ RestaurantScreen ~ tempData:", tempData)

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <HeaderStyle LocationBar={false}/>
      <ScrollView contentContainerStyle={styles.mainBody}>
        <Text style={styles.ultimasDonacionesText}>| Últimas Donaciones</Text>
        {fakeData.map(dataItem => {
            if(dataItem.Name === tempData){
              return dataItem.Meals.map(meal => (
                <RestaurantFoodDisplay 
                  key={meal.Name} // Añadir una key es importante para listas en React
                  title={meal.Name}
                  source={meal.Img}
                  quantity={meal.Quantity}
                  RestaurantName={meal.RestaurantName}
                  RestaurantType={meal.RestaurantType}
                  Description={meal.Description}
                  Ingredients={meal.IngridientsList}
                  Date={meal.ProductionDate}
                  ExpirationDate={meal.ExpirationDate}
                  rating={meal.Rating}
                />
              ));
            }
          })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DCC2',
  },
  mainBody: {
    alignItems: 'center',
    marginTop: 20,
  },
  ultimasDonacionesText: {
    fontSize: 20,
    fontFamily: 'Merienda_700Bold',
    color: '#372012',
    marginBottom: 20,
  },
});

export default RestaurantScreen;
