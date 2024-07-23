import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const SingUpScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ImageBackground
    source={require('../assets/Images/fondo.png')}
    style={styles.container}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.textButtonsContainer}>
          <Text style={styles.LoginText}>Sing Up</Text>
          <Text style={styles.ParaContinuarText}>Para Continuar</Text>
        </View>
        <View style={styles.textButtonsContainer}>
          <TextInput placeholder='Nombre de Usuario' style={styles.inputText}/>
          <TextInput placeholder='Correo' style={styles.inputText}/>
          <TextInput placeholder='Contraseña' style={styles.inputText}/>
          <TextInput placeholder='Confirmar Contraseña' style={styles.inputText}/>
        </View>
        <View style={styles.textButtonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Sing up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fef4f0',
    width:'100%',
    height:'100%',
  },
  backgroundImage:{
    width:'100%',
    height:'100%',
    zIndex:0,
  },
  safeAreaView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    zIndex:2,
  },
  textButtonsContainer:{
    zIndex:2,
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:40,
  },
  button:{
    backgroundColor:'#BF8E63',
    width:350,
    paddingVertical:10,
    marginTop:10,
    alignItems:'center',
    borderRadius:8,
    zIndex:2,
  },
  buttonText:{
    color:'#513A2C',
    fontSize:18,
    zIndex:2,
  },
  extrasText:{
    zIndex:2,
    fontSize:12,
    color:'#513A2C',
    marginTop:20,
  },
  inputText:{
    zIndex:2,
    marginTop:20,
    color: '#513A2C',
    width:350,
    borderWidth:2,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    padding:15,
    fontSize:18,
  },
  LoginText:{
    zIndex:2,
    fontWeight:'bold',
    color:'#513A2C',
    fontSize:60,
  },
  ParaContinuarText:{
    zIndex:2,
    fontWeight:'bold',
    color:'#513A2C',
    fontSize:30,
  },
})

export default SingUpScreen