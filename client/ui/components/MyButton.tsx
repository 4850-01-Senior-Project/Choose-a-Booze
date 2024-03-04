import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const MyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
