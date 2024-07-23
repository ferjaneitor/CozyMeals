import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SingInScreen = () => {

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
          <Text style={styles.LoginText}>Login</Text>
          <Text style={styles.ParaContinuarText}>Para Continuar</Text>
        </View>
        <View style={styles.textButtonsContainer}>
          <TextInput placeholder='Nombre de Usuario' style={styles.inputText}/>
          <TextInput placeholder='Contraseña' style={styles.inputText}/>
        </View>
        <View style={styles.textButtonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Log-in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Certificados
            </Text>
          </TouchableOpacity>
          <Text style={styles.extrasText}>
            *ES OBLIGATORIO PARA COMEDORES COMUNITARIOS*
          </Text>
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
    resizeMode: 'cover',
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
    width:'90%',
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

export default SingInScreen