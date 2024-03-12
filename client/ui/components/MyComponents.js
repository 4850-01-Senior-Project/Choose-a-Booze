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
        styles.category,
        styles.section
      ]}><Text style={[styles.orange, styles.p]}>{item}</Text>
    </Pressable>
  )
}

export const Discovery = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          marginHorizontal: '5%',
          backgroundColor: pressed ? colors.purple : colors.black
        },
        styles.section,
      ]}>
      {
        <Text style={styles.h1}>{item}</Text>
      }
    </Pressable>
  );
}

export const SectionHeader = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.sectionHeader,
        {
          backgroundColor: pressed ? colors.purple : colors.black
        },
      ]}>
      {
        <Text style={styles.sectionHeader}>{title}</Text>
      }
    </Pressable>
  );
}

export const SectionItem = ({ text }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.sectionItem,
        {
          backgroundColor: pressed ? colors.green : colors.orange
        },
      ]}>
      {
        <Text style={styles.sectionItem}>{text}</Text>
      }
    </Pressable>
  );
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
