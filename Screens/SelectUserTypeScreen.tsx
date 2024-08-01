import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAppContext } from '../Scripts/AppContext'
import { useNavigation } from '@react-navigation/native'

const SelectUserTypeScreen = () => {

    const {setLoginType} = useAppContext()
    const navigation: any = useNavigation();

  return (
    <ImageBackground
    source={require('../assets/Images/fondo.png')}
    style={styles.container}
    >
        <SafeAreaView>
            <View style={styles.headerview}>
                <Text style={styles.whoRUText} > ¿Quien eres? </Text> 
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    setLoginType('Donador')
                    navigation.navigate('NoUserIdentify')
                }}>
                    <Text style={styles.buttonText}> Donador </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    setLoginType('Comedor')
                    navigation.navigate('NoUserIdentify')
                }}>
                    <Text style={styles.buttonText}> Comedor Comunitario </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    setLoginType('Receptor')
                    navigation.navigate('NoUserIdentify')
                }}>
                    <Text style={styles.buttonText}> Receptor </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fef4f0',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
    },
    welcomeText:{
        fontSize:45,
        marginBottom:20,
        fontWeight:'bold',
    },
    whoRUText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#513A2C',    
    },
    button:{
        margin:20,
        alignItems:'center',
        backgroundColor:'#BF8E63',
        width:350,
        paddingVertical:15,
        marginTop:10,
        borderRadius:8,
    },
    buttonText:{
        color:'#513A2C',
        fontSize:22,
    },
    buttonView:{

    },
    headerview:{
        marginBottom:110,
        alignItems:'center',
    },
})

export default SelectUserTypeScreen