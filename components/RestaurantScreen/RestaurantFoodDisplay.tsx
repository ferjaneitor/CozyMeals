import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ImgRatingQuantityDisplay from './ImgRatingQuantityDisplay';
import FoodGeneralInformation from './FoodGeneralInformation';
import { add2Cart } from '../../Data/profileData';
import { useNavigation } from '@react-navigation/native';

interface RestaurantFoodDisplayProps{
    title:string
    source: any
    quantity:string
    RestaurantName: string
    RestaurantType: String
    Description:string
    Ingredients: string[]
    Date:string
    ExpirationDate:string,
    rating:string,
    price:number
}

const RestaurantFoodDisplay: React.FC<RestaurantFoodDisplayProps> = ({
  title, 
  source,
  quantity, 
  RestaurantName, 
  RestaurantType, 
  Description,
  Ingredients,
  Date,
  ExpirationDate,
  rating,
  price,
}) => {

  const [isOpen,setIsOpen] = useState(false)
  const [isLiked,setIsLiked] = useState(require('../../assets/Images/heart-emtpy.png'))
  const [Quantity,setQuantity] = useState<number>(0)
  const [isOpenCart,setIsOpenCart] = useState(false)
  const navigation: any = useNavigation();

  const addQuantity = () => setQuantity(Quantity + 1);

  const removeQuantity = () => {
      if (Quantity > 0) { 
          setQuantity(Quantity - 1);
      }
  };  

  const OpenCloseDetails = () => setIsOpen(!isOpen);

  const OpenCloseCart = () => setIsOpenCart(!isOpenCart)

  const handleIconChange = () => {
    setIsLiked((prevState: string) => ( // Explicitly define prevState type
      prevState === require('../../assets/Images/heart-emtpy.png')
        ? require('../../assets/Images/heart.png')
        : require('../../assets/Images/heart-emtpy.png')
    ));
  };
  
  return (
    <View style={styles.restaurantFoodCardDiv}>
      <View style={styles.foodCardTopDiv}>
        <Text style={styles.foodTitle}>{title}</Text>
        <ImgRatingQuantityDisplay 
          src = {source} 
          quantity={quantity} 
          RestaurantName={RestaurantName}
          rating={rating}
          price={price}
        />
        {isOpen && (
          <FoodGeneralInformation
            RestaurantName={RestaurantName}
            RestaurantType={RestaurantType}
            Description={Description}
            Ingredients={Ingredients}
            Date={Date}
            ExpirationDate={ExpirationDate}
            Quantity={quantity}
          />
        )}
        <View style={styles.foodCardBottomDiv}>
        <View style={styles.heartDetailsDiv}>
            <TouchableOpacity onPressOut={()=>{handleIconChange()}}>
                <Image source={isLiked} style={styles.heartFood} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} onPress={()=>{OpenCloseDetails()}}>
                <Text style={styles.detailsButtonText} >{isOpen ? 'Cerrar Detalles' : 'Abrir Detalles'}</Text>
            </TouchableOpacity>
        </View>
          <TouchableOpacity onPress={() => OpenCloseCart()}>
              <View style={styles.checkOrder}>
                  <Text style={styles.checkOrderText}>Ordenar</Text>
                  <Image source={require('../../assets/Images/shopping-cart.png')} style={styles.cartIcon} />
              </View>
          </TouchableOpacity>
        </View>
        {isOpenCart &&(
        <View style={styles.cartView}>
          <Text style={styles.cartdescription}>¿Cuántos platos de esta comida te gustaría ordenar?</Text>
          <View style={styles.sumSubView}>
            <TouchableOpacity style={styles.sumSubButtom} onPress={ ()=> removeQuantity() }>
              <Text style={styles.sumSubText}> - </Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{Quantity}</Text>
            <TouchableOpacity style={styles.sumSubButtom} onPress={ ()=> addQuantity() }>
              <Text style={styles.sumSubText}> + </Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity style={styles.add2CartButtom} onPress={()=> {
                add2Cart(title, Quantity, price, RestaurantName)
                navigation.navigate('Cart')
              }}>
              <Text style={styles.add2CartText}>
                Agregar al Carrito
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  restaurantFoodCardDiv: {
      backgroundColor: '#e8c9a0',
      borderRadius: 10,
      padding: 20,
      width: '95%',
      marginBottom: 20,
    },
    foodCardTopDiv: {
      alignItems: 'center',
    },
    foodTitle: {
      fontSize: 30,
      color: '#513A2C',
      marginBottom: 10,
    },
    foodCardBottomDiv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 10,
      marginRight: 0,
  },
  heartDetailsDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  heartFood: {
      height: 50,
      width:50,
      padding: 0,
      marginLeft: 0,
      backgroundColor: '#A9744C',
      borderColor: '#F2DCC2',
      borderRadius: 6,
      borderWidth: 0,
  },
  detailsButton: {
      height: 54,
      paddingHorizontal: 10, // Ajusta el padding horizontal si es necesario
      marginLeft: 5,
      backgroundColor: '#A9744C',
      borderColor: '#F2DCC2',
      borderRadius: 6,
      borderWidth: 0,
      justifyContent: 'center',
      alignItems: 'center',
  },
  detailsButtonText: {
      color: '#F2DCC2',
      fontSize: 20,
  },
  checkOrder: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#A9744C',
      borderRadius: 6,
      padding: 5,
      borderWidth: 2,
      borderColor: '#F2DCC2',
      marginLeft:20,
  },
  checkOrderText: {
      color: '#F2DCC2',
      fontSize: 18,
      padding: 0,
  },
  cartIcon: {
      height: 40,
      padding: 0,
  },
  cartView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  sumSubView:{
    width:250,
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  sumSubButtom:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#A9744C',
    borderRadius: 10,
    height:50,
    width:60,
  },
  sumSubText:{
    color:'#F2DCC2',
    fontSize:30,
  },
  add2CartText:{
    color:'#F2DCC2',
    fontSize:22,
  },
  add2CartButtom:{
    marginTop:20,
    backgroundColor: '#A9744C',
    borderRadius: 10,
    paddingVertical:10,
    paddingHorizontal:40,

  },
  quantityText:{
    color:'#513A2C',
    fontSize:30,
  },
  cartdescription:{
    marginVertical:10,
    color:'#513A2C',
    fontSize:20,
    width:250,
  },
})

export default RestaurantFoodDisplay