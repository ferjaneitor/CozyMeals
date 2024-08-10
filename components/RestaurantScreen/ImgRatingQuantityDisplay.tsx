import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ImgRatingQuantityDisplayProps{
    src: any
    quantity:string
    RestaurantName: string
    rating:string
    price:number
}

const ImgRatingQuantityDisplay: React.FC<ImgRatingQuantityDisplayProps> = ({src,quantity, RestaurantName, rating, price}) => {
  return (
    <View style={styles.imgRatingQuantityDiv}>
      <View style={styles.foodImgDiv}>
        <Text style={styles.foodImgDivText}>Donador: {RestaurantName}</Text>
        <Image source={src} style={styles.foodImage}/>
      </View>
      <View style={styles.ratingQuantityDiv}>
        <Text style={styles.ratingQuantityText}>Cantidad: {quantity}</Text>
        <View style={styles.ratingDiv}>
            <Image source={require('../../assets/Images/star.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.priceView}>
            <Text style={styles.priceText}> Precio: </Text>
            <Text style={styles.priceText}> ${price} mxn </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imgRatingQuantityDiv: {
        flexDirection: 'row',
        marginBottom:30,
    },
    foodImgDiv: {
        paddingLeft: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    foodImgDivText: {
        fontSize: 18,
        color: '#513A2C',
        marginLeft: 0,
        width: 200,
    },
    foodImage: {
        width: '90%',
        height: 150,
        borderRadius: 15,
        marginTop: 20,
    },
    ratingQuantityDiv: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 0,
        width: '38%',
    },
    ratingQuantityText: {
        padding: 10,
        fontSize: 18,
        color: '#513A2C',
    },
    ratingDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A9744C',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#F2DCC2',
    },
    starIcon: {
        width: 20,
        height: 20,
        padding: 0,
    },
    ratingText: {
        fontSize: 20,
        color: '#feecd4',
        fontWeight: 'bold',
    },
    priceText:{
        fontSize:20,
        color: '#513A2C',
        marginTop:0,
    },
    priceView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
})


export default ImgRatingQuantityDisplay