import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles, colors } from '../assets/Style.js';

export const Category = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
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
      {
        <Text style={styles.h1}>{item}</Text>
      }
    </Pressable>
  );
}

export const SectionHeader = ({ title }) => {
  return (<Text style={styles.sectionHeader}>{title}</Text>);
}

export const SectionItem = ({ text }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.sectionItem,
        {
          backgroundColor: pressed ? colors.purple : colors.orange
        },
      ]}>
      {
        <Text style={styles.h2}>{text}</Text>
      }
    </Pressable>
  );
}

export const Selector = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.purple : colors.black
        },
        styles.selector
      ]}><Text style={styles.h1}>{item}</Text>
    </Pressable>
  )
}