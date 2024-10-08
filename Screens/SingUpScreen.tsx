import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { profileData, setGmail, setPassWord, setUserName, Validate } from '../Data/profileData';
import { useAppContext } from '../Scripts/AppContext';

const SingUpScreen = () => {

  const [userName, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSelected, setSelection] = useState(false);
  const [Error, setError] = useState("");

  const navigation = useNavigation();

  const {setIdentified} =useAppContext()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const validate = ()=>{
    try {
      Validate(email, password, confirmPassword, userName);
      console.log('Profile Data:', profileData);
      setIdentified(true)
    } catch (error:any) {
        console.error('Validation failed:', error.message);
        setError(error)
    }
  }

  return (
    <ImageBackground
    source={require('../assets/Images/fondo.png')}
    style={styles.container}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.textButtonsContainer}>
          <Text style={styles.LoginText}>Registrate</Text>
          <Text style={styles.ParaContinuarText}>Para Continuar</Text>
        </View>
        <View style={styles.textButtonsContainer}>
          <TextInput 
            placeholder='Nombre de Usuario' 
            style={styles.inputText}
            value={userName}
            onChangeText={setuserName}
          />
          <TextInput 
            placeholder='Correo' 
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            placeholder='Contraseña' 
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput 
            placeholder='Confirmar Contraseña' 
            style={styles.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={[{backgroundColor:isSelected? '#BF8E63':'#F2DCC2'},styles.CheckBox]} onPress={()=>setSelection(!isSelected)}>
            <Text style={{color:'transparent'}}> o </Text>
          </TouchableOpacity>
          <Text>Acepto los terminos y condiciones</Text>
        </View>
        <Text>{Error}</Text>
        <View style={styles.textButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{validate()}} >
            <Text style={styles.buttonText}>
              Sing up
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Certificados
            </Text>
          </TouchableOpacity>
          <Text style={styles.extrasText}>
            *ES OBLIGATORIO PARA COMEDORES COMUNITARIOS*
          </Text> */}
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
    marginTop:10,
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
  CheckBox:{
    borderWidth:2,
    width:20,
    height:20,
    borderRadius:10,
    borderColor:'#BF8E63',
    marginRight:10,
  },
})

export default SingUpScreen