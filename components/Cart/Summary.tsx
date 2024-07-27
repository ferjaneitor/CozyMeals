import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../Scripts/AppContext';
import { totalPrice } from '../../Data/profileData';

const Summary = () => {

    const navigation: any = useNavigation();
    const {setTempData} = useAppContext()

  return (
    <View style={Styles.container}>
      <View style={Styles.TotalPriceView}>
        <Text style={Styles.TotalText}>
            Total
        </Text>
        <Text style={Styles.Price}>
            ${totalPrice()}
        </Text>
      </View>
      <Text style={Styles.ExtraText}>
        Por ahora solo efectivo. Pagos con tarjeta próximamente.
      </Text>
      <View style={Styles.OrderView}>
        <TouchableOpacity style={Styles.OrderButton} onPress={()=>{
            navigation.navigate('MapWithRestaurantLocations')
        }}>
            <Text style={Styles.OrderButtonText}>
                Finalizar Orden
            </Text>
        </TouchableOpacity >
        <TouchableOpacity style={Styles.OrderButton} onPress={()=>{
            navigation.navigate('Home')
            setTempData(null)
        }}>
            <Text style={Styles.OrderButtonText}>
                Continuar Ordenando
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        width:350,
    },
    TotalText:{
        fontWeight:'bold',
        fontSize:20,
        color: '#513A2C',
    },
    Price:{
        fontSize:20,
        fontWeight:'bold',
        color: '#513A2C',
    },
    OrderButton:{
        backgroundColor:'#513A2C',
        paddingHorizontal:6,
        paddingVertical:10,
        borderRadius:10,
    },
    OrderButtonText:{
        fontSize:20,
        color: '#F2DCC2',
    },
    ExtraText:{
        fontSize:14,
        color: '#513A2C',
    },
    OrderView:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:350
    },
    TotalPriceView:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:300
    },
})

export default Summary