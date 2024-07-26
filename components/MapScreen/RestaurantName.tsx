import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppContext } from '../../Scripts/AppContext';
import { useNavigation } from '@react-navigation/native';

interface RestaurantNameProps{
  Name:string
  src: any
}

const RestaurantName: React.FC<RestaurantNameProps> = ({ Name, src }) => {

  const {setTempData} = useAppContext()
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={src} style={styles.image} />
      <TouchableOpacity onPress={()=>{
          setTempData(Name)
          console.log("🚀 ~ Name:", Name)
          navigation.navigate('MapWithRestaurantLocations')
      }}>
        <Text style={styles.restaurantName}>{Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        zIndex:1,
        width:350,
        borderRadius:10,
        marginBottom:15,
        borderWidth:1,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
        borderColor:'#F2DCC2',
    },
    restaurantName:{
      color:'#F2DCC2',
      marginVertical:20,
      marginLeft:10,
    },
    image:{
      height:30,
      width:30,
      marginLeft:30,
    }
})

export default RestaurantName