import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { useAppContext } from '../../Scripts/AppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {

    const [Searching,SetSearching] = useState("")
    const {SetSearch} = useAppContext()
    const navigation: any = useNavigation();

    const StartSearching = () =>{
        SetSearch(Searching)
        navigation.navigate('Search')
    }

    const ClearBar = () =>SetSearching("")

  return (
    <View style={styles.searchDiv}>
        <TouchableOpacity onPress={()=>{
            StartSearching()
        }}>
            <Image source={require('../../assets/Images/zoom.png')} style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
        style={styles.input}
        placeholder='Buscar Comida'
        value={Searching}
        onChangeText={SetSearching}
        />
        <TouchableOpacity onPress={()=>ClearBar()} style={styles.DeleveView}>
            <Image source={require('../../assets/Images/e-remove.png')} style={styles.DeleteSearchIcon} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    searchDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    input: {
        padding: 10,
        paddingLeft: 50,
        width: '75%',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: 'black',
        marginHorizontal: 10
    },
    DeleteSearchIcon: {
        width: 30,
        height: 30,
        zIndex:100,
    },
    DeleveView:{
        zIndex:100,
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
})

export default SearchBar