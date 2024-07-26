import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderStyle from '../components/HeaderStyle'
import { ScrollView } from 'react-native-gesture-handler'
import Summary from '../components/Cart/Summary'
import CartItemsDisplay from '../components/Cart/CartItemsDisplay'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <HeaderStyle LocationBar={false} MenuBar={true}/>
        <View style={styles.subContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tu Carrito</Text>
            </View>
            <ScrollView>
                <CartItemsDisplay/>
            </ScrollView>
            <Summary/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2DCC2',
        height:'100%',
        width:'100%',
    },
    subContainer:{
        alignItems:'center',
    },
    headerText:{
        fontSize:26,
        color: '#513A2C',
    },
    header:{
        borderWidth: 2,
        borderColor:'#513A2C',
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        padding: 5,
        marginVertical:20,
    },
})

export default CartScreen