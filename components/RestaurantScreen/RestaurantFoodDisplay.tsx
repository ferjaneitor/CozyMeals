import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ImgRatingQuantityDisplay from './ImgRatingQuantityDisplay';
import FoodGeneralInformation from './FoodGeneralInformation';

interface RestaurantFoodDisplayProps{
    title:string
    source: any
    quantity:number
    RestaurantName: string
    RestaurantType: String
    Description:string
    Ingredients: string[]
    Date:string
    ExpirationDate:string,
    rating:number,
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
}) => {

  const [isOpen,setIsOpen] = useState(false)
  const [isLiked,setIsLiked] = useState(require('../../assets/Images/heart-emtpy.png'))

  const OpenCloseDetails = () => {
    setIsOpen(!isOpen);
  };

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
        <TouchableOpacity>
            <View style={styles.checkOrder}>
                <Text style={styles.checkOrderText}>Ordenar</Text>
                <Image source={require('../../assets/Images/shopping-cart.png')} style={styles.cartIcon} />
            </View>
        </TouchableOpacity>
    </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    restaurantFoodCardDiv: {
        backgroundColor: '#513A2C',
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
        color: '#F2DCC2',
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
})

export default RestaurantFoodDisplay