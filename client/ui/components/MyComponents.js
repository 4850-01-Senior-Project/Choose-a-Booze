import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles, colors } from '../assets/Style.js';

export const Category = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          //color: pressed ? colors.orange : colors.black,
          backgroundColor: pressed ? colors.green : colors.purple,
        },
        styles.category,
      ]}
    >
      <Text>{item}</Text>
    </Pressable>
  );
}

export const Discovery = ({ item }) => {
  return (<Text style={styles.discovery}>{item}</Text>);
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
