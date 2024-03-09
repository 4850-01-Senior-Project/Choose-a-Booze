import React from 'react'
import { Text, Pressable } from 'react-native'
import { styles } from '../assets/Style';

export const MyButton = ({ onPress, text }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.item}>{text}</Text>
  </Pressable>
);
