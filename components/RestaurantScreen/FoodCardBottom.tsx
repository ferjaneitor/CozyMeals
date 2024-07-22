import React, { useLayoutEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Merienda_400Regular,Merienda_700Bold } from '@expo-google-fonts/merienda';
import { LondrinaOutline_400Regular } from '@expo-google-fonts/londrina-outline';
import AppLoading from 'expo-app-loading';

const FoodCardBottom = () => {
  return (
    <View style={styles.foodCardBottomDiv}>
      <View style={styles.heartDetailsDiv}>
        <Image source={require('../../assets/Images/heart-emtpy.png')} style={styles.heartFood} />
        <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Detalles</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.checkOrder}>
            <Text style={styles.checkOrderText}>Ordenar</Text>
            <Image source={require('../../assets/Images/shopping-cart.png')} style={styles.cartIcon} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    foodCardBottomDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
    },
    heartDetailsDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heartFood: {
        height: 40,
        padding: 5,
        marginLeft: 20,
        backgroundColor: '#A9744C',
        borderColor: '#F2DCC2',
        borderRadius: 6,
        borderWidth: 2,
    },
    detailsButton: {
        height: 54,
        padding: 5,
        marginLeft: 10,
        backgroundColor: '#A9744C',
        borderColor: '#F2DCC2',
        borderRadius: 6,
        borderWidth: 2,
        fontSize: 22,
        color: '#F2DCC2',
    },
    detailsButtonText: {
        color: '#F2DCC2',
        fontSize: 22,
    },
    checkOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A9744C',
        borderRadius: 6,
        padding: 10,
        borderWidth: 2,
        borderColor: '#F2DCC2',
    },
    checkOrderText: {
        color: '#F2DCC2',
        fontSize: 22,
        padding: 5,
    },
    cartIcon: {
        height: 40,
        padding: 5,
    },
})


export default FoodCardBottom