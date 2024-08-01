import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PageNotFound = () => {
  return (
    <View style={styles.container}> 
        <Image source={require('../assets/Images/warning-sign.png')} style={styles.Erroricon}/>
        <Text style={styles.ErrorText}>{"< Error 404 />"}</Text>
        <Text style={styles.PageNotFoundText}>Page Not Found</Text>
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
  },
  Erroricon:{
    marginBottom:20,
  },
})

export default PageNotFound