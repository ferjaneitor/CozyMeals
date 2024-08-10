import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { removeFromCart, updateQuantity } from '../../Data/profileData';

interface CartItemsDisplayProps{
    foodName:string
    restaurantName:string
    price:number
    quantity:number
}

const CartItemsDisplay: React.FC<CartItemsDisplayProps> = ({foodName,restaurantName, price,quantity}) => {

    const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mealRestaurantPriceView}>
        <Text style={styles.foodName}>
            {foodName}
        </Text>
        <View style={styles.restaurantPriceView}>
            <Text style={styles.restaurantName}>
                {restaurantName}
            </Text>
            <View style={styles.priceView}>
                <Text style={styles.price}>
                    {price}
                </Text>
            </View>
        </View>
      </View>
      <View style={styles.addRemoveView}>
        <TouchableOpacity style={styles.addRemoveButtom} onPress={()=>{
            navigation.navigate('home')
            updateQuantity( foodName ,false)
        }}>
            <Text style={styles.addRemoveButtomText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>
            {quantity}
        </Text>
        <TouchableOpacity style={styles.addRemoveButtom} onPress={()=>{
            navigation.navigate('home')
            updateQuantity( foodName ,true)
        }}>
            <Text style={styles.addRemoveButtomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('home')
            removeFromCart(foodName)
        }}>
            <Image source={require('../../assets/Images/trash-can.png')} style={styles.removeIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#e8c9a0',
        marginVertical:15,
        flexDirection:'row',
        width:350,
        borderRadius:10,
    },
    foodName:{
        color: '#513A2C',
        marginBottom:10,
        fontSize:20,
        fontWeight:'600',
    },
    restaurantName:{
        color: '#513A2C',
        fontSize:14,
        width:140,
        fontWeight:'500',
    },
    price:{
        color: '#513A2C',
        fontSize:14,
        marginLeft:10,
    },
    addRemoveButtom:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        marginHorizontal:15,
        backgroundColor: '#F2DCC2',
        borderRadius:5,
        width:20,
    },
    addRemoveButtomText:{
        fontSize:18,
        verticalAlign:'middle',
        textAlign:'center'
    },
    quantity:{
        color: '#513A2C',
        fontSize:20,
    },
    removeIcon:{
        width:20,
        height:20,
    },
    restaurantPriceView:{
        flexDirection:'row',
    },
    mealRestaurantPriceView:{
        marginLeft:15,
        marginVertical:15,
        width:180,
    },
    priceView:{
        borderWidth:2,
        borderColor: '#513A2C',
        borderTopWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        marginLeft:15,
        alignContent:'center',
        justifyContent:'center',
    },
    addRemoveView:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        marginRight:10
    },
})

export default CartItemsDisplay