import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/Style';

export const MyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.item}>{title}</Text>
  </TouchableOpacity>
);
