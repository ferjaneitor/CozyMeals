import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchDiv}>
        <Image source={require('../../assets/Images/zoom.png')} style={styles.searchIcon} />
        <TextInput
        style={styles.input}
        placeholder='Buscar Comida'
        />
        <Image source={require('../../assets/Images/e-remove.png')} style={styles.searchIcon} />
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
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: 'black',
        marginHorizontal: 10
    },
    searchIcon: {
        width: 30,
        height: 30
    },
})

export default SearchBar