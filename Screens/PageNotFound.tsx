import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAppContext } from '../Scripts/AppContext';
import { useNavigation } from '@react-navigation/native';

const PageNotFound = () => {

  const navigation:any = useNavigation();
  const { setIdentified } = useAppContext();

  return (
    <View style={styles.container}> 
        <TouchableOpacity onPress={()=>{
            setIdentified(false)
        }}>
          <Image source={require('../assets/Images/warning-sign.png')} style={styles.Erroricon}/>
          <Text style={styles.ErrorText}>{"< Error 404 />"}</Text>
          <Text style={styles.PageNotFoundText}>Page Not Found</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F2DCC2',
  },
  ErrorText:{
    fontSize:30,
    color:'#BD0B0E',
  },
  PageNotFoundText:{
    fontSize:22,
    color:'#513A2C',
    marginTop:10,
    alignSelf:'center'
  },
  Erroricon:{
    marginBottom:20,
  },
})

export default PageNotFound