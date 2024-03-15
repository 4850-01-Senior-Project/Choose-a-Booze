import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles, colors } from '../assets/Style.js';

  // --------------------------------------------------

export const ListItem = () => {
  return (
    <Text>ListItem</Text>
  )
}

  // --------------------------------------------------

export const Category = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.category
      ]}><Text style={styles.p}>{item}</Text>
    </Pressable>
  )
}

// --------------------------------------------------

export const Discovery = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.discovery
      ]}><Text style={styles.h1}>{item}</Text>
    </Pressable>
  );
}

  // --------------------------------------------------

export const Selector = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.orange : colors.purple
        },
        styles.selector
      ]}><Text style={styles.h1}>{item}</Text>
    </Pressable>
  )
}

  // --------------------------------------------------

export const SectionHeader = ({ title }) => {
  return (<Text style={styles.sectionHeader}>{title}</Text>);
}

  // --------------------------------------------------

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
