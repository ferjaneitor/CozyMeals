import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

interface FoodGeneralInformationProps{
  RestaurantName: string
  RestaurantType: String
  Description:string
  Ingredients: string[]
  Date: string
  ExpirationDate: string
  Quantity:number
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
      padding: 20,
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
  },
  imgNameDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
  },
  restaurantProfilePhoto: {
      width: 30,
      height: 30,
      padding: 5,
      marginRight: 5,
  },
  restaurantNameTypeDiv: {
      flexDirection: 'column',
      marginLeft: 10,
  },
  restaurantName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#513A2C',
  },
  restaurantType: {
      fontSize: 12,
      color: '#513A2C',
  },
  contactIcon: {
      width: 25,
      height: 25,
      padding: 10,
      marginRight: 15,
  },
  restaurantContactInfoDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
      fontSize: 18,
      color: '#513A2C',
      marginTop: 20,
  },
  ingredientesInfoGeneralDiv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
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
      marginLeft: 40,
  },
  generalInfo: {
      flexDirection: 'column',
  },
})


export default FoodGeneralInformation