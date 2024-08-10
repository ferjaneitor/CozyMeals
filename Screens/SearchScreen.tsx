import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useAppContext } from '../Scripts/AppContext'
import { fakeData } from '../Data/fajeData'
import ImgRatingQuantityDisplay from '../components/RestaurantScreen/ImgRatingQuantityDisplay'
import FoodGeneralInformation from '../components/RestaurantScreen/FoodGeneralInformation'
import { add2Cart } from '../Data/profileData'
import { useNavigation } from '@react-navigation/native';
import HeaderStyle from '../components/HeaderStyle'

const SearchScreen = () => {

    const {Search} = useAppContext()

    const lowerCase : string = Search.toLowerCase()
    const SearchInput : string = lowerCase.trim()
    const navigation: any = useNavigation();
    const [isLiked,setIsLiked] = useState(require('../assets/Images/heart-emtpy.png'))
    const [isOpenCart,setIsOpenCart] = useState(false)
    const [Quantity,setQuantity] = useState<number>(0)
    const [isOpen,setIsOpen] = useState(false)

    const addQuantity = () => setQuantity(Quantity + 1);
    const OpenCloseDetails = () => setIsOpen(!isOpen);

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
        <HeaderStyle LocationBar={false} MenuBar={false}/>
        <ScrollView>
            {fakeData.map((dataItem, dataIndex) => {
                return dataItem.Meals.map((Meal, mealIndex) => {
                    if (Meal.Name.includes(SearchInput)) {
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
                                        <TouchableOpacity style={styles.detailsButton} onPress={()=>{OpenCloseDetails()}}>
                                            <Text style={styles.detailsButtonText} >{isOpen ? 'Cerrar Detalles' : 'Abrir Detalles'}</Text>
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
        height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#feecd4',
    },
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
        backgroundColor: '#A9744C',
        borderColor: '#A9744C',
        borderRadius: 6,
        borderWidth: 0,
    },
    checkOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A9744C',
        borderRadius: 6,
        padding: 6,
        borderWidth: 0,
        borderColor: '#F2DCC2',
        marginLeft:20,
    },
    checkOrderText: {
        color: '#feecd4',
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
        color:'#feecd4',
        fontSize:30,
      },
      add2CartText:{
        color:'#feecd4',
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
})

export default SearchScreen