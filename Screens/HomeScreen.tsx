import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/HomeScreen/SearchBar';
import Restaurants from '../components/HomeScreen/Restaurants';
import Food from '../components/HomeScreen/Food';
import HorizontalScrollerTitle from '../components/HomeScreen/HorizontalScrollerTitle';
import HeaderStyle from '../components/HeaderStyle';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <HeaderStyle LocationBar={true} MenuBar={true}/>

        {/* Search Bar */}
        <SearchBar/>

        {/* Restaurants Section */}
        <View style={styles.restaurantsDiv}>
          <HorizontalScrollerTitle title={'Restaurantes Destacados'}/>
          <Restaurants/>
        </View>

        {/* Food Section */}
        <View style={styles.foodDiv}>
          <HorizontalScrollerTitle title={'Comidas y Platillos'}/>
          <Food supplies={false}/>
        </View>

        {/* supplies Section */}
        <View style={styles.foodDiv}>
          <HorizontalScrollerTitle title={'Insumos y Despensa'}/>
          <Food supplies={true}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DCC2'
  },
  restaurantsDiv: {
    marginTop: 40,
    alignItems: 'center'
  },
  foodDiv: {
    alignItems: 'center'
  },
})

export default HomeScreen;