import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../assets/Style';

export const MyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.item}>{title}</Text>
  </TouchableOpacity>
);
