import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderStyle from '../components/HeaderStyle'
import { ScrollView } from 'react-native-gesture-handler'
import Summary from '../components/Cart/Summary'
import CartItemsDisplay from '../components/Cart/CartItemsDisplay'
import { profileData } from '../Data/profileData'

const CartScreen = () => {
    const [cart, setCart] = useState([...profileData.cart]);

    useEffect(() => {
    const interval = setInterval(() => {
        setCart([...profileData.cart]);
    }, 100);
    return () => clearInterval(interval);
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <HeaderStyle LocationBar={false} MenuBar={true} />
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Tu Carrito</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {cart.map(cartItems => (
              <CartItemsDisplay 
                key={cartItems.name}  // Asegúrate de tener una key única
                foodName={cartItems.name} 
                restaurantName={cartItems.restaurant} 
                price={cartItems.price} 
                quantity={cartItems.quantity} 
              />
            ))}
          </ScrollView>
          <Summary />
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#feecd4',
        height:'100%',
        width:'100%',
    },
    subContainer:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerText:{
        fontSize:26,
        color: '#764134',
        fontWeight:'600'
    },
    header:{
        // borderWidth: 2,
        borderColor:'#513A2C',
        // borderBottomWidth: 0,
        // borderRightWidth: 0,
        // borderTopWidth: 0,
        padding: 5,
        marginVertical:20,
    },
    scrollView:{
        height:450,
    },
})

export default CartScreen