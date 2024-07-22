import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ImgRatingQuantityDisplayProps{
    src: any
    quantity:number
    RestaurantName: string
}

const ImgRatingQuantityDisplay: React.FC<ImgRatingQuantityDisplayProps> = ({src,quantity, RestaurantName}) => {
  return (
    <View style={styles.imgRatingQuantityDiv}>
      <View style={styles.foodImgDiv}>
        <Text style={styles.foodImgDivText}>Donador: Cocina Economica</Text>
        <Image source={src} style={styles.foodImage}/>
      </View>
      <View style={styles.ratingQuantityDiv}>
        <Text style={styles.ratingQuantityText}>Cantidad: {quantity}</Text>
        <View style={styles.ratingDiv}>
            <Image source={require('../../assets/Images/star.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imgRatingQuantityDiv: {
        flexDirection: 'row',
    },
    foodImgDiv: {
        paddingLeft: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    foodImgDivText: {
        fontSize: 20,
        color: '#F2DCC2',
        marginLeft: 10,
    },
    foodImage: {
        width: '90%',
        borderRadius: 15,
        marginTop: 20,
    },
    ratingQuantityDiv: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        width: 200,
    },
    ratingQuantityText: {
        padding: 10,
        fontSize: 20,
        color: '#F2DCC2',
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
        padding: 6,
    },
    ratingText: {
        fontSize: 30,
        color: '#F2DCC2',
        fontWeight: 'bold',
    },
})


export default ImgRatingQuantityDisplay