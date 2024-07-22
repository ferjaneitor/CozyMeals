import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import React from 'react'

interface HorizontalScrollerTitleProps {
  title: string;
}

const HorizontalScrollerTitle: React.FC<HorizontalScrollerTitleProps> = ({ title }) => {
  return (
    <View style={styles.horizontalScrollerTitle}>
      <Image source={require('../../assets/Images/circle-arrow-left.png')} style={styles.scrollerIcon} />
      <Text style={styles.scrollerText}>{title}</Text>
      <Image source={require('../../assets/Images/circle-arrow-right.png')} style={styles.scrollerIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalScrollerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%'
  },
  scrollerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollerIcon: {
    height: 30,
    width: 30
  },
})

export default HorizontalScrollerTitle
