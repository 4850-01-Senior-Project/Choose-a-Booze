import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyButton = ({title}) => {
  return (
	<TouchableOpacity>
	  <Text>{title}</Text>
	</TouchableOpacity>
  )
}

export default MyButton
