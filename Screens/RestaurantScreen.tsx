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
      <HeaderStyle LocationBar={false} MenuBar={false}/>
      <ScrollView contentContainerStyle={styles.mainBody}>
        <View style={styles.RestaurantTitleView}>
          {fakeData.map(e=>{
            if (e.Name === tempData) {
              return(
                <Image source={e.Img} style={styles.RestaurantTitleImage}/>
              )
            }
          })}
          <Text style={styles.RestauranteTitleText}>{tempData}</Text>
        </View>
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
                  price={meal.Price}
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
  RestaurantTitleView:{
    justifyContent:'center',
    alignItems:'center',
    height:200,
    width:'100%',
    marginBottom:40,
  },
  RestauranteTitleText:{
    backgroundColor: '#513A2C',
    fontSize:20,
    marginTop:-20,
    color: '#F2DCC2',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:8,
  },
  RestaurantTitleImage:{
    height:'90%',
    width:'90%',
    borderRadius:10,
  }
});

export default RestaurantScreen;
