import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

interface FoodGeneralInformationProps{
  RestaurantName: string
  RestaurantType: String
  Description:string
  Ingredients: string[]
  Date: string
  ExpirationDate: string
  Quantity:string
}

const FoodGeneralInformation: React.FC<FoodGeneralInformationProps> = ({
  RestaurantName,
  RestaurantType,
  Description,
  Ingredients,
  Date,
  ExpirationDate,
  Quantity
}) => {
  return (
    <View style={styles.generalInformationDiv}>
      <View style={styles.restaurantGeneralInfoDiv}>
        <View>
          <Text style={styles.vendedorText}>Vendedor</Text>
          <View style={styles.imgNameDiv}>
            <Image source={require('../../assets/Images/profile.png')} style={styles.restaurantProfilePhoto}/>
            <View style={styles.restaurantNameTypeDiv}>
              <Text style={styles.restaurantName}>{RestaurantName}</Text>
              <Text style={styles.restaurantType}>{RestaurantType}</Text>
            </View>
            <View style={styles.restaurantContactInfoDiv}>
              <Image source={require('../../assets/Images/chat.png')} style={styles.contactIcon} />
              <Image source={require('../../assets/Images/phone-call.png')} style={styles.contactIcon} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.descriptionDiv}>
        <Text style={styles.descriptionHeader}>Descripción</Text>
        <Text style={styles.descriptionText}>
          {Description}
        </Text>
      </View>
      <View style={styles.ingredientesInfoGeneralDiv}>
        <View>
          <Text style={styles.ListaDeIngredientesText}>Lista de ingredientes:</Text>
          <View style={styles.ListaDeIngredientes}>
            {Ingredients.map((element, index) => (
              <Text key={index}>
                - {element}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.generalInfo}>
          <Text>
            <Text style={{ textDecorationLine: 'underline' }}>Fecha de producción:</Text> {Date}
          </Text>
          <Text>
            <Text style={{ textDecorationLine: 'underline' }}>Caducidad:</Text> {ExpirationDate}
          </Text>
          <Text>
            <Text style={{ textDecorationLine: 'underline' }}>Cantidad disponible:</Text> {Quantity}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  generalInformationDiv: {
      backgroundColor: '#fef4f0',
      padding: 0,
      borderRadius: 10,
      width: '100%',
  },
  restaurantGeneralInfoDiv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
  },
  vendedorText: {
      fontWeight: 'bold',
      color: '#513A2C',
      marginLeft: 10,
      fontSize: 20,
      marginBottom: 10,
      width:100,
  },
  imgNameDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
  },
  restaurantProfilePhoto: {
      width: 25,
      height: 25,
      marginRight: 5,
  },
  restaurantNameTypeDiv: {
      flexDirection: 'column',
      marginLeft: 0,
  },
  restaurantName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#513A2C',
      width:150,
  },
  restaurantType: {
      fontSize: 12,
      color: '#513A2C',
  },
  contactIcon: {
      width: 25,
      height: 25,
      marginLeft: 10,
  },
  restaurantContactInfoDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:40,
  },
  descriptionDiv: {
      margin: 20,
  },
  descriptionHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#513A2C',
      marginBottom: 10,
  },
  descriptionText: {
      fontSize: 16,
      color: '#513A2C',
      marginTop: 20,
  },
  ingredientesInfoGeneralDiv: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 20,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderWidth: 1,
      padding: 30,
      color: '#513A2C',
  },
  ListaDeIngredientesText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#513A2C',
      marginBottom: 10,
  },
  ListaDeIngredientes: {
      flexDirection: 'column',
      marginLeft: 20,
  },
  generalInfo: {
      marginTop:30,
      flexDirection: 'column',
  },
})


export default FoodGeneralInformation