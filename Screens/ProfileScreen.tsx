import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={(()=>{navigation.navigate('SingIn')})}>
        <Text>
          Login - Sing In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(()=>{navigation.navigate('SingUp')})}>
        <Text>
          Sing Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen