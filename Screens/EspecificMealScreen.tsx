import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../Scripts/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fakeData } from '../Data/fajeData';
import ImgRatingQuantityDisplay from '../components/RestaurantScreen/ImgRatingQuantityDisplay';
import FoodGeneralInformation from '../components/RestaurantScreen/FoodGeneralInformation';
import { add2Cart } from '../Data/profileData';

const EspecificMealScreen = () => {

    const navigation: any = useNavigation();
    const [isLiked,setIsLiked] = useState(require('../assets/Images/heart-emtpy.png'))
    const {tempData} = useAppContext()
    const [isOpenCart,setIsOpenCart] = useState(false)
    const [Quantity,setQuantity] = useState<number>(0)

    const addQuantity = () => setQuantity(Quantity + 1);

    const removeQuantity = () => {
        if (Quantity > 0) { 
            setQuantity(Quantity - 1);
        }
    };  

    const OpenCloseCart = () => setIsOpenCart(!isOpenCart)

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

    const handleIconChange = () => {
        setIsLiked((prevState: string) => ( // Explicitly define prevState type
            prevState === require('../assets/Images/heart-emtpy.png')
            ? require('../assets/Images/heart.png')
            : require('../assets/Images/heart-emtpy.png')
        ));
    };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {fakeData.map((dataItem, dataIndex) => {
                return dataItem.Meals.map((Meal, mealIndex) => {
                    if (Meal.Name === tempData) {
                        return (
                            <View style={styles.restaurantFoodCardDiv} key={`${dataIndex}-${mealIndex}`}>
                                <View style={styles.foodCardTopDiv}>
                                    <Text style={styles.foodTitle}>{Meal.Name}</Text>
                                    <ImgRatingQuantityDisplay 
                                        src = {Meal.Img} 
                                        quantity={Meal.Quantity} 
                                        RestaurantName={Meal.RestaurantName}
                                        rating={Meal.Rating}
                                        price={Meal.Price}
                                    />
                                        <FoodGeneralInformation
                                        RestaurantName={Meal.RestaurantName}
                                        RestaurantType={Meal.RestaurantType}
                                        Description={Meal.Description}
                                        Ingredients={Meal.IngridientsList}
                                        Date={Meal.ProductionDate}
                                        ExpirationDate={Meal.ExpirationDate}
                                        Quantity={Meal.Quantity}
                                        />
                                    <View style={styles.foodCardBottomDiv}>
                                    <View style={styles.heartDetailsDiv}>
                                        <TouchableOpacity onPressOut={()=>{handleIconChange()}}>
                                            <Image source={isLiked} style={styles.heartFood} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => OpenCloseCart()}>
                                        <View style={styles.checkOrder}>
                                            <Text style={styles.checkOrderText}>Ordenar</Text>
                                            <Image source={require('../assets/Images/shopping-cart.png')} style={styles.cartIcon} />
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
                                            add2Cart(Meal.Name, Quantity, Meal.Price, Meal.RestaurantName)
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
                        );
                    }
                    return null; // Agregar un retorno nulo para evitar advertencias de React
                });
            })}
        </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F2DCC2',
    },
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
        color:'#F2DCC2',
        fontSize:30,
      },
      cartdescription:{
        marginVertical:10,
        color:'#F2DCC2',
        fontSize:20,
        width:250,
      },
})

export default EspecificMealScreen