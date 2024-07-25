import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const NoUserIdentifyScreen = () => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    }, []);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    const Move2Screen = (screenName: keyof RootStackParamList) => {
      navigation.navigate(screenName);
    };

  return (
    <ImageBackground
    source={require('../assets/Images/fondo.png')}
    style={styles.container}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.textButtonsContainer}>
          <Text style={styles.LoginText}>Bienvenido</Text>
          <Text style={styles.ParaContinuarText}>Para Continuar dale click a uno de los dos botones</Text>
        </View>
        <View style={styles.textButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Move2Screen('SignIn') }} >
            <Text style={styles.buttonText}>
              Sing In  /  Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { Move2Screen('SignUp') }} >
            <Text style={styles.buttonText}>
              Sing Up  /  Register
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
    marginVertical:20,
  },
  button:{
    backgroundColor:'#BF8E63',
    width:350,
    paddingVertical:10,
    marginVertical:20,
    alignItems:'center',
    borderRadius:8,
    zIndex:2,
  },
  buttonText:{
    color:'#513A2C',
    fontSize:18,
    zIndex:2,
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
    fontSize:20,
    width:300,
  },
})

export default NoUserIdentifyScreen