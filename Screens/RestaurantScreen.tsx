import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RestaurantFoodDisplay from '../components/RestaurantScreen/RestaurantFoodDisplay';
import HeaderStyle from '../components/HeaderStyle';

const RestaurantScreen= () => {
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
        <RestaurantFoodDisplay 
          title='Tamal'
          source={require('../assets/Images/bx928xenrwxyd44pgyza.webp')}
          quantity={5}
          RestaurantName='Cocina Economica'
          RestaurantType='Restaurante'
          Description='Es un plato tradicional de la cocina latinoamericana. Consisten en masa de maíz rellena con una variedad de ingredientes, como carne de cerdo o pollo, chiles, verduras, y se envuelven en hojas de maíz o plátano para luego ser cocidos al vapor. Los tamales son un alimento muy versátil y popular en celebraciones especiales, y cada región tiene su propia versión única de este delicioso platillo. ¡Son una delicia que no te puedes perder!'
          Ingredients={['Masa de Maiz','Relleno de Carne de Puerco','Salsa Roja', 'Bolsa de Salsa (Opcional)']}
          Date='22 de Julio del 2024'
          ExpirationDate='25 de julio del 2024'
          rating={4.5}
        />
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
