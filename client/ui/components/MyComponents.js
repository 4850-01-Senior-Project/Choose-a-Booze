import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles, colors } from '../assets/Style.js';

export const Category = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.purple : colors.black
        },
        styles.category
      ]}><Text style={[styles.orange, styles.p]}>{item}</Text>
    </Pressable>
  )
}

export const Discovery = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.purple : colors.black
        },
        styles.discovery
      ]}>
      {item}
    </Pressable>
  );
}

export const Section = ({ item }) => {
  return (<Text style={styles.section}>{item}</Text>)
}

export const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        style={styles.fullSize}
        source={require('../assets/logo.jpg')}
      />
    </View>
  );
}
