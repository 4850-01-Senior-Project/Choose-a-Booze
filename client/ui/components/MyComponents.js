import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles } from '../assets/Style.js';

export const Category = ({ item , onPress}) => {
	return (
	<Pressable style={styles.category} onPress={onPress}>
		<Text>{item}</Text>
	</Pressable>
	);
}

export const Discovery = ({ item }) => {
	return (<Text>{item}</Text>);
}

export const Banner = () => {
	return(
		<View style={styles.banner}>
        <Image
          style={styles.fullSize}
		  source={require('../assets/logo.jpg')}
        />
      </View>
	);
}
